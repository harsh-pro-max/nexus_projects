import React, { useEffect, useState, useMemo } from "react";
import ReactDOM from "react-dom/client";

function BrowseMart() {

  // 🔹 States
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [minRating, setMinRating] = useState(0);
  const [loading, setLoading] = useState(true);

  // 🔹 API Fetch
  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("https://dummyjson.com/products");
        const data = await res.json();
        setProducts(data.products);
      } catch (err) {
        console.log("Error:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  // 🔹 Derived Data (IMPORTANT)
  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const categoryMatch =
        selectedCategory === "all" ||
        product.category === selectedCategory;

      const ratingMatch = product.rating >= minRating;

      return categoryMatch && ratingMatch;
    });
  }, [products, selectedCategory, minRating]);

  // 🔹 UI
  return (
    <>
      <div className="header">
        <h1>BrowseMart</h1>

        <div className="filters">
          <button onClick={() => {
            setSelectedCategory("all");
            setMinRating(0);
          }}>
            All Product
          </button>

          <button onClick={() => setMinRating(4)}>
            Rating ⭐ 4+
          </button>

          <button onClick={() => setSelectedCategory("beauty")}>
            Beauty
          </button>

          <button onClick={() => setSelectedCategory("fragrances")}>
            Fragrances
          </button>

          <button onClick={() => setSelectedCategory("furniture")}>
            Furniture
          </button>

          <button onClick={() => setSelectedCategory("groceries")}>
            Groceries
          </button>
        </div>
      </div>

      <div className="body">

        {loading ? (
          <h2>Loading...</h2>
        ) : (
          <div className="martCard">
            {filteredProducts.map((product) => (
              <div key={product.id} className="card">

                <img
                  src={product.thumbnail}
                  alt={product.title}
                  className="card-img"
                />

                <div className="card-content">
                  <h2 className="title">{product.title}</h2>
                  <p className="price">${product.price}</p>
                  <p className="rating">⭐ {product.rating}</p>
                  <p className="category">{product.category}</p>
                </div>

              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

const Root = ReactDOM.createRoot(document.getElementById("root"));
Root.render(<BrowseMart />);