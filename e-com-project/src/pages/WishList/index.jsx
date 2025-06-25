import { useWishlist } from "../../context/wishlist-context";
import { HorizontalProductcard } from "../../components/HorizontalProductCard";
import { Navbar } from "../../components/Navbar";
import { useNavigate } from "react-router-dom";

export const Wishlist = () => {
  const { wishlist } = useWishlist();
  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center pt-28 px-4 bg-gray-50 min-h-screen">
        {wishlist?.length > 0 ? (
          <>
            <h2 className="text-5xl font-semibold mb-6">My Wishlist</h2>
            <div className="flex flex-col gap-4 w-full max-w-6xl">
              {wishlist.map((product) => (
                <HorizontalProductcard key={product.id} product={product} />
              ))}
            </div>
          </>
        ) : (
          <div className="text-center">
            <h2 className="text-5xl font-bold mb-4">Wishlist is Empty</h2>
            <p
              className="underline text-blue-600 cursor-pointer"
              onClick={() => navigate("/")}
            >
              CLICK TO ADD ITEMS
            </p>
          </div>
        )}
      </main>
    </>
  );
};
