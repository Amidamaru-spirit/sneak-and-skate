import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import Header from './components/Header';
import Drawer from './components/Drawer';
import React from 'react';
import axios from 'axios';
import Home from './pages/Home';
import Favorites from './pages/Favorites'



function App() {  
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [favorites, setFavorites] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState('')
  const [cartOpened, setCartOpened] = React.useState(false);



  React.useEffect(() => {
      axios.get('https://640b56e881d8a32198e186a2.mockapi.io/items').then((res) => {
        setItems(res.data);
      });
      axios.get('https://640b56e881d8a32198e186a2.mockapi.io/cart').then((res) => {
        setCartItems(res.data);
      });
      axios.get('https://640f562e4ed25579dc4c83f2.mockapi.io/favorites').then((res) => {
        setFavorites(res.data);
      });
  }, []);



  const onAddToCart = (obj) => {
    axios.post('https://640b56e881d8a32198e186a2.mockapi.io/cart', obj);
    setCartItems((prev) => [...prev, obj]);
  };

  const onAddToFavorite = async (obj) => {
    try {
      if (favorites.find((favObj) => favObj.id === obj.id)) {
        axios.delete(`https://640f562e4ed25579dc4c83f2.mockapi.io/favorites/${obj.id}`);
        // setFavorites((prev) => prev.filter((item) => item.id !== obj.id));
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


  return (
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
            searchValue={searchValue}
            setSearchValue={setSearchValue}
            onChangeSearchInput={onChangeSearchInput}
            onAddToCart={onAddToCart}
            onAddToFavorite={onAddToFavorite}
          />} 
        />

        <Route path="/favorites" exact element={
          <Favorites items={favorites} onAddToFavorite={onAddToFavorite} />} 
        />
      </Routes>
      

    </div>
  );
}

export default App;
