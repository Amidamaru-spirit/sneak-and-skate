import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import Header from './components/Header';
import Drawer from './components/Drawer';
import React from 'react';
import axios from 'axios';

import Home from './pages/Home';
import Favorites from './pages/Favorites'
import Orders from './pages/Orders';

import AppContext from './Context';

function App() {  
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [favorites, setFavorites] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState('')
  const [cartOpened, setCartOpened] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(true);



  React.useEffect(() => {
      async function fetchData () {
        try {
          setIsLoading(true);
          const [cartResponse, favoritesResponse, itemsResponse] = await Promise.all([
            axios.get('https://640b56e881d8a32198e186a2.mockapi.io/cart'), 
            axios.get('https://640f562e4ed25579dc4c83f2.mockapi.io/favorites'), 
            axios.get('https://640b56e881d8a32198e186a2.mockapi.io/items')
          ]);

          setIsLoading(false);

          setCartItems(cartResponse.data);
          setFavorites(favoritesResponse.data);
          setItems(itemsResponse.data);
        } catch (error) {
          alert('Ошибка при запросе данных');
          console.error(error)
        }
      }

      fetchData();
  }, []);



  const onAddToCart = async (obj) => {
    try {
      const findItem = cartItems.find((item) => Number(item.parentId) === Number(obj.id));
      if (findItem) {
        setCartItems((prev) => prev.filter(item => Number(item.parentId) !== Number(obj.id)));
        await axios.delete(`https://640b56e881d8a32198e186a2.mockapi.io/cart/${findItem.id}`);
      } else {
        setCartItems((prev) => [...prev, obj]);
        const { data } = await axios.post('https://640b56e881d8a32198e186a2.mockapi.io/cart', obj);
        setCartItems((prev) => prev.map(item => {
          if (item.parentId === data.parentId) {
            return {
              ...item,
              id: data.id
            };
          }
          return item
        }));
      }
    } catch (error) {
      alert('Не получилось добавить в корзину :С')
      console.error(error)
    }
  };

  const onAddToFavorite = async (obj) => {
    try {
      if (favorites.find((favObj) => Number(favObj.id) === Number(obj.id))) {
        axios.delete(`https://640f562e4ed25579dc4c83f2.mockapi.io/favorites/${obj.id}`);
        setFavorites((prev) => prev.filter((item) => item.id !== obj.id));
      } else {
        const { data } = await axios.post('https://640f562e4ed25579dc4c83f2.mockapi.io/favorites', obj);
        setFavorites((prev) => [...prev, data]);
      }
    } catch (error) {
      alert('Whoops...Ошибка при добавлении в избранное');
      console.error(error);
    }
    
  };

  const onRemoveItem = (id) => {
    try {
      axios.delete(`https://640b56e881d8a32198e186a2.mockapi.io/cart/${id}`);
      setCartItems((prev) => prev.filter(item => Number(item.id) !== Number(id)));
    } catch (error) {
      console.error(error);
      alert('Не удалось убрать кеды');
    }
  };



  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };

  const isItemAdded = (id) => {
    return cartItems.some((obj) => Number(obj.parentId) === Number(id));
  };


  return (
    <AppContext.Provider 
      value={{ 
        cartItems, 
        favorites, 
        items, 
        isItemAdded, 
        onAddToFavorite, 
        onAddToCart,
        setCartOpened, 
        setCartItems 
      }}>
      <div className="wrapper clear">
          <Drawer 
            items={cartItems} 
            onCloseCart={() => setCartOpened(false)} 
            onRemove={onRemoveItem} 
            opened={cartOpened}
          />
      
          <Header onClickCart={() => setCartOpened(true)}/>  

          <Routes>     
            <Route path="*" exact element={
              <Home 
                items={items}
                cartItems={cartItems}
                searchValue={searchValue}
                setSearchValue={setSearchValue}
                onChangeSearchInput={onChangeSearchInput}
                onAddToCart={onAddToCart}
                onAddToFavorite={onAddToFavorite}
                isLoading={isLoading}
              />} 
            />
            <Route path="/favorites" exact element={
              <Favorites />} 
            />
            <Route path="/orders" exact element={
              <Orders />} 
            />
          </Routes>
      </div>
    </AppContext.Provider>
  );
}

export default App;
