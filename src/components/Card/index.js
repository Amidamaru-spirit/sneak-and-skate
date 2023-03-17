import styles from './Card.module.scss';
import React from 'react';
import ContentLoader from 'react-content-loader';

import AppContext from '../../Context';


function Card({ 
  id,
  onFavorite, 
  title, 
  imageUrl, 
  price, 
  onPlus, 
  favorited = false, 
  loading = false 
}) {
  const [isFavorite, setIsFavorite] = React.useState(favorited);
  const { isItemAdded } = React.useContext(AppContext); 
  const obj = { id, parentId: id, title, imageUrl, price }

  const onClickPlus = () => {
    onPlus(obj);
  }

  const onClickFavorite = () => {
    setIsFavorite(!isFavorite);
    onFavorite(obj);
  }

  

    return (
        <div className={styles.card}>
          {
            loading ?  <ContentLoader 
              speed={2}
              width={165}
              height={250}
              viewBox="0 0 160 260"
              backgroundColor="#f4e0ff"
              foregroundColor="#f1f5e1"
            >
            <rect x="0" y="0" rx="20" ry="20" width="150" height="155" /> 
            <rect x="0" y="165" rx="5" ry="5" width="150" height="15" /> 
            <rect x="0" y="185" rx="5" ry="5" width="100" height="15" /> 
            <rect x="0" y="230" rx="5" ry="5" width="80" height="24" /> 
            <rect x="124" y="225" rx="100" ry="100" width="32" height="32" />
          </ContentLoader> : <>
            {onFavorite && 
              <div className={styles.favorite} onClick={onClickFavorite}>
                <img 
                  width={18} 
                  height={18} 
                  src={isFavorite ? "img/likefill.svg" : "img/likeempty.svg"} 
                  alt="unliked"
                ></img>
              </div>
            }

            <img width={150} height={155} src={imageUrl} alt="sneake"></img>
            <h5>{title}</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">           
                <span>Цена:</span>
                <b className="priceAfter">{price}</b>
              </div>
              
              {onPlus && 
                <img 
                  className={styles.plus} 
                  onClick={onClickPlus} 
                  width={17} 
                  height={17} 
                  src={isItemAdded(id) ? "img/btn-check.svg" : "img/btn-plus.svg"}
                ></img>
              }
              
            </div>
          </>
          }
            
          </div>
    )
}

export default Card;