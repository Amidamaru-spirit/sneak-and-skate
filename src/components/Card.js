function Card(props) {
    return (
        <div className="card">
            <div className="favourite">
              <img width={18} height={18} src="/img/likeempty.svg" alt="unliked"></img>
            </div>

            <img width={133} height={112} src={props.imageUrl} alt="vans 1"></img>
            <h5>{props.title}</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">           
                <span>Цена:</span>
                <b className="priceAfter">{props.price}</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/img/plus.svg"></img>
              </button>
            </div>
          </div>
    )
}

export default Card;