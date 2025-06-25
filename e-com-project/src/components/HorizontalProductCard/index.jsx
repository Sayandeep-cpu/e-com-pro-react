import { useCart } from "../../context/cart-context";

export const HorizontalProductcard = ({ product }) => {

  const { cartDispatch } = useCart();

  const onRemoveClick = (product) => {
    cartDispatch({
        type: "REMOVE_FROM_CART",
        payload: {id: product.id}
    })
  }

  return (
    <div className="card-horizontal flex gap-4 shadow p-4 rounded bg-white">
      <img
        src={product.images[0]}
        alt={product.title}
        className="w-28 h-28 object-cover rounded"
      />

      <div className="flex flex-col justify-between flex-grow">
        <div>
          <h3 className="font-semibold text-lg mb-1">{product.title}</h3>
          <p className="text-gray-700 mb-2">Rs. {product.price}</p>

          <div className="flex items-center gap-2 mb-2">
            <span>Quantity:</span>
            <button className="border px-2 rounded">-</button>
            <span>1</span>
            <button className="border px-2 rounded">+</button>
          </div>
        </div>

        <div className="flex gap-3 mt-2">
          <button
            className="btn btn-outline"
            onClick={() => onRemoveClick(product) }
          >
            Remove from Cart
          </button>
          <button className="btn btn-outline">Move to Wishlist</button>
        </div>
      </div>
    </div>
  );
};
