import Navbar from './components/Navbar/Navbar';
import Store from './Pages/Store/Store';
import Home from './Pages/Home/Home';
import Footer from './components/Footer/Footer';
import {Container} from 'react-bootstrap';
import {Routes, Route, Navigate} from 'react-router-dom';
import CartProvider from "./context/CartContext";
import { UserProvider } from './context/UserContext';
import ShoppingCart from './Pages/ShoppingCart/ShoppingCart';
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import CheckOut from './Pages/CheckOut/CheckOut';
import Auth from './Pages/Auth/Auth';
import Profile from './Pages/Profile/Profile';
import './App.css';
import SingleProduct from './Pages/SingleProduct/SingleProduct';

function App() {
  return (
    <UserProvider>
      <CartProvider>
        <PayPalScriptProvider 
          options={{ "client-id": process.env.REACT_APP_MY_CLIENT_ID, 
          components: "buttons",
          currency: "USD"}}>
          <Navbar />
          <Container className='Site-content'>
            <Routes>
              <Route index element={<Home/>} />
              <Route path='store' element={<Store/>} />
              <Route path='/:storeId' element={<SingleProduct/>} />
              <Route path='/shopping-cart' element={<ShoppingCart/>} />
              <Route path='/checkout' element={<CheckOut/>} />
              <Route path='/auth' element={<Auth/>} />
              <Route path='/profile' element={<Profile />} />
              <Route path='*' element={<Navigate replace to='/'/>} />
            </Routes>
          </Container>
          <Footer/>
        </PayPalScriptProvider>
      </CartProvider>
    </UserProvider>
    
  );
}

export default App;
