import React from "react";
import { useCart } from "react-use-cart";
import Fooditem from "./Fooditem";
import styles from '../styles/Categories.module.css'
const Foodcontainer = (props) => {
  const { food } = props;
  const {totalUniqueItems, updateItemQuantity, items } = useCart();
  return (
    <div className="row ">
      <div className="col-lg-8 col-md-9 col-sm-9">
        <div className={styles.foodcontainer}>
          {food.map((food, index) => {
            return <Fooditem food={food} key={index}></Fooditem>;
          })}
        </div>
      </div>
      <div className={`col-lg-4 col-md-3 col-sm-3 ${styles.ordernow}`}>
      <h1>Total Item ({totalUniqueItems})</h1>

        {items.map((food, index) => {
          return (
            <div className={styles.orderItem} key={index}>
              <img src={food.strMealThumb} alt="" />
              <div className={styles.name}>
                <h3>{food.strMeal}</h3>
                <div className={styles.quantity}>
                  <button
                    onClick={() =>
                      updateItemQuantity(food.id, food.quantity - 1)
                    }
                  >
                    -
                  </button>
                  {food.quantity}
                  <button
                    onClick={() =>
                      updateItemQuantity(food.id, food.quantity + 1)
                    }
                  >
                    +
                  </button>
                </div>
              </div>
              <span className={styles.price}>Rs {food.quantity * food.price}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Foodcontainer;
