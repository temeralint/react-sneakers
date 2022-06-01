function Overlay({ onClose, items = [] }) {
    let total = 0
    return (
        <div className="overlay">
            <div className="basket d-flex flex-column">
                <div className="d-flex justify-between">
                    <h2 className="mb-30">Корзина</h2>
                    <button className="btn opacity-5" onClick={onClose}>
                        <img src="/img/delete.svg" alt="close" />
                    </button>
                </div>

                <div className="basket_items">
                    {
                        items.map(item => {
                            return <div className="basket_item d-flex justify-between align-center mb-20">
                                    <div style={{ backgroundImage: `url(${item.path})` }} className="basket_item_img"></div>
                                    <div className="mr-10">
                                        <p className="mb-5">{item.name}</p>
                                        <b>{item.price} руб.</b>
                                    </div>
                                    <button className="btn opacity-5">
                                        <img src="/img/delete.svg" alt="close" />
                                    </button>
                                </div>
                        })
                    }
                </div>

                <div className="basket_total">
                    <ul>
                        <li>
                            <span>Итого:</span>
                            <div></div>
                            <b>{items.forEach(item => {
                                total += item.price
                            })} {total} руб.</b>
                        </li>
                        <li>
                            <span>Налог 5%:</span>
                            <div></div>
                            <b>0 руб.</b>
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