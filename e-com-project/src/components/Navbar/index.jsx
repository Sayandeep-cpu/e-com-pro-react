import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLogin } from "../../context/login-context";

export const Navbar = () => {
  const navigate = useNavigate();
  const [isAccountDropDownOpen, setIsAccountDropDownOpen ] = useState(false);
  const { token, loginDispatch } = useLogin();

  const onLoginClick = () =>{
    if(token?.access_token) {
      navigate('/auth/login')
    }else{
      loginDispatch({
        type: 'LOGOUT'
      })
      navigate('/auth/login')
    }
  }

  return (
    <header className="w-full px-6 flex justify-between items-center bg-yellow-700 h-20 shadow">
      <div>
        <h1
          onClick={() => navigate("/")}
          className="text-4xl font-bold text- hover: cursor-pointer"
        >
          BUY AS FALCON
        </h1>
      </div>

      <nav className="flex items-center gap-6 text-gray-700">
        <span
          className="material-symbols-outlined text-2xl cursor-pointer hover:text-black"
          onClick={() => navigate("/cart")}
        >
          add_shopping_cart
        </span>
        <span
          className="material-symbols-outlined text-2xl cursor-pointer hover:text-black"
          onClick={() => navigate("/wishlist")}
        >
          favorite
        </span>
        <div className="relative">
        <span
          className="material-symbols-outlined text-5xl cursor-pointer hover:text-black"
          onClick={() => setIsAccountDropDownOpen(!isAccountDropDownOpen)}
        >
          account_circle
        </span>
        {
         isAccountDropDownOpen &&  <div className="absolute ">
          <button onClick={onLoginClick}>
          {
            token?.access_token ? 'Logout' : 'Login'
          } 
          </button>
        </div>
        }
        </div>
      </nav>
    </header>
  );
};
