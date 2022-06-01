import { useState } from 'react';
import styles from './Card.module.scss';

function Card({ name, price, path, onPlus}) {
    const [isAdded, setIsAdded] = useState(false)
    const [isFavorite, setIsFavorite] = useState(false)

    const handleAddClick = () => {
        setIsAdded(!isAdded)
        onPlus({name, price, path})
    }

    const handleFavoriteClick = () => {
        setIsFavorite(!isFavorite)
    }

    return (
        <div className={styles.card}>
            <button className={isFavorite ? `${styles.btn} ${styles.favorite} ${styles.favoriteActive}` : `${styles.btn} ${styles.favorite}`} onClick={handleFavoriteClick}>
                <img src={isFavorite ? './img/heart-liked.svg' : './img/heart-unliked.png' } alt="heart" />
            </button>
            <img width={133} height={112} src={path} alt="sneakers" />
            <p>{name}</p>
            <div className="d-flex justify-between align-center mt-15">
                <div className="d-flex flex-column">
                    <span>Цена:</span>
                    <b>{price} руб.</b>
                </div>
                <button className={isAdded ? `${styles.btn} ${styles.btnActive}` : styles.btn} onClick={handleAddClick}>
                    <img width={11} height={11} src={isAdded ? './img/checked.svg' : './img/card-button-plus.svg'} alt="plus" />
                </button>
            </div>
        </div>
    )
}

export default Card;