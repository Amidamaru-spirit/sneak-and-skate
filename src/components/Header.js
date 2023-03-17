import React from "react";
import { Link } from 'react-router-dom';
import { useCart } from "../hooks/useCart";

function Header(props) {
    const { totalPrice } = useCart();
    

    return (
        <header className="d-flex justify-between align-center p-40">
            <Link to="/sneak-and-skate/">
                <div className="d-flex align-center">
                <img width={40} height={40} src="img/logo.png"></img>
                    <div>
                        <h3 className="text-uppercase">Sneak and skate</h3>
                        <p className="opacity-5">Сникеры для всех и никто не уйдет обиженным</p>
                    </div>
                </div>
            </Link>
            
            
            <ul className="d-flex">
                <li className="mr-20 cu-p" onClick={props.onClickCart}>
                    <img width={20} height={20} src="img/cart.svg" alt="Cart"></img>
                    <span>{totalPrice} руб.</span>
                </li>
                <li>
                    <Link to="sneak-and-skate/favorites">
                        <img className="mr-20 cu-p" width={20} height={20} src="img/fav.png" alt="Favorite"></img>
                    </Link>
                </li>
                <li>
                    <Link to="sneak-and-skate/orders">
                    <img width={20} height={20} src="img/profile.svg" alt="Profile"></img>
                    </Link>
                </li>
            </ul>
            
        </header>
    )
}

export default Header;