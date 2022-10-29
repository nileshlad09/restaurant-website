import React, { useState } from "react";
import { useCart } from "react-use-cart";
import Fooditem from "./Fooditem";
import styles from '../styles/Styles.module.css'
import Link from "next/link";
const Foodcontainer = (props) => {
  const { food } = props;
  const {totalUniqueItems, updateItemQuantity, items, cartTotal } = useCart();

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
      <h2>Total Amount Rs{cartTotal}</h2>
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
        <Link className={styles.ordernowbtn} href="/Paymentpage">Order Now</Link>
      </div>
    </div>
  );
};

export default Foodcontainer;
