import React, { createContext } from "react";

export const CartContext = createContext(null);

// Our CartProvider will share the cart data and cartReducer's dispatch.

export { CartContext };
