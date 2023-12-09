import { IoMdArrowDropdown } from "react-icons/io";
import JoinImage from "../assets/Join.svg"
import { useState } from "react";
import SignIn from "./SignIn";


const Navbar = () => {
    const [isSignInOpen, setIsSignInOpen] = useState(false);

    const handleSignIn = () => {
        if(isSignInOpen){
            setIsSignInOpen(false);
        }
        else{
            setIsSignInOpen(true);
        }
    }

    return (
        <div className="w-full h-16 flex justify-between items-center mt-6 border-b max-md:border-none">
            <div className='flex text-sm text-gray-400 w-4/6 max-md:w-5/6 gap-x-4 h-full items-center'>
                <span className='text-black border-b-2 border-black h-full flex items-center max-md:border-none max-md:font-bold max-md:text-base'>All Posts(32)</span>
                <span className="max-sm:hidden">Artical</span>
                <span className="max-sm:hidden">Event</span>
                <span className="max-sm:hidden">Education</span>
                <span className="max-sm:hidden">Job</span>
            </div>
            <div className='flex gap-x-4 justify-center items-center '>
                <button className="bg-gray-200 hover:bg-[#CED4DA] h-10 w-36 rounded-md flex items-center justify-evenly"><span className='max-md:hidden'>Write a Post</span> <span className='md:hidden'>Filter: All</span><IoMdArrowDropdown/></button>
                <button className=" h-10 w-36 rounded-md text-white flex items-center justify-evenly bg-[#2F6CE5] max-md:hidden hover:bg-[#339AF0]" onClick={() => {handleSignIn()}}>
                    <img src={JoinImage} alt="join img"/>
                        Join Group
                    </button>
            </div>
            {isSignInOpen ? <SignIn handleCloseSignIn={handleSignIn}/> : null}
        </div>
    )
}

export default Navbar;