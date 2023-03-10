import styles from './Card.module.scss';
import React from 'react';

function Card({ onFavorite, title, imageUrl, price, onPlus }) {
  const [isAdded, setIsAdded] = React.useState(false);

  const onClickPlus = () => {
    onPlus({ title, imageUrl, price });
    setIsAdded(!isAdded);
  }

  

    return (
        <div className={styles.card}>
            <div className={styles.favorite} onClick={onFavorite}>
              <img width={18} height={18} src="/img/likeempty.svg" alt="unliked"></img>
            </div>

            <img width={133} height={112} src={imageUrl} alt="vans 1"></img>
            <h5>{title}</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">           
                <span>Цена:</span>
                <b className="priceAfter">{price}</b>
              </div>
              
                <img 
                  className={styles.plus} 
                  onClick={onClickPlus} 
                  width={17} 
                  height={17} 
                  src={isAdded ? "/img/btn-check.svg" : "/img/btn-plus.svg"}
                ></img>
              
            </div>
          </div>
    )
}

export default Card;