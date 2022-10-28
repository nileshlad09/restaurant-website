import * as React from "react";
import { useCart } from "react-use-cart";
import styles from '../styles/Categories.module.css'
export default function Fooditem(props) {
  const { food } = props;
  const { addItem } = useCart();
  const func1=()=>{
    addItem(food)
  }
  return (
    <>
      <div className={`card ${styles.card}` }  >
        <img
          className="card-img-top"
          src={food.strMealThumb}
          alt="Card image cap"
        />
        <div className="card-body">
          <h5 className="card-title">{food.strMeal}</h5>
          <button className="btn btn-primary" onClick={func1}>
            Add to Cart
          </button>
        </div>
      </div>
    </>
  );
}
