import { useCart } from "../../context/cart-context";
import { HorizontalProductcard } from "../../components/HorizontalProductCard";
import { PriceDetails } from "../../components/PriceDetails";
import { Navbar } from "../../components/Navbar";
import { useNavigate } from "react-router-dom";

export const Cart = () => {
  const { cart } = useCart();

  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center pt-28 px-4 bg-gray-50 min-h-screen">
        {
          cart?.length > 0 ? (
            <>
              <h2 className="text-5xl font-semibold mb-6">My Cart</h2>
              <div className="flex flex-col md:flex-row gap-6 w-full max-w-6xl">
                <div className="flex flex-col gap-4 w-full md:w-2/3">
                  {cart.length > 0 &&
                    cart.map(product => <HorizontalProductcard key={product.id} product={product} />)
                  }
                </div>
                <div className="w-full md:w-1/3">
                  <PriceDetails />
                </div>
              </div>
            </>
          ) : (
            <div className="text-center">
              <h2 className="text-5xl font-bold mb-4">Cart Empty</h2>
              <p className="underline text-blue-600 hover: cursor-pointer" 
              onClick={() => navigate('/')}>CLICK TO ADD ITEMS</p>
            </div>
          )
        }
      </main>
    </>
  );
};
