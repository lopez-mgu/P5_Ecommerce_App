import Navbar from './components/Navbar/Navbar';
import Store from './Pages/Store/Store';
import Home from './Pages/Home/Home';
import Footer from './components/Footer/Footer';
import {Container} from 'react-bootstrap';
import {Routes, Route, Navigate} from 'react-router-dom';
import CartProvider from "./context/CartContext";
import ShoppingCart from './Pages/ShoppingCart/ShoppingCart'

function App() {
  return (
    <CartProvider>
      <Navbar />
      <Container>
        <Routes>
          <Route index element={<Home/>} />
          <Route path='/store' element={<Store/>} />
          <Route path='/shopping-cart' element={<ShoppingCart/>} />
          {/* <Route path='/login' element={<Login />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/signup' element={<SignUp />} /> */}
          <Route path='*' element={<Navigate replace to='/'/>} />
        </Routes>
      </Container>
      <Footer/>
    </CartProvider>
  );
}

export default App;
