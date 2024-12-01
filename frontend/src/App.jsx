import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Collection from "./pages/Collection";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import PlaceOrder from "./pages/PlaceOrder";
import Orders from "./pages/Orders";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { ToastContainer } from "react-toastify";
import PageNotFound from "./pages/PageNotFound";
import Profile from "./pages/Profile";
import ProtectLoginPage from "./pages/ProtectLoginPage";
import ProtectProfilePage from "./pages/ProtectProfilePage";
const App = () => {
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        draggable
        theme="light"
      />
      <div className=" px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] max-w-[2000px] flex flex-col mx-auto">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/collection" element={<Collection />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/product/:productId" element={<Product />} />
          <Route path="/cart" element={<Cart />} />

          <Route
            path="/login"
            element={
              <ProtectLoginPage>
                <Login />
              </ProtectLoginPage>
            }
          />

          <Route
            path="/place-order"
            element={
              <ProtectProfilePage>
                <PlaceOrder />
              </ProtectProfilePage>
            }
          />
          <Route
            path="/orders"
            element={
              <ProtectProfilePage>
                <Orders />
              </ProtectProfilePage>
            }
          />
          <Route
            path="/profile"
            element={
              <ProtectProfilePage>
                <Profile />
              </ProtectProfilePage>
            }
          />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
};

export default App;
