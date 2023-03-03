function Card() {
    return (
        <div className="card">
            <div className="favourite">
              <img width={18} height={18} src="/img/likeempty.svg" alt="unliked"></img>
            </div>

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
    )
}

export default Card;