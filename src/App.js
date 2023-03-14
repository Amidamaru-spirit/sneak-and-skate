import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import Header from './components/Header';
import Drawer from './components/Drawer';
import React from 'react';
import axios from 'axios';

import Home from './pages/Home';
import Favorites from './pages/Favorites'
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
        setIsLoading(true);
        const cartResponse = await axios.get('https://640b56e881d8a32198e186a2.mockapi.io/cart');
        const favoritesResponse = await axios.get('https://640f562e4ed25579dc4c83f2.mockapi.io/favorites');
        const itemsResponse = await axios.get('https://640b56e881d8a32198e186a2.mockapi.io/items');

        setIsLoading(false);

        setCartItems(cartResponse.data);
        setFavorites(favoritesResponse.data);
        setItems(itemsResponse.data);
      }

      fetchData();
  }, []);



  const onAddToCart = (obj) => {
    try {
      if (cartItems.find((item) => Number(item.id) === Number(obj.id))) {
        axios.delete(`https://640b56e881d8a32198e186a2.mockapi.io/cart/${obj.id}`);
        setCartItems((prev) => prev.filter(item => Number(item.id) !== Number(obj.id)));
      } else {
        axios.post('https://640b56e881d8a32198e186a2.mockapi.io/cart', obj);
        setCartItems((prev) => [...prev, obj]);
      }
    } catch (error) {
      
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
      alert('Whoops...')
    }
    
  };

  const onRemoveItem = (id) => {
    axios.delete(`https://640b56e881d8a32198e186a2.mockapi.io/cart/${id}`);
    setCartItems((prev) => prev.filter(item => item.id !== id));
  };



  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };

  const isItemAdded = (id) => {
    return cartItems.some((obj) => Number(obj.id) === Number(id));
  };


  return (
    <AppContext.Provider 
      value={{ 
        cartItems, 
        favorites, 
        items, 
        isItemAdded, 
        onAddToFavorite, 
        setCartOpened, 
        setCartItems 
      }}>
      <div className="wrapper clear">
        {cartOpened && 
          <Drawer 
            items={cartItems} 
            onCloseCart={() => setCartOpened(false)} 
            onRemove={onRemoveItem} 
          />}
      
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
          </Routes>
      </div>
    </AppContext.Provider>
  );
}

export default App;
