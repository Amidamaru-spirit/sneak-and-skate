import React from "react";
import Card from "../components/Card";
import AppContext from "../Context";

function Favorites() {
  const { favorites, onAddToFavorite } = React.useContext(AppContext);

  return (
    <div className="content">
      <div className="d-flex align-center mb-40 mt-20 justify-between">
        <h1>My...Precious</h1> 
      </div>
    
    
      <div className="d-flex flex-wrap">

      {favorites.map((item) => (
          <Card 
            key={item.title}
            favorited = {true}
            onFavorite = {onAddToFavorite}
            {...item}
          />
        ))
      } 
      
    </div>
  </div>
  )
}

export default Favorites;