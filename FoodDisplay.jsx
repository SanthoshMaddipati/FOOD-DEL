import React, { useContext } from 'react';
import './FoodDisplay.css';
import { StoreContext } from '../../context/StoreContext';
import FoodItem from '../FoodItem/FoodItem';

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);

  if (!food_list) {
    return <p>Loading...</p>; // Handle case when food_list is not yet loaded
  }

  return (
    <div className='food-display' id='food-display'>
      <h2>Top dishes near you</h2>
      <div className="food-display-list">
        {food_list.map((item) => (
          (category === "All" || category === item.category) && (
            <FoodItem
              key={item._id} 
              id={item._id}
              name={item.name}
              description={item.description}
              price={item.price}
              image={item.image}
            />
          )
        ))}
      </div>
    </div>
  );
};

export default FoodDisplay;
