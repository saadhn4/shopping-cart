import products from "../items";

export const ProductDisplay = ({ addToCart }) => {
  return (
    <div className="mb-3">
      <h1 className="font-bold text-lg mb-3">Products</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {products.map((product) => {
          return (
            <div
              key={product.id}
              className="w-full flex flex-col justify-between md:w-[150px] h-[150px] shadow-lg p-3 rounded-lg border-black border"
            >
              <div>
                <p className="h-[25px] sm:text-[13px] text-sm sm:text-xs md:text-base">{product.name}</p>
                <p>Rs: {product.price}</p>
              </div>
              <div>
                <button
                  onClick={() => addToCart(product)}
                  className="bg-yellow-400 text-white px-3 py-2 rounded-lg cursor-pointer font-bold"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
