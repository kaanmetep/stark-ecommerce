import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import AuthContextProvider from "./contexts/AuthContext.jsx";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
  </BrowserRouter>
);