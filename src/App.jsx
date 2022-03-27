import { memo } from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Modal from "./components/Modal";
import User from "./contexts/User";
import About from "./pages/About";
import Home from "./pages/Home";

const App = () => {
  return (
    <>
      <User>
        <Modal>
          <Header />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>

          <Footer />
        </Modal>
      </User>
    </>
  );
};

export default memo(App);
