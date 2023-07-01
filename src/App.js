import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Navbar from "./components/Navbar";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <Routes>
          <Route exact path="/" Component={Navbar}>
            <Route path="/" Component={Home} />
            <Route path="/cart" Component={Cart} />
          </Route>
        </Routes>
      </HashRouter>
    </Provider>
  );
}

export default App;
