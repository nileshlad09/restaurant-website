import { useCart } from "react-use-cart";

const Menu = ({food}) => {
    const {totalUniqueItems, updateItemQuantity, items } = useCart();
  return (
    <div>
      <div className="row">
        <div className="col-lg-8 col-md-9 col-sm-9">
          <div className="foodcontainer">
            {food.map((food, index) => {
              return <Fooditem food={food} key={index}></Fooditem>;
            })}
          </div>
        </div>
        <div className="col-lg-4 col-md-3 col-sm-3 ordernow">
          <h1>Total Item ({totalUniqueItems})</h1>

          {items.map((food, index) => {
            return (
              <div className="orderItem" key={index}>
                <img src={food.strMealThumb} alt="" />
                <div className="name">
                  <div>{food.strMeal}</div>
                  <div className="quantity">
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
                <span>Rs {food.quantity * food.price}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Menu;
