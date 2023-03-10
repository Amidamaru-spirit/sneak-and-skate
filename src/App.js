import Card from './components/Card';
import Header from './components/Header';
import Drawer from './components/Drawer';
import React from 'react';


function App() {  
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([])
  const [cartOpened, setCartOpened] = React.useState(false);

  React.useEffect(() => {
    fetch('https://640b56e881d8a32198e186a2.mockapi.io/items')
      .then(res => {
        return res.json();
      }).then(json => {
        setItems(json);
      });
  }, []);

  const onAddToCart = (obj) => {
    setCartItems((prev) => [...prev, obj]);
  }

  return (
    <div className="wrapper clear">
      {cartOpened && <Drawer items={cartItems} onCloseCart={() => setCartOpened(false)}/>}
      <Header onClickCart={() => setCartOpened(true)}/>
      

      <div className="content p-40">
        <div className="d-flex align-center mb-40 justify-between">
          <h1>Все кроссы</h1>
          <div className="search-block d-flex">
            <img width={15} /*height={}*/ src="/img/search.svg" alt="search"></img>
            <input placeholder="Поиск"></input>
          </div>
        </div>
        
        
        <div className="d-flex flex-wrap">

          {
            items.map((item) => (
              <Card 
                title = {item.title}
                price = {item.price}
                imageUrl = {item.imageUrl}
                onPlus = {(obj) => onAddToCart(obj)}
                onFavorite = {() => console.log('fav')}
              />
            ))
          } 
          
        </div>
      </div>
    </div>
  );
}

export default App;
