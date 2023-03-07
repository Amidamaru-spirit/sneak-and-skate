import Card from './components/Card';
import Header from './components/Header';
import Drawer from './components/Drawer';

const arr = [
  {
    title: "КЕДЫ VANS KYLE WALKER BLACK/SULPHUR",
    price: 8690,
    imageUrl: '/sneakers/j1.jpg',
  },
  {
    title: "КЕДЫ VANS WAYVEE BLACK/WHITE",
    price: 9790,
    imageUrl: '/sneakers/j2.jpg',
  },
  {
    title: "КЕДЫ RIPNDIP DARK TWISTED FANTASY HIGH TOP",
    price: 6590,
    imageUrl: '/sneakers/j3.jpg',
  },
  {
    title: "КЕДЫ FALLEN PATRIOT VULC - PRUNE PURPLE",
    price: 5650,
    imageUrl: '/sneakers/j4.jpg',
  }
];

function App() {
  return (
    <div className="wrapper clear">
      <Drawer />
      <Header />
      

      <div className="content p-40">
        <div className="d-flex align-center mb-40 justify-between">
          <h1>Все кроссы</h1>
          <div className="search-block d-flex">
            <img width={15} /*height={}*/ src="/img/search.svg" alt="search"></img>
            <input placeholder="Поиск"></input>
          </div>
        </div>
        
        
        <div className="d-flex">

          {
            arr.map((obj) => (
              <Card 
                title = {obj.title}
                price = {obj.price}
                imageUrl = {obj.imageUrl}
              />
            ))
          } 
          
        </div>
      </div>
    </div>
  );
}

export default App;
