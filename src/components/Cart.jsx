import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { clearCart } from "../utils/cartSlice";
import ItemList from "./ItemList";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
    toast.error("All items removed")
  };

  return (
    <div className="text-center sm:m-4 sm:p-4 m-2 p-2 min-h-screen">
      <h1 className="text-2xl font-bold">Cart</h1>
      <div className="sm:w-6/12 sm:m-auto">
        <button
          className=" border shadow-lg p-2 sm:m-2 my-10 rounded-lg text-red-500"
          onClick={handleClearCart}
        >
          Clear Cart
        </button>
        {cartItems.length === 0 && (
          <h1 className="text-bold sm:text-8xl text-4xl text text-pretty text-slate-400">
            Cart is empty. Add Items to the cart!
          </h1>
        )}
        <ItemList items={cartItems} />
      </div>
    </div>
  );
};

export default Cart;
