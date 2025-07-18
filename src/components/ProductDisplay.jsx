import products from "../items";

export const ProductDisplay = ({ addToCart }) => {
  return (
    <div>
      <h1 className="font-bold text-lg mb-3">Products</h1>
      <div className="flex gap-x-4 mb-4">
        {products.map((product) => {
          return (
            <div
              key={product.id}
              className="w-full flex flex-col justify-between md:w-[150px] h-[150px] shadow-lg p-3 rounded-lg border-black border"
            >
              <div>
                <p className="h-[25px]">{product.name}</p>
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
