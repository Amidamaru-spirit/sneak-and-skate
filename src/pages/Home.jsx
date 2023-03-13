import Card from '../components/Card';

function Home(
  { items,
    searchValue,
    setSearchValue,
    onChangeSearchInput,
    onAddToCart,
    onAddToFavorite}) {
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
    
    
      <div className="d-flex flex-wrap">

      {
        items
        .filter((item) => item.title.toLowerCase().includes(searchValue.toLowerCase()))
        .map((item) => (
          <Card 
            key={item.title}
            onPlus = {(obj) => onAddToCart(obj)}
            onFavorite = {(obj) => onAddToFavorite(obj)}
            {...item}
          />
        ))
      } 
      
    </div>
  </div>
  )
}

export default Home;