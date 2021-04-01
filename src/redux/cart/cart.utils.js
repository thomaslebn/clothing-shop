export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToAdd.id
  );

  if (existingCartItem) {
    existingCartItem.quantity++;
    return [...cartItems];
  }

  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};
