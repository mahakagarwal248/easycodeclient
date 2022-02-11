import "./App.css";
import "./App.css";
import Footer from "./components/Footer";
import Homepage from "./components/Homepage";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Demofirst } from "./catalogue/sites/Demofirst";
import { Demosecond } from "./catalogue/sites/Demosecond";
import { Demothird } from "./catalogue/sites/Demothird";
import { Demofourth } from "./catalogue/sites/Demofourth";
import ContactForm from "./components/ContactForm/ContactForm";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <div className="App">
                <Navbar />
                <Homepage />
                <Footer />
              </div>
            }
          ></Route>
          <Route path="/contactus" element={<ContactForm />} />
          <Route exact path="/demo">
            <Route path="/demo/site1" element={<Demofirst />} />
            <Route path="/demo/site2" element={<Demosecond />} />
            <Route path="/demo/site3" element={<Demothird />} />
            <Route path="/demo/site4" element={<Demofourth />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
