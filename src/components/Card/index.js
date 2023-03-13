import styles from './Card.module.scss';
import React from 'react';

function Card({ id, onFavorite, title, imageUrl, price, onPlus, favorited=false }) {
  const [isAdded, setIsAdded] = React.useState(false);
  const [isFavorite, setIsFavorite] = React.useState(favorited);

  const onClickPlus = () => {
    onPlus({ title, imageUrl, price });
    setIsAdded(!isAdded);
  }

  const onClickFavorite = () => {
    setIsFavorite(!isFavorite);
    onFavorite({ id, title, imageUrl, price });
  }

  

    return (
        <div className={styles.card}>
            <div className={styles.favorite} onClick={onClickFavorite}>
              <img 
                width={18} 
                height={18} 
                src={isFavorite ? "/img/likefill.svg" : "/img/likeempty.svg"} 
                alt="unliked"
              ></img>
            </div>

            <img width={133} height={112} src={imageUrl} alt="sneake"></img>
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