import React from "react";
import axios from "axios";

import Card from "../components/Card";
import AppContext from "../Context";


function Orders() {
  const { onAddToCart, onAddToFavorite } = React.useContext(AppContext);
  const [orders, setOrders] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get('https://640f562e4ed25579dc4c83f2.mockapi.io/orders');
        setOrders(data.reduce((prev, obj) => [...prev, ...obj.items], []));
        setIsLoading(false);
      } catch (error) {
        alert('Whoopse');
        console.error(error);
      }
    })();
  }, []); 

  return (
    <div className="content">
      <div className="d-flex align-center mb-40 justify-between">
        <h1>Мои заказы</h1> 
      </div>
    
    
      <div className="d-flex flex-wrap">

        {(isLoading ? [...Array(12)] : orders).map((item, index) => (
            <Card 
              key={index}
              loading = {isLoading}
              {...item}
            />
          ))
        } 
      
    </div>
  </div>
  )
}

export default Orders;