import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <section className="w-full bg-gradient-to-r from-gradientStart to-gradientEnd">
        <div className="w-11/12  mx-auto">
          <div>
            <Navbar></Navbar>
          </div>
          <div className="min-h-screen">
            <Outlet></Outlet>
          </div>
          <div className="mt-10">
            <Footer></Footer>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
