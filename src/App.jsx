import About from "./components/About";
import Banner from "./components/Banner";
import Comprehensive from "./components/Comprehensive";
import Navbar from "./components/Navbar";
import Service from "./components/Service";
function App() {
  return (
    <>
      <main className="bg-[#FBFBFB]">
        <div>
          <Navbar></Navbar>
          <Banner></Banner>
          <Comprehensive></Comprehensive>
          <About></About>
          <Service></Service>
        </div>
      </main>
    </>
  );
}

export default App;
