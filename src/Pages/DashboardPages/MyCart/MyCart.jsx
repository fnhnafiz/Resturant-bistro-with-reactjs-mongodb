import { Link } from "react-router-dom";
import useCart from "../../../Hooks/useCart";
import MyCartTable from "../MyCartTable/MyCartTable";

const MyCart = () => {
  const [cart] = useCart();
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);
  return (
    <div>
      <div className="flex items-center justify-between px-4 border-b-2  py-4">
        <div>
          <p>Totoal Orders: {cart.length}</p>
        </div>
        <div>
          <p>Total Price: {totalPrice}$ </p>
        </div>
        <div>
          {cart.length > 0 ? (
            <Link to={`/dashboard/payment`}>
              <button className="btn btn-ghost">Pay</button>
            </Link>
          ) : (
            <button disabled className="btn btn-ghost">
              Pay
            </button>
          )}
        </div>
      </div>
      {/* Table data*/}
      <div>
        {cart?.map((item, index) => (
          <MyCartTable key={item._id} index={index} item={item}></MyCartTable>
        ))}
      </div>
    </div>
  );
};

export default MyCart;
