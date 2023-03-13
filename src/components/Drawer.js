function Drawer({ onCloseCart, items = [], onRemove }) {
    return (
        <div className="overlay">
            <div className="drawer">
                <h2 className="d-flex justify-between mb-30">Корзина
                    <img onClick={onCloseCart} className="removeBtn cu-p" width={20} height={20} src="/img/btn-remove.svg" alt="Remove"></img>
                </h2>

                {items.length > 0 ? 
                    <div>
                        <div className="items flex">
                            {items.map((obj) => (
                                <div className="cartItem d-flex align-center mb-20">
                                    <div 
                                        style={{ backgroundImage: `url(${obj.imageUrl})` }} 
                                        className="cartItemImg"></div>

                                    <div className="mr-20 flex">
                                        <p className="mb-5">{obj.title}</p>
                                        <b>{obj.price} руб.</b>              
                                    </div>
                                    <img onClick={() => onRemove(obj.id)} className="removeBtn" width={20} height={20} src="/img/btn-remove.svg" alt="Remove"></img>
                                </div>
                            ))
                            };  
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
                    : <div className="cartEmpty d-flex align-center justify-center flex-column flex">
                        <img className="mb-20" width={120} height={120} src="/img/empty-cart.png"></img>
                        <h2>В корзине ничего :С</h2>
                        <p className="opacity-6">Добавьте, как минимум, одну пару кед, тогда можно сделать заказ С:</p>
                        <button onClick={onCloseCart} className="purpleButton">
                            <img src="/img/arrow.png"></img>
                            Камбэк
                        </button>
                    </div>
                }

                

                

                
            
            </div>
        </div>
    )
}

export default Drawer;