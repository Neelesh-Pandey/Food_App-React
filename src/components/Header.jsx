import { LOGO_URL } from "../utils/constant";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { AiOutlineMenu } from "react-icons/ai";
import { BsCartCheck } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import { useAutoAnimate } from "@formkit/auto-animate/react";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");

  const cartItems = useSelector((store) => store.cart.items);
  const [animationParent] = useAutoAnimate();
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className=" sticky top-0 bg-white  z-50  flex justify-between bg-white-100 shadow-lg item-center ">
      <div className="logo-container flex justify-between ">
        <img className="w-20" src={LOGO_URL} />
      </div>
      {showMenu && (
        <div className="z-10 fixed inset-x-0 top-24 mx-8 flex flex-col item-center rounded-xl bg-slate-200 shadow-2xl text-black md:hidden">
          <div className=" my-8 flex flex-col items-center gap-6">
            <ul className="flex flex-col items-center">
              <li className="px-4">
                <Link onClick={toggleMenu} className="hover:opacity-70" to="/">
                  Home
                </Link>
              </li>
              <li className="px-4">
                <Link
                  onClick={toggleMenu}
                  className="hover:opacity-70"
                  to="/about"
                >
                  About Us
                </Link>
              </li>
              <li className="px-4">
                <Link
                  onClick={toggleMenu}
                  className="hover:opacity-70"
                  to="/contact"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <hr className="mx-auto w-[80%] border-gray-600" />
          <div className="my-8 flex flex-col items-center gap-6">
            <button
              onClick={() => {
                btnNameReact === "Login"
                  ? setBtnNameReact("Logout")
                  : setBtnNameReact("Login");
              }}
              className="login"
            >
              {btnNameReact}
            </button>
          </div>
        </div>
      )}
      <div className="flex items-center ">
        <div className="flex ">
          <button className="px-4 font-bold text-lg md:hidden">
            <Link className="flex items-center" to="/cart">
              <BsCartCheck className="m-2 text-2xl md:hidden hover:text-orange-500" />{" "}
              <div className="absolute md:hidden bg-green-600 text-white text-[14px] w-[25px] h-[25px] right-14 top-4   rounded-full ">
                {cartItems.length}
              </div>
            </Link>
          </button>

          <button
            ref={animationParent}
            onClick={toggleMenu}
            className=" text-gray-400 text-4xl md:hidden mx-2"
          >
            {showMenu ? <AiOutlineClose /> : <AiOutlineMenu />}
          </button>
        </div>
        <ul className="md:flex flex-col md:items-center text-center justify-center  hidden md:flex-row p-4 m-auto">
          <li className="px-4 hover:text-orange-500">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4 hover:text-orange-500">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4 hover:text-orange-500">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4 font-bold text-lg">
            <Link to="/cart">
              {" "}
              <BsCartCheck className="m-2 text-2xl relative hover:text-orange-500" />{" "}
              <div className="absolute bg-green-600 text-white text-[14px] w-[25px] h-[25px] right-[95px] top-4   rounded-full grid-place-items-center">
                {cartItems.length}
              </div>{" "}
            </Link>
          </li>
          <button
            onClick={() => {
              btnNameReact === "Login"
                ? setBtnNameReact("Logout")
                : setBtnNameReact("Login");
            }}
            className="bg-orange-500 shadow-md shadow-orange-500/50 text-white rounded-lg px-4 py-2"
          >
            {btnNameReact}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
