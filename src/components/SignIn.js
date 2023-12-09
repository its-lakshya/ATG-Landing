import { createPortal } from "react-dom"
import { RxCross2 } from "react-icons/rx";
import FacebookLogo from "../assets/FacebookLogo.svg"
import GoogleLogo from "../assets/GoogleLogo.svg"
import SignInImage from "../assets/SignInImage.svg"
import LogIn from "./LogIn";
import { useState } from "react";


const SignIn = ({handleCloseSignIn}) => {
    const [isLogin , setIsLogin] = useState(false);
        return createPortal(
            <div className="z-10 w-full h-full fixed flex top-0 bottom-0 bg-black bg-opacity-60 items-center justify-center max-md:items-end">
                <div className='w-[50rem] h-[34rem] flex flex-col items-end gap-y-3'>
                    <button className='bg-white rounded-full p-1 max-md:hidden' onClick={handleCloseSignIn}><RxCross2/></button>
                    <div className="w-full h-[33rem] bg-white rounded-lg max-md:h-full max-md:flex max-md:items-center max-md:justify-center">
                        <div className='h-12 w-full bg-[#EFFFF4] rounded-t-lg text-[#008A45] flex items-center justify-center text-sm
                         font-semibold max-md:hidden'>Let's learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘🏼</div>
                        {!isLogin ? 
                        <div className='py-4 px-6 flex items-center justify-between max-md:justify-center gap-x-4'>
                            <div className='w-1/2 h-[26rem] max-md:h-full flex flex-col gap-y-4 max-md:w-[24rem] max-xxs:w-full'>
                                <div className='font-semibold text-xl flex justify-start max-md:justify-between items-center'>
                                    Create Account
                                    <button className='text-white font-bold bg-black rounded-full text-base p-[1.5px] flex items-center justify-center md:hidden' onClick={handleCloseSignIn}><RxCross2/></button>
                                </div>
                                <div className='w-full flex flex-col gap-y-4 border'>
                                    <ul className='flex flex-col [&>*]:h-12'>
                                        <ul className='border-b bg-[#F7F8FA] w-full flex'>
                                            <li className='border-r w-1/2 px-2 flex items-center'><input className='w-full outline-none bg-[#F7F8FA]' placeholder="First Name"/></li>
                                            <li className="px-2 w-1/2 flex items-center"><input className='w-full outline-none bg-[#F7F8FA]' placeholder="Last Name"/></li>
                                        </ul>
                                        <li className='border-b bg-[#F7F8FA] w-full px-2 flex items-center'><input className=' bg-[#F7F8FA] w-full outline-none' placeholder="Email"/></li>
                                        <li className='border-b bg-[#F7F8FA] w-full px-2 flex items-center'><input className=' bg-[#F7F8FA] w-full outline-none' type="password" placeholder="Password"/></li>
                                        <li className=' bg-[#F7F8FA] w-full px-2 flex items-center'><input className=' bg-[#F7F8FA] w-full outline-none' type="password" placeholder="Confirm Password"/></li>
                                    </ul>
                                </div>
                                <div className='flex items-center justify-between'>
                                    <button className="w-full bg-[#2F6CE5] h-10 rounded-3xl text-white max-md:w-1/2">Create Account</button>
                                    <button className='underline md:hidden text-sm hover:text-[#2F6CE5]' onClick={() => {setIsLogin(true)}}>or, Sign In</button>    
                                </div>
                                <div className="flex flex-col gap-y-2">
                                    <button className="w-full border h-10 rounded-sm gap-x-2 font-light text-sm flex justify-center items-center"><img src={FacebookLogo} alt="facebook logo"/> Sign up with Facebook</button>
                                    <button className="w-full border h-10 rounded-sm gap-x-2 font-light text-sm flex justify-center items-center"><img src={GoogleLogo} alt="google logo"/> Sign up with Google</button>
                                </div>
                                <div className='text-xs flex justify-center items-center font-light md:hidden'>
                                    <span className='w-2/3 text-center'>By signing up, you agree to our Terms & conditions, Privacy policy</span>
                                </div>
                            </div>
                            <div className='w-1/2 h-[26rem] flex flex-col gap-y-0 max-md:hidden'>
                                <div className='flex justify-end font-normal text-sm'>Already have an account? &nbsp; 
                                    <button className="text-[#2F6CE5]" onClick={() => {setIsLogin(true)}}> 
                                    Sign In
                                    </button>
                                </div>
                                <img src={SignInImage} alt="signIn img" className='w-[22rem]'/>
                                <div className='text-xs flex justify-center items-center font-light'>By signing up, you agree to our Terms & conditions, Privacy policy</div>
                            </div>
                        </div>
                        :
                        <LogIn setIsLogin={setIsLogin} handleClose={handleCloseSignIn}/>
                        }
                    </div>   
                </div>
            </div>,
            document.getElementById("signin")
        );
}

export default SignIn