import { IoMdArrowDropdown } from "react-icons/io";
import JoinImage from "../assets/Join.svg"


const Navbar = () => {
    return (
        <div className="w-full h-16 flex justify-between items-center mt-6 border-b-2">
            <div className='flex text-sm text-gray-400 w-4/6 gap-x-4 h-full items-center'>
                <span className='text-black border-b-2 border-black h-full flex items-center'>All Posts(32)</span>
                <span>Artical</span>
                <span>Event</span>
                <span>Education</span>
                <span>Job</span>
            </div>
            <div className='flex gap-x-4 justify-center items-center'>
                <button className="bg-gray-200 h-10 w-36 rounded-md flex items-center justify-evenly">Write a Post <IoMdArrowDropdown/></button>
                <button className=" h-10 w-36 rounded-md text-white flex items-center justify-evenly bg-blue-500"><img src={JoinImage} alt="join img"/>Join Group</button>
            </div>
        </div>
    )
}

export default Navbar;