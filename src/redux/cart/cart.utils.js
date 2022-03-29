// export const addItemToCart = (cartItems, cartItemToAdd) => {
//   const existingCartItem = cartItems.find(
//     (cartItem) => cartItem.id === cartItemToAdd.id
//   );

// if (existingCartItem) {
//   return cartItems.map((cartItem) =>
//     cartItem.id === cartItemToAdd.id
//       ? { ...cartItem, quantity: cartItem.quantity + 1 }
//       : cartItem
//   );
// }

//   return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
// };

export const removeFromCart = (cartItems, itemToRemove) => {
  return cartItems.filter((item) => item.id !== itemToRemove.id);
};

export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find(
    (item) => item.id === cartItemToAdd.id
  );
  if (existingCartItem) {
    return cartItems.map((item) =>
      item.id === cartItemToAdd.id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
  }
  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};


