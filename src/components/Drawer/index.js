import React from "react";
import axios from "axios";

import styles from "./Drawer.module.scss";

import Info from "../Info";
import { useCart } from "../../hooks/useCart";

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function Drawer({ onCloseCart, items = [], onRemove, opened }) {
    const { cartItems, setCartItems, totalPrice } = useCart();
    const [orderId, setOrderId] = React.useState(null)
    const [isOrderComplete, setIsOrderComplete] = React.useState(false);
    const [isLoading, setIsLoading] = React.useState(false);
    

    const onClickOrder = async () => {
       try {
        setIsLoading(true);
        const { data } = await axios.post('https://640f562e4ed25579dc4c83f2.mockapi.io/orders', {
            items: cartItems,
        });
        setOrderId(data.id);
        setIsOrderComplete(true);
        setCartItems([]);

        for (let i = 0; i < cartItems.length; i++) {
            const item = cartItems[i];
            await axios.delete('https://640b56e881d8a32198e186a2.mockapi.io/cart/' + item.id);
            await delay(1000);
        }

       } catch (error) {
        alert('Whoops, заказ не получился :с');
        console.error(error);
       } 
       setIsLoading(false);
    };
    return (
        <div className={`${styles.overlay} ${opened ? styles.overlayVisible : ''}`}>
            <div className={styles.drawer}>
                <h2 className="d-flex justify-between mb-30">Корзина
                    <img onClick={onCloseCart} className="removeBtn cu-p" width={20} height={20} src="/img/btn-remove.svg" alt="Remove"></img>
                </h2>

                {items.length > 0 ? 
                    (<div className="d-flex flex-column flex">
                        <div className="items flex">
                            {items.map((obj) => (
                                <div key={obj.id} className="cartItem d-flex align-center mb-20">
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
                            }  
                            </div> 
                            <div className="cartTotalBlock">
                            <ul>
                                <li>
                                    <span>Итого:</span>
                                    <div></div>
                                    <b> {totalPrice} руб.</b>
                                </li>
                                <li>
                                    <span>НДС 10%:</span>
                                    <div></div>
                                    <b> {Math.round(totalPrice / 100 * 10)} руб.</b>
                                </li>
                            </ul>
                            <button disabled={isLoading} onClick={onClickOrder} className="purpleButton">
                                Оформить заказ 
                                <img src="/img/arrow.png" alt="arrow">
                                </img>
                            </button>
                        </div>
                    </div>
                    ) : (
                            <Info 
                                title={isOrderComplete ? `Ву-ху! Заказ №${orderId} оформлен!` : "Ничего нет :С" }
                                description={isOrderComplete ? "Ваши кеды упокавовываются и скоро будут у вас ^-^" : "Добавить бы сюда пару кед... :3"} 
                                image={isOrderComplete ? "/img/complete.png" : "/img/empty-cart.png"}
                            />
                        )
                    
                }

                

                

                
            
            </div>
        </div>
    )
}

export default Drawer;