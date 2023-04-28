import React from "react";
import { useDispatch, useSelector } from "react-redux";
import FoodItem from "../components/foodItem";
import store from "../utils/store";
import cartSlice, { clearCart } from "../utils/cartSlice";


const Cart = () => {
  const Cartitem = useSelector((store) => store.cart.items);
 
  const dispatch = useDispatch()
     
  const handleClearCart = (Cartitem)=>{
  dispatch(clearCart(Cartitem))
  }
  console.log(Cartitem);
  return (
    <div>
      <h1>Cart item: {Cartitem.length}</h1>
      <button onClick={()=>handleClearCart()}>Clear Cart</button>
      <div className="cart-items">
        {Cartitem.map((item) => (
          <FoodItem item={item} />
        ))}
      </div>
      <h3>total amount:{}</h3>
    </div>
  );
};

export default Cart;
