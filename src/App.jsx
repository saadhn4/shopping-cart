import { useState } from "react";
import { Cart } from "./components/Cart";
import { ProductDisplay } from "./components/ProductDisplay";

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  function addToCart(product) {
    setCartItems([...cartItems, product]);
  }

  function removeFromCart(product) {
    // buggy method where u cant remove 2 or more of the same product
    // const newCart = cartItems.filter((cartItem) => cartItem.id != product.id);
    // setCartItems(newCart);
    const index = cartItems.findIndex((cartItem) => cartItem.id === product.id);
    if (index === -1) return;
    const newCart = [...cartItems];
    newCart.splice(index, 1);
    setCartItems(newCart)
  }

  return (
    <div className="h-screen flex flex-col justify-center items-center px-2">
      <h1 className="text-xl font-bold mb-3">🛒 Shopping Cart</h1>
      <ProductDisplay addToCart={addToCart} />
      <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
    </div>
  );
};

export default App;
