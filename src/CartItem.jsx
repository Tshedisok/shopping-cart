import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Header from './Header';
import {
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
  setQuantity,
  selectCartItemCount,
  selectCartItems,
  selectCartTotalCost,
} from './CartSlice';

function CartLineItem({ item }) {
  const dispatch = useDispatch();
  const lineTotal = item.price * item.quantity;

  const handleQuantityChange = (event) => {
    const nextQuantity = Number.parseInt(event.target.value, 10);
    if (Number.isNaN(nextQuantity)) {
      return;
    }
    dispatch(setQuantity({ id: item.id, quantity: nextQuantity }));
  };

  return (
    <article className="cart-line">
      <img src={item.image} alt={item.name} width="100" height="100" />
      <div className="cart-line-details">
        <h3>{item.name}</h3>
        <p>Unit price: R{item.price.toFixed(2)}</p>
        <p>Line total: R{lineTotal.toFixed(2)}</p>
        <div className="cart-line-actions">
          <div className="quantity-counter">
            <button
              type="button"
              className="quantity-btn"
              aria-label={`Decrease quantity of ${item.name}`}
              onClick={() => dispatch(decreaseQuantity(item.id))}
            >
              −
            </button>
            <input
              type="number"
              className="quantity-input"
              min="1"
              value={item.quantity}
              onChange={handleQuantityChange}
              aria-label={`Quantity of ${item.name}`}
            />
            <button
              type="button"
              className="quantity-btn"
              aria-label={`Increase quantity of ${item.name}`}
              onClick={() => dispatch(increaseQuantity(item.id))}
            >
              +
            </button>
          </div>
          <button
            type="button"
            className="btn-delete"
            onClick={() => dispatch(removeFromCart(item.id))}
          >
            Delete
          </button>
        </div>
      </div>
    </article>
  );
}

function CartItem() {
  const items = useSelector(selectCartItems);
  const totalItems = useSelector(selectCartItemCount);
  const totalCost = useSelector(selectCartTotalCost);

  const handleCheckout = () => {
    window.alert('Coming Soon');
  };

  return (
    <div className="page">
      <Header />
      <main className="page-content">
        <h1>Shopping Cart</h1>
        <div className="cart-summary">
          <p>Total plants in cart: {totalItems}</p>
          <p className="cart-total">Total cost: R{totalCost.toFixed(2)}</p>
        </div>

        {items.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <div className="cart-list">
            {items.map((item) => (
              <CartLineItem key={item.id} item={item} />
            ))}
          </div>
        )}

        <div className="cart-page-actions">
          <Link to="/plants">Continue Shopping</Link>
          <button type="button" onClick={handleCheckout}>Checkout</button>
        </div>
      </main>
    </div>
  );
}

export default CartItem;
