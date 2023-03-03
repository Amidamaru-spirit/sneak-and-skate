function Drawer() {
    return (
        <div style={{display: 'none'}} className="overlay">
            <div className="drawer">
            <h2 className="d-flex justify-between mb-30">Корзина
            <img className="removeBtn cu-p" width={20} height={20} src="/img/btn-remove.svg" alt="Remove"></img>
            </h2>

            <div className="items">
                <div className="cartItem d-flex align-center mb-20">
                <div style={{ backgroundImage: 'url(/sneakers/j1.jpg)'}} className="cartItemImg"></div>

                <div className="mr-20 flex">
                    <p className="mb-5">КЕДЫ VANS KYLE WALKER BLACK/SULPHUR</p>
                    <b>8 700 руб.</b>              
                </div>
                <img className="removeBtn" width={20} height={20} src="/img/btn-remove.svg" alt="Remove"></img>

                </div>

                <div className="cartItem d-flex align-center">
                <div style={{ backgroundImage: 'url(/sneakers/j1.jpg)'}} className="cartItemImg"></div>

                <div className="mr-20 flex">
                    <p className="mb-5">КЕДЫ VANS KYLE WALKER BLACK/SULPHUR</p>
                    <b>8 700 руб.</b>              
                </div>
                <img className="removeBtn" width={20} height={20} src="/img/btn-remove.svg" alt="Remove"></img>

                </div>
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