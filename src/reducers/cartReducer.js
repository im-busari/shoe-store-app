// state = cart
export default function cartReducer(cart, action) {
    switch (action.type) {
        case "empty":
            return [];
        case "updateQuantity": {
            const { sku, quantity } = action;
            return quantity === 0 
                ? cart.filter((i) => i.sku !== sku)
                : cart.map((i) => i.sku === sku ? { ...i, quantity} : i);
        }
        case "add":
            const { id, sku } = action;

            const itemInCart = cart.find((item) => item.sku === sku);
            if (itemInCart) {
                // return new array with the matching item in place
                return cart.map((i) => i.sku === sku ? {...i, quantity: i.quantity + 1} : i);
            } else {
                // Return new array with the new item appended
                return [...cart, { id, sku, quantity: 1  }]
            }
        default:
            throw new Error("Unhandled action " + action.type);
    }
}