import { Provider as ReduxProvider } from "react-redux";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ShoppingCartContextProvider } from "./Components/Context/ShoppingCartContext";
import CartPage from "./Components/Pages/CartPage";
import HomePage from "./Components/Pages/HomePage";
import LoginPage from "./Components/Pages/LogIn";
import store from "./Components/Redux/ReduxIndex";
import "./App.css";

function App() {
  return (
    <ReduxProvider store={store}>
      <ShoppingCartContextProvider>
        <Router>
          <Routes>
            <Route exact path="/cart" element={<CartPage />} />
            <Route exact path="/" element={<HomePage />} />
            <Route exact path="/login" element={<LoginPage />}></Route>
          </Routes>
        </Router>
      </ShoppingCartContextProvider>
    </ReduxProvider>
  );
}

export default App;
