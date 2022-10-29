import styles from '../styles/Payment.module.css'
import { useCart } from "react-use-cart";

function Payment() {
    const {cartTotal, items } = useCart();
    console.log(items);
    return (
        <div className={styles.PaymentSection}>
            <div className={styles.container}>
                <form >
                    <div className={styles.inputBox}>
                        <span>Name</span>
                        <input type="text" maxlength="16" class="card-number-input" />
                    </div>
                    <div className={styles.inputBox}>
                        <span>Phone Number</span>
                        <input type="text" className="card-holder-input"/>
                    </div>
                    <div className={styles.inputBox}>
                        <span>Address</span>
                        <input type="text" maxlength="16" class="card-number-input" />
                    </div>
                    <div className={styles.inputBox}>
                        <span>Amount</span>
                        <input type="text" value={`Rs.${cartTotal}`} disabled maxlength="16" class="card-number-input" />
                    </div>
                    <div className={styles.inputBox}>
                        <span>ordered food</span>
                        {items.map(food =>{
                           return (  <h2>{`${food.strMeal} x ${food.quantity}`}</h2>  )
                        })}
                    </div>
                    <input type="submit" disabled value="Order" className={styles.submit_btn} />
                </form>

            </div>
        </div>
    )
}

export default Payment