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
            loading ? <ContentLoader 
            speed={5}
            width= "100%"
            height= "100%"
            viewBox="0 0 220 420"
            backgroundColor="#eac2ff"
            foregroundColor="#edfbb7"
          >
            <rect x="0" y="10" rx="20" ry="20" width="100%" height="45%" /> 
            <rect x="0" y="236" rx="5" ry="5" width="100%" height="5%" /> 
            <rect x="0" y="264" rx="5" ry="5" width="50%" height="5%" /> 
            <rect x="0" y="350" rx="5" ry="5" width="45%" height="10%" /> 
            <rect x="177" y="357" rx="100" ry="100" width="13%" height="7%" />
          </ContentLoader> : <>
            {onFavorite && 
              <div className={styles.favorite} onClick={onClickFavorite}>
                <img 
                  width={25} 
                  height={25} 
                  src={isFavorite ? "img/likefill.svg" : "img/likeempty.svg"} 
                  alt="unliked"
                ></img>
              </div>
            }
            <div className='card__image'>
              <img width="100%" height="100%" src={imageUrl} alt="sneake"></img>
            </div>
            
            <h5>{title}</h5>
            <div className="card__price d-flex justify-between align-center">
              <div className="d-flex flex-column">           
                <span>Цена:</span>
                <b className="priceAfter">{price}</b>
              </div>
              
              {onPlus && 
                  <img 
                    className={styles.plus} 
                    onClick={onClickPlus} 
                    width={30} 
                    height={30} 
                    src={isItemAdded(id) ? "img/btn-check.png" : "img/btn-plus.png"}
                    ></img>
              }
              
            </div>
          </>
          }
            
          </div>
    )
}

export default Card;