function App() {
  return (
    <div className="wrapper clear">
      <header className="d-flex justify-between align-center p-40">
        <div className="d-flex align-center">
          <img width={40} height={40} src="/img/logo.png"></img>
          <div>
            <h3 className="text-uppercase">Sneak and skate</h3>
            <p className="opacity-5">Сникеры для всех и никто не уйдет обиженным</p>
          </div>
        </div>
        
          <ul className="d-flex">
            <li className="mr-20">
              <img width={18} height={18} src="/img/cart.svg"></img>
              <span>1499 руб.</span>
            </li>
            <li>
              <img width={18} height={18} src="/img/profile.svg"></img>
            </li>
          </ul>
        
      </header>

      <div className="content p-40">
        <h1 className="mb-40">Все кроссы</h1>
        
        <div className="d-flex">

          <div className="card">
            <img width={133} height={112} src="/sneakers/j1.jpg" alt="vans 1"></img>
            <p>КЕДЫ VANS KYLE WALKER BLACK/SULPHUR</p>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">           
                <span>Цена:</span>
                <b className="priceAfter">8 700</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/img/plus.svg"></img>
              </button>
            </div>
          </div>

          <div className="card">
            <img width={133} height={112} src="/sneakers/j1.jpg" alt="vans 1"></img>
            <p>КЕДЫ VANS KYLE WALKER BLACK/SULPHUR</p>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">           
                <span>Цена:</span>
                <b className="priceAfter">8 700</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/img/plus.svg"></img>
              </button>
            </div>
          </div>

          <div className="card">
            <img width={133} height={112} src="/sneakers/j1.jpg" alt="vans 1"></img>
            <p>КЕДЫ VANS KYLE WALKER BLACK/SULPHUR</p>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">           
                <span>Цена:</span>
                <b className="priceAfter">8 700</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/img/plus.svg"></img>
              </button>
            </div>
          </div>

          <div className="card">
            <img width={133} height={112} src="/sneakers/j1.jpg" alt="vans 1"></img>
            <p>КЕДЫ VANS KYLE WALKER BLACK/SULPHUR</p>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">           
                <span>Цена:</span>
                <b className="priceAfter">8 700</b>
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
