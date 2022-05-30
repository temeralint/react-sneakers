function Overlay() {
    return (
        <div className="overlay" style={{ display: 'block' }}>
            <div className="basket d-flex flex-column">
                <div className="d-flex justify-between">
                    <h2 className="mb-30">Корзина</h2>
                    <button className="btn opacity-5">
                        <img src="/img/delete.svg" alt="close" />
                    </button>
                </div>

                <div className="basket_items">
                    <div className="basket_item d-flex justify-between align-center mb-20">

                        <div style={{ backgroundImage: 'url(/img/sneakers/2.jpg)' }} className="basket_item_img"></div>
                        <div className="mr-10">
                            <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
                            <b>12 999 руб.</b>
                        </div>
                        <button className="btn opacity-5">
                            <img src="/img/delete.svg" alt="close" />
                        </button>
                    </div>

                    <div className="basket_item d-flex justify-between align-center">
                        <div style={{ backgroundImage: 'url(/img/sneakers/3.jpg)' }} className="basket_item_img"></div>
                        <div className="mr-10">
                            <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
                            <b>12 999 руб.</b>
                        </div>
                        <button className="btn opacity-5">
                            <img src="/img/delete.svg" alt="close" />
                        </button>
                    </div>

                    <div className="basket_item d-flex justify-between align-center mb-20">
                        <div style={{ backgroundImage: 'url(/img/sneakers/2.jpg)' }} className="basket_item_img"></div>
                        <div className="mr-10">
                            <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
                            <b>12 999 руб.</b>
                        </div>
                        <button className="btn opacity-5">
                            <img src="/img/delete.svg" alt="close" />
                        </button>
                    </div>

                </div>

                <div className="basket_total">
                    <ul>
                        <li>
                            <span>Итого:</span>
                            <div></div>
                            <b>21 498 руб.</b>
                        </li>
                        <li>
                            <span>Налог 5%:</span>
                            <div></div>
                            <b>1074 руб.</b>
                        </li>
                    </ul>
                    <button className="btn-green">
                        Оформить заказ
                        <img src="/img/arrow-right.svg" alt="arrow" />
                    </button>
                </div>
            </div>
        </div>

    )
}

export default Overlay;