import "./App.css";
import Header from "./components/Header";
import Landing from "./components/Landing";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Header/>
      <Landing/>
      <div className='px-52'>
        <Navbar/>
      </div>
    </div>
  );
}

export default App;
