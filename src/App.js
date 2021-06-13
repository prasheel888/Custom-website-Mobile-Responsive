import "./App.css";
import Details from "./component/Details";
import Hero from "./component/Hero";
import Navbar from "./component/Navbar";
import NewsLetter from "./component/NewsLetter";
import PresentedBy from "./component/PresentedBy";
import Reccomand from "./component/Reccomand";
import Features from "./component/Features";
import Footer from "./component/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Details />
      <PresentedBy />
      <Reccomand />
      <NewsLetter />
      <Features />
      <Footer />
    </div>
  );
}

export default App;
