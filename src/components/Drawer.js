function Drawer({ onCloseCart, items = [] }) {
    return (
        <div className="overlay">
            <div className="drawer">
                <h2 className="d-flex justify-between mb-30">Корзина
                    <img onClick={onCloseCart} className="removeBtn cu-p" width={20} height={20} src="/img/btn-remove.svg" alt="Remove"></img>
                </h2>

                <div className="items">
                    {
                        items.map((obj) => {
                            <div className="cartItem d-flex align-center mb-20">
                                <div 
                                    style={{ backgroundImage: `url(${obj.imageUrl})`}} 
                                    className="cartItemImg"></div>

                                <div className="mr-20 flex">
                                    <p className="mb-5">{obj.title}</p>
                                    <b>{obj.price} руб.</b>              
                                </div>
                                <img className="removeBtn" width={20} height={20} src="/img/btn-remove.svg" alt="Remove"></img>
                            </div>
                        })
                    }
                </div>

                <div className="cartTotalBlock">
                    <ul>
                        <li>
                            <span>Итого:</span>
                            <div></div>
                            <b> 14 600 руб.</b>
                        </li>
                        <li>
                            <span>Налог 5%:</span>
                            <div></div>
                            <b> 1 200 руб.</b>
                        </li>
                    </ul>
                    <button className="purpleButton">
                    Оформить заказ 
                        <img src="/img/arrow.png" alt="arrow">
                        </img>
                    </button>
                </div>
            
            </div>
        </div>
    )
}

export default Drawer;