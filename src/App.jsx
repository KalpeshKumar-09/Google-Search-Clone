import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import RouteS from "./components/Routes";

function App() {
  return (
    <div>
      <div className="bg-gray-100 min-h-screen">
        <Navbar />
        <RouteS />
        <Footer />
      </div>
    </div>
  );
}

export default App;
