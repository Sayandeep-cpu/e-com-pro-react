import { useCart } from "../../context/cart-context";
import { findProductInCart } from "../../utils/findProductInCart";
import { useNavigate } from "react-router-dom";
import { useWishlist } from "../../context/wishlist-context";

export const ProductCard = ({ product }) => {
  const { cart, cartDispatch } = useCart();
  const { wishlist, addToWishlist, removeFromWishlist } = useWishlist();
  const navigate = useNavigate();

  const isProductInCart = findProductInCart(cart, product.id);
  const isProductInWishlist = wishlist.find((item) => item.id === product.id);

  const onCartClick = (product) => {
    if (!isProductInCart) {
      localStorage.setItem('cart', JSON.stringify([...cart, product]))
      cartDispatch({
       type: "ADD_TO_CART",
       payload: { product }
      })} else {
         navigate("/cart");
        }
    } 

   const onWishlistClick = () => {
    if (isProductInWishlist) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  return (
    <div className="card shadow rounded p-4 bg-white">
      <img
        src={product.images[0]}
        alt={product.title}
        className="w-full h-48 object-cover rounded mb-4"
      />
      <h3 className="text-lg font-bold mb-1">{product.title}</h3>
      <p className="text-gray-700 mb-2">Rs. {product.price}</p>
      <div className="flex gap-2">
         <button
          onClick={onWishlistClick}
          className="btn btn-outline"
        >
          {isProductInWishlist ? "Remove from Wishlist" : "Add to Wishlist"}
        </button>
        <button
          onClick={() => onCartClick(product)}
           style={{ backgroundColor: "transparent", color: "black", border: "none" }}
          className="px-4 py-2 rounded hover:underline ">
          {isProductInCart ? "Go to Cart" : "Add to Cart"}
        </button>
      </div>
    </div>
  );
};
