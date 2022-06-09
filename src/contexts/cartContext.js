import React, { createContext, useReducer, useContext } from "react";
import cartReducer from "../reducers/cartReducer";

export const CartContext = createContext(null);

// Our CartProvider will share the cart data and cartReducer's dispatch.
export function CartProvider({ children }) {
    const [cart, dispatch] = useReducer(cartReducer, []);

    return <CartContext.Provider value={{ cart, dispatch}}>
        { children }
    </CartContext.Provider>
}

export function useCart() {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error(
            "useCart must be used within a CartProvider. Wrap a parent component in <CartProvider> to fix the error"
        )
    }
    return context;
}