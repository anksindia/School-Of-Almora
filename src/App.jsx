import "./App.css";

import Footer from "./Components/Footer";
import Header from "./Components/Header";

import About from "./Pages/About";
import Home from "./Pages/Home";
import Admissions from "./Pages/Admissions";
import StudentLife from "./Pages/StudentLife";

function App() {
  return (
    <>
      <Header />

      {/* <Home/> */}
      {/* <About/> */}
      {/* <Admissions/> */}
      <StudentLife/>
      

      <Footer />
    </>
  );
}

export default App;
