import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { ShoppingCartContextProvider } from "./Components/Context/ShoppingCartContext";
import CartPage from "./Components/Pages/CartPage";
import HomePage from "./Components/Pages/HomePage";

function App() {
  return (
    <ShoppingCartContextProvider>
      <Router>
        <Routes>
          <Route exact path="/cart" element={<CartPage />} />
          <Route exact path="/" element={<HomePage />} />
        </Routes>
      </Router>
    </ShoppingCartContextProvider>
  );
}

export default App;
