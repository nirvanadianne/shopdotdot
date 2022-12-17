import data from './data';

function App() {
  return (
    <div>
      <header>
        <a href="/">shopdotdot</a>
      </header>
      <main>
        <h1> Shop New In</h1>
        <div className="products">
          {data.products.map((product) => (
            <div key={product.slug} className="product">
              <a href={`/product/${product.slug}`}>
                <img
                  src={product.image}
                  alt={product.name}
                  width="279"
                  height="350"
                />
              </a>
              <div className="product-info">
                <a href={`/product/${product.slug}`}>
                  <p>{product.name}</p>
                </a>
                <p>
                  <strong>£{product.price}</strong>
                </p>
                <button>add to cart</button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
