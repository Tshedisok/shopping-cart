import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectCartItemCount } from './CartSlice';

function Header() {
  const cartCount = useSelector(selectCartItemCount);

  return (
    <header className="site-header">
      <Link to="/" className="site-brand">Paradise Nursery</Link>
      <nav className="site-nav">
        <Link to="/">Home</Link>
        <Link to="/plants">Plants</Link>
        <Link
          to="/cart"
          className="cart-link"
          aria-label={`Shopping cart, ${cartCount} items`}
        >
          <svg
            className="cart-icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <circle cx="9" cy="21" r="1" />
            <circle cx="20" cy="21" r="1" />
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
          </svg>
          <span className="cart-badge">{cartCount}</span>
        </Link>
      </nav>
    </header>
  );
}

export default Header;
