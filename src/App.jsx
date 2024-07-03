import Banner from "./components/Banner";
import Comprehensive from "./components/Comprehensive";
import Navbar from "./components/Navbar";
function App() {
  return (
    <>
      <main className="bg-[#FBFBFB]">
        <div>
          <Navbar></Navbar>
          <Banner></Banner>
          <Comprehensive></Comprehensive>
        </div>
      </main>
    </>
  );
}

export default App;
