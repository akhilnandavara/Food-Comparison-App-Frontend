import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    carts: [], // Array to store carts for different restaurants
  },
  reducers: {
    addToCart: (state, action) => {
      const { restaurantId, name, item } = action.payload;

      // Find the cart for the given restaurant ID
      const cartIndex = state.carts.findIndex((cart) => cart.restaurantId === restaurantId);

      if (cartIndex !== -1) {
        // If the cart for the restaurant already exists
        const existingCart = state.carts[cartIndex];
        const existingItemIndex = existingCart.items.findIndex((cartItem) => cartItem._id === item._id);

        if (existingItemIndex !== -1) {
          // If the item already exists in the cart, update its quantity and total price
          existingCart.items[existingItemIndex].quantity += 1;
          existingCart.totalPrice += parseFloat(item.price);
        } else {
          // If the item does not exist in the cart, add it
          existingCart.items.push({ ...item, quantity: 1 });
          existingCart.totalPrice += parseFloat(item.price);
        }

        // Update the cart in the state
        state.carts[cartIndex] = existingCart;
      } else {
        // If the cart for the restaurant does not exist, create a new one
        const newCart = {
          restaurantId: restaurantId,
          name: name,
          items: [{ ...item, quantity: 1 }],
          totalPrice: parseFloat(item.price),
        };

        // Add the new cart to the state
        state.carts.push(newCart);
      }
    },
    removeFromCart: (state, action) => {
      const { restaurantId, itemId } = action.payload;
     
      // Find the cart for the given restaurant ID
      const cartIndex = state.carts.findIndex((cart) => cart.restaurantId === restaurantId);
    
      if (cartIndex !== -1) {
        // If the cart for the restaurant exists
        const existingCart = state.carts[cartIndex];
        const itemIndex = existingCart.items.findIndex((item) => item._id === itemId);
    
        if (itemIndex !== -1) {
          // If the item to remove is found in the cart, remove it
          const removedItem = existingCart.items.splice(itemIndex, 1)[0];
          existingCart.totalPrice -= parseFloat(removedItem.price) * removedItem.quantity;
        }
    
        // If no items left in the cart, remove the entire cart
        if (existingCart.items.length === 0) {
          state.carts.splice(cartIndex, 1);
        } else {
          // Update the cart in the state
          state.carts[cartIndex] = existingCart;
        }
      }
    }
    
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
