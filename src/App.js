import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Navbar from './components/Navbar';
import { Provider } from 'react-redux';
import store from './store';


function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' Component={Navbar}>
             <Route path='/home' Component={Home} />
             <Route path='/cart' Component={Cart} />
          </Route>          
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
