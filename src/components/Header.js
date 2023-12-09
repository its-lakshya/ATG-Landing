import logo from "../assets/logo.svg"
import { IoSearch } from "react-icons/io5";
import { IoMdArrowDropdown } from "react-icons/io";



const Header = () => {
    return (
        <div className= "h-20 flex items-center justify-between px-24 w-full max-xl:px-12 max-md:hidden">
            <img src={logo} alt="logo" className=""/>
            <div className = "w-96 max-xl:w-72  h-11 px-4 flex items-center justify-start gap-x-4 rounded-full bg-gray-200 text-gray-600 ">
                <IoSearch/>
                <input type="text" placeholder="search for your favourite group" className='text-black w-64 outline-none bg-gray-200 text-sm'/>
            </div>
            <div className='font-semibold flex gap-x-1'>Create account.
                <span className='text-blue-600 flex items-center gap-x-1'> It's free <IoMdArrowDropdown className="text-gray-600"/></span>
            </div>
        </div>
    )
}

export default Header;