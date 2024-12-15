import Home from 'pages/Home';
import NavBar from 'components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Catalog from 'pages/Catalog';
import Admin from 'pages/Admin';
import ProductDetails from 'pages/ProductDetails';

const Rotas = () => (
  <BrowserRouter>
  <NavBar/>
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/products" element={<Catalog />}></Route>
      <Route path="/products/:productsId" element={<ProductDetails />}></Route>
      <Route path="/admin" element={<Admin />}></Route>
    </Routes>
  </BrowserRouter>
);

export default Rotas;
