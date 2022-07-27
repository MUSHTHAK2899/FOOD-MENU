import "./App.css";
import Catagory from "./components/Catagory";
import Food from "./components/Food";
import Footer from "./components/Footer";
import HandlelineCard from "./components/HandlelineCard";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <HandlelineCard />
      <Food />
      <Catagory />
      <Footer/>
    </>
  );
}

export default App;
