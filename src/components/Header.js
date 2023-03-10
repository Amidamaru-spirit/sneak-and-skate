function Header(props) {
    return (
        <header className="d-flex justify-between align-center p-40">
            <div className="d-flex align-center">
            <img width={40} height={40} src="/img/logo.png"></img>
            <div>
                <h3 className="text-uppercase">Sneak and skate</h3>
                <p className="opacity-5">Сникеры для всех и никто не уйдет обиженным</p>
            </div>
            </div>
            
            <ul className="d-flex">
                <li className="mr-20 cu-p" onClick={props.onClickCart}>
                    <img width={18} height={18} src="/img/cart.svg"></img>
                    <span>1499 руб.</span>
                </li>
                    <li>
                    <img width={18} height={18} src="/img/profile.svg"></img>
                </li>
            </ul>
            
        </header>
    )
}

export default Header;