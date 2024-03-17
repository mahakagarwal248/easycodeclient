import "./App.css";
import { useState, useEffect } from "react";
import Footer from "./components/Footer/Footer";
import Homepage from "./Pages/Homepage";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ContactForm from "./Pages/ContactForm/ContactForm";
import WorkingState from "./contexts/workngalert/workingstate";
import Spinner from "./components/Spinner/Spinner";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DesignStudio from "./Pages/DesignStudio/DesignStudio";
import ArchitectureWebsite from "./catalogue/ArchitectureWebsite.js/ArchitectureWebsite";
import LoginForms from "./catalogue/LoginForms/LoginForms";

function App() {
  const [loading, setloading] = useState(false);
  useEffect(() => {
    setloading(true);
    setTimeout(() => {
      setloading(false);
    }, 3000);
  }, []);

  return (
    <>
      <WorkingState>
        <BrowserRouter>
          <Routes>
            <Route
              exact
              path="/"
              element={
                <>
                  {loading ? (
                    <>
                      <Spinner loading={loading} msg="Welcome to " />
                    </>
                  ) : (
                    <div className="App">
                      <Navbar />
                      <Homepage />
                      <Footer />
                    </div>
                  )}
                </>
              }
            ></Route>
            <Route exact path="/contactus" element={<ContactForm />} />
            <Route
              path="/demo/architecture-website"
              element={<ArchitectureWebsite />}
            />
            <Route path="/demo/login-forms" element={<LoginForms />} />
            <Route path="/design-studio" element={<DesignStudio />} />
          </Routes>
          <ToastContainer theme="colored" />
        </BrowserRouter>
      </WorkingState>
    </>
  );
}

export default App;
