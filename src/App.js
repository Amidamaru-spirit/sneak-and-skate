import Card from './components/Card';
import Header from './components/Header';
import Drawer from './components/Drawer';

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

          <Card /> 

          <div className="card">
            <img width={133} height={112} src="/sneakers/j2.jpg" alt="vans 1"></img>
            <p>КЕДЫ VANS WAYVEE BLACK/WHITE</p>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">           
                <span>Цена:</span>
                <b className="priceAfter">9 800</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/img/plus.svg"></img>
              </button>
            </div>
          </div>

          <div className="card">
            <img width={133} height={112} src="/sneakers/j3.jpg" alt="vans 1"></img>
            <p>КЕДЫ RIPNDIP DARK TWISTED FANTASY HIGH TOP SHOE </p>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">           
                <span>Цена:</span>
                <b className="priceAfter">6 700</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/img/plus.svg"></img>
              </button>
            </div>
          </div>

          <div className="card">
            <img width={133} height={112} src="/sneakers/j4.jpg" alt="vans 1"></img>
            <p>КЕДЫ FALLEN PATRIOT VULC - PRUNE PURPLE</p>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">           
                <span>Цена:</span>
                <b className="priceAfter">5 650</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/img/plus.svg"></img>
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;
