import { useState } from "react";
import { Cart } from "./components/Cart";
import { ProductDisplay } from "./components/ProductDisplay";

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  function addToCart(product) {
    setCartItems([...cartItems, product]);
  }

  function removeFromCart(product) {
    const newCart = cartItems.filter((cartItem) => cartItem.id != product.id);
    setCartItems(newCart);
  }

  return (
    <div className="h-screen flex flex-col justify-center items-center px-2">
      <h1 className="text-xl font-bold mb-3">🛒 Shopping Cart</h1>
      <ProductDisplay addToCart={addToCart} />
      <Cart cartItems={cartItems} removeFromCart={removeFromCart}/>
    </div>
  );
};

export default App;
