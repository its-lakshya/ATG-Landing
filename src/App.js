import "./App.css";
import Feeds from "./components/Feeds";
import Header from "./components/Header";
import Landing from "./components/Landing";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div>
      <Header/>
      <Landing/>
      <div className='px-52'>
        <Navbar/>
      </div>
      <div className="px-52 flex gap-x-12 mt-8">
        <Feeds/>
        <Sidebar/>
      </div>
    </div>
  );
}

export default App;
