import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {  FaRupeeSign } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";
import { removeFromCart } from "../../../slices/cartSlice";

function CartPage() {
  // Access the entire cart state
  const [loading, setLoading] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleRemoveItem=(restaurantId,itemId)=>{
 console.log(restaurantId,itemId)
  dispatch(removeFromCart({restaurantId,itemId}));
}

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <h1>Cart</h1>
          {cart.carts.length === 0 
          ? <p>No items in the cart</p>
          : <div>
              {cart.carts.map((cartItem) => (
                <div key={cartItem.restaurantId}>
                  <h2>{cartItem.name}</h2>
                  <ul>
                    {cartItem.items.map((item) => (
                      <li key={item._id}>
                        {item.ItemName} - {item.quantity} - <FaRupeeSign/>{item.price}
                        <button onClick={()=>handleRemoveItem(cartItem.restaurantId,item._id)} className="text-danger  rounded bg-transparent"><RxCross1/></button>
                      </li>
                    ))}
                  </ul>
                  <p>Total Price: <FaRupeeSign/>{cartItem.totalPrice.toFixed(2)}</p>
                </div>
              ))}
            
            </div>}
        </div>
      )}
    </div>
  );
}

export default CartPage;
