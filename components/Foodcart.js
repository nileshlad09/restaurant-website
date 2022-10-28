import React from "react";
import { useCart } from "react-use-cart";
import styles from '../styles/Categories.module.css'

const Foodcart = () => {
  const { isEmpty, totalUniqueItems, items, removeItem } = useCart();
  console.log(items);
  if (isEmpty) return <p>Your cart is empty</p>;
  return (
    <>
    <div className={`container ${styles.container}`}>

      <h1>Cart ({totalUniqueItems})</h1>
      <div className={`${styles.foodcart} ${styles.foodcontainer}`}>
        {items.map((food, index) => {
          return (
            <div className={`card cartitem ${styles.card}`} key={index}>
              <img
                className="card-img-top"
                src={food.strMealThumb}
                alt="Card image cap"
              />
              <div className="card-body">
                <h5 className="card-title">{food.strMeal}</h5>
                <button
                  className="btn btn-primary"
                  onClick={() => removeItem(food.id)}
                >
                  Remove From Cart
                </button>
              </div>
            </div>

          );
        })}
      </div>
      </div>      
    </>
  );
};

export default Foodcart;
