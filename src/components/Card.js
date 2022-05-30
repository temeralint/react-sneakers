function Card({name, price, path}) {
    return (
        <div className="card">
            <button className="btn favorite">
                <img src="/img/heart-unliked.svg" alt="heart" />
            </button>
            <img width={133} height={112} src={path} alt="sneakers" />
            <p>{name}</p>
            <div className="d-flex justify-between align-center mt-15">
                <div className="d-flex flex-column">
                    <span>Цена:</span>
                    <b>{price} руб.</b>
                </div>
                <button className="btn">
                    <img width={11} height={11} src="/img/card-button-plus.svg" alt="card-plus" />
                </button>
            </div>
        </div>
    )
}

export default Card;