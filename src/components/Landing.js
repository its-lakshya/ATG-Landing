import LandingImage from "../assets/LandingImage.svg";
import { FaArrowLeft } from "react-icons/fa6";
import { useState } from "react";
import SignIn from "./SignIn";


const Landing = () => {
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
        <div style={{backgroundImage: `url(${LandingImage})`}} className='w-full h-[27rem] flex items-end bg-no-repeat bg-cover max-md:bg-center' >
            <div className='flex flex-col items-center justify-between text-white font-medium text-4xl max-md:text-2xl tracking-wide px-36 max-xl:px-10 max-md:px-6 bg-black bg-opacity-50 w-full h-full pb-20 max-md:pb-10'>
                <div className='mt-8 text-base flex items-center justify-between w-full'>
                    <button className='md:hidden'><FaArrowLeft/></button>
                    <button className='border border-white px-2 py-2 rounded-md md:hidden' onClick={() => {handleSignIn()}}>
                        Join Group
                    </button>
                </div>
                <div className='flex flex-col gap-y-2 max-md:gap-y-0 w-[66rem] max-xl:w-[60rem] max-lg:w-full'>
                    Computer Engineering
                    <span className='text-base font-normal tracking-normal'>142,765 Computer Engineers follow this</span>
                </div>
            </div>
            {isSignInOpen ? <SignIn handleCloseSignIn={handleSignIn}/> : null}
        </div>
    )
}

export default Landing;