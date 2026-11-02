import { useDispatch, useSelector } from 'react-redux';
import Header from './Header';
import { plantsByCategory } from './plants';
import { addToCart, selectIsInCart } from './CartSlice';

function ProductCard({ plant }) {
  const dispatch = useDispatch();
  const inCart = useSelector((state) => selectIsInCart(state, plant.id));

  const handleAddToCart = () => {
    dispatch(addToCart(plant));
  };

  return (
    <article className="product-card">
      <img src={plant.image} alt={plant.name} width="200" height="200" />
      <h3>{plant.name}</h3>
      <p className="product-category">{plant.category}</p>
      <p className="product-price">R{plant.price.toFixed(2)}</p>
      <button type="button" onClick={handleAddToCart} disabled={inCart}>
        {inCart ? 'Added to Cart' : 'Add to Cart'}
      </button>
    </article>
  );
}

function ProductList() {
  return (
    <div className="page">
      <Header />
      <main className="page-content">
        <h1>Houseplants</h1>
        {plantsByCategory.map(({ category, plants }) => (
          <section key={category} className="category-section">
            <h2>{category}</h2>
            <div className="product-grid">
              {plants.map((plant) => (
                <ProductCard key={plant.id} plant={plant} />
              ))}
            </div>
          </section>
        ))}
      </main>
    </div>
  );
}

export default ProductList;
