
export const Cart = ({ cartItems, removeFromCart }) => {
  let totalPrice = 0;
  cartItems.forEach((cartItem) => (totalPrice += cartItem.price));
  return (
    <div>
      <h1 className="font-bold text-lg mb-3">Cart</h1>
      {/* Cart container */}
      <div className="border w-full md:w-[600px] rounded">
        <div>
          {cartItems.length > 0 ? (
            cartItems.map((cartItem) => (
              <div
                key={cartItem.id}
                className="p-3 w-full mb-2 bg-white flex justify-between"
              >
                <div>
                  <p>{cartItem.name}</p>
                  <p>Rs: {cartItem.price}</p>
                </div>
                <button
                  onClick={() => removeFromCart(cartItem)}
                  className="cursor-pointer bg-red-500 text-white px-2 py-3 rounded-lg font-bold"
                >
                  Remove
                </button>
              </div>
            ))
          ) : (
            <h1 className="p-3 text-gray-500">No items in cart</h1>
          )}
        </div>
        {cartItems.length > 0 && (
          <p className="flex justify-end pr-2 pb-1">Total: ₹{totalPrice}</p>
        )}
      </div>
    </div>
  );
};
