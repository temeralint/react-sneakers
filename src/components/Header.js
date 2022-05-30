function Header() {
    return (
        <header className="d-flex justify-between align-center p-40">
            <div className="d-flex align-center">
                <img width={40} height={40} src="/img/logo.png" alt="logo" />
                <div className="ml-15">
                    <h1 className="text-uppercase">React sneakers</h1>
                    <p className="opacity-5">Магазин лучших кроссовок</p>
                </div>
            </div>

            <div>
                <ul className="d-flex">
                    <li className="mr-30">
                        <img width={18} height={18} src="/img/cart.svg" alt="cart" />
                        <span> 1205р.</span>
                    </li>
                    <li className="mr-30">
                        <img width={18} height={18} src="/img/favorite.svg" alt="favorites" />
                    </li>
                    <li className="mr-30">
                        <img width={18} height={18} src="/img/profile.svg" alt="profile" />
                    </li>
                </ul>
            </div>
        </header>
    )
}

export default Header;