import { Link, Route, Routes } from 'react-router-dom';
import AboutUs from './AboutUs';
import CartItem from './CartItem';
import ProductList from './ProductList';
import './App.css';

function LandingPage() {
  return (
    <div className="landing-page">
      <div className="landing-content">
        <h1>Paradise Nursery</h1>
        <AboutUs />
        <Link className="get-started" to="/plants">Get Started</Link>
      </div>
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/plants" element={<ProductList />} />
      <Route path="/cart" element={<CartItem />} />
    </Routes>
  );
}

export default App;
