import FacebookLogo from "../assets/FacebookLogo.svg"
import GoogleLogo from "../assets/GoogleLogo.svg"
import SignInImage from "../assets/SignInImage.svg"


const LogIn = ({setIsLogin}) => {
    return (
        <div className='py-6 px-6 flex items-center justify-between gap-x-4'>
            <div className='w-1/2 h-[26rem] flex flex-col gap-y-6'>
                <div className='font-semibold text-xl'>Sign In</div>
                <div className='w-full flex flex-col gap-y-4 border'>
                    <ul className='flex flex-col [&>*]:h-12'>
                        <li className='border-b bg-[#F7F8FA] w-full px-2 flex items-center'><input className=' bg-[#F7F8FA] w-full outline-none' placeholder="Email"/></li>
                        <li className='border-b bg-[#F7F8FA] w-full px-2 flex items-center'><input className=' bg-[#F7F8FA] w-full outline-none' type="password" placeholder="Password"/></li>
                    </ul>
                </div>
                <button className="w-full bg-[#2F6CE5] h-10 rounded-3xl text-white">Sign In</button>
                <div className="flex flex-col gap-y-2">
                    <button className="w-full border h-10 rounded-sm gap-x-2 font-light text-sm flex justify-center items-center"><img src={FacebookLogo} alt="facebook logo"/> Sign in with Facebook</button>
                    <button className="w-full border h-10 rounded-sm gap-x-2 font-light text-sm flex justify-center items-center"><img src={GoogleLogo} alt="google logo"/> Sign in with Google</button>
                </div>
                <div className='flex justify-center items-center text-sm'>Forgot Password ?</div>
            </div>
            <div className='w-1/2 h-[26rem] flex flex-col gap-y-4'>
                <div className='flex justify-end font-normal text-sm'>Don’t have an account yet? &nbsp; 
                    <button className="text-[#2F6CE5]" onClick={()=>setIsLogin(false)}>
                    Create new for free!
                    </button>
                </div>
                <img src={SignInImage} alt="signIn img" className=''/>
            </div>
        </div>
    );
}

export default LogIn