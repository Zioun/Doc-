import About from "./components/About";
import Appointment from "./components/Appointment";
import Banner from "./components/Banner";
import Comprehensive from "./components/Comprehensive";
import Faq from "./components/Faq";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Service from "./components/Service";
import Testimonial from "./components/Testimonial";
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
          <Testimonial></Testimonial>
          <Faq></Faq>
          <Appointment></Appointment>
          <Footer></Footer>
        </div>
      </main>
    </>
  );
}

export default App;
