import Card from '../components/Card';
import React from 'react';

function Home(
  { items,
    searchValue,
    setSearchValue,
    onChangeSearchInput,
    onAddToCart,
    onAddToFavorite,
    isLoading
  }) {

    const renderItems = () => {
      const filtredItems = items.filter((item) => 
        item.title.toLowerCase().includes(searchValue.toLowerCase()),
      );
      return (isLoading ? [...Array(12)] : filtredItems).map((item, index) => (
          <Card 
            key={index}
            onPlus = {(obj) => onAddToCart(obj)}
            onFavorite = {(obj) => onAddToFavorite(obj)}
            loading = {isLoading}
            {...item}
          />
        ))
      }

  return (
    <div className="content p-40">
      <div className="d-flex align-center mb-40 justify-between">
        <h1>{searchValue ? `Ищем: "${searchValue}"` : "Все кроссы"}</h1>
        <div className="search-block d-flex">
          <img width={15} /*height={}*/ src="/img/search.svg" alt="search"></img>
          {searchValue && 
            (<img 
              onClick={() => setSearchValue('')} 
              className="clear removeBtn cu-p" 
              src="/img/btn-remove.svg" 
              alt="clear"
            ></img>)}
          <input onChange={onChangeSearchInput} value={searchValue} placeholder="Поиск..."></input>
        </div>
      </div>
    
    
      <div className="d-flex flex-wrap">{renderItems()}</div>
  </div>
  )
}

export default Home;