import { useState } from "react";
import { createPortal } from "react-dom";
import SignIn from "./SignIn";

const Dropdown = ({ handleClose }) => {
  const [isSignInOpen, setIsSignInOpen] = useState(false);

  const handleSignIn = () => {
    if (isSignInOpen) {
      setIsSignInOpen(false);
    } else {
      setIsSignInOpen(true);
    }
  };

  return createPortal(
    <div className=" z-1 w-48 h-24  bg-white flex top-16 right-24 max-xl:right-12 max-md:hidden fixed items-center justify-center rounded-md border drop-shadow-2xl">
      <ul className="w-full flex justify-center flex-col items-center">
        <li
          className="hover:bg-gray-200 w-full px-2 cursor-pointer"
          onClick={() => {
            handleSignIn();
          }}
        >
          Sign In
        </li>
        <li
          className="hover:bg-gray-200 w-full px-2 cursor-pointer"
          onClick={handleClose}
        >
          Other options
        </li>
        <li
          className="hover:bg-gray-200 w-full px-2 cursor-pointer"
          onClick={handleClose}
        >
          Other options
        </li>
      </ul>
      {isSignInOpen ? <SignIn handleCloseSignIn={handleSignIn} /> : null}
    </div>,
    document.getElementById("dropdown")
  );
};

export default Dropdown;
