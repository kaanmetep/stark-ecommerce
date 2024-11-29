import React from "react";
import NavBar from "./components/NavBar";
import Sidebar from "./components/Sidebar";
import Add from "./pages/Add";
import List from "./pages/List";
import Orders from "./pages/Orders";
import PageNotFound from "./pages/PageNotFound";
import ProtectRoute from "./pages/ProtectRoute";
import { Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <div className="flex flex-col  min-h-screen">
      <NavBar />
      <hr />
      <div className="flex flex-grow">
        <ProtectRoute>
          <Sidebar />
          <div className="py-4 px-8">
            <Routes>
              <Route path="/" element={<Add />} />
              <Route path="/add" element={<Add />} />
              <Route path="/list" element={<List />} />
              <Route path="/orders" element={<Orders />} />
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </div>
        </ProtectRoute>
      </div>
    </div>
  );
};

export default App;