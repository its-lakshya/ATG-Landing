import "./App.css";
import Feeds from "./components/Feeds";
import Header from "./components/Header";
import Landing from "./components/Landing";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import CreateIcon from "./assets/CreateIcon.svg";
import { useState } from "react";
import SignIn from "./components/SignIn";

function App() {
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
    <div className='flex flex-col items-center justify-center'>
      <button className="md:hidden fixed w-auto right-6 bottom-6" onClick={() => {handleSignIn()}}>
        <img src={CreateIcon} alt="Create icon" />
      </button>
      <Header/>
      <Landing/>
      <div className='w-[66rem] mx-10 max-xl:w-[60rem] max-lg:w-full max-lg:px-12 max-md:px-6'>
        <Navbar/>
      </div>
      <div className="w-[66rem] flex gap-x-12 mt-8 max-xl:gap-x-6 flex-shrink max-xl:w-[60rem] max-lg:w-full max-lg:px-12 max-md:px-0">
        <Feeds/>
        <Sidebar/>
      </div>
      {isSignInOpen ? <SignIn handleCloseSignIn={handleSignIn}/> : null} 
    </div>
  );
}

export default App;
