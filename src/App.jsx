import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "./features/productSlice";
import './App.css'


const App = () => {
  const dispatch = useDispatch();

  const products = useSelector(
    (state) => state.products.products
  );

  const [list, setList] = useState([]);
  const [visible, setVisible] = useState(9);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  useEffect(() => {
    setList(products);
  }, [products]);

  return (
   <div className="container py-5">

  <h1 className="main-title text-center mb-5">
    Our Products
  </h1>

  <div className="row g-4">

    {list.slice(0, visible).map((item) => (

      <div className="col-lg-4 col-md-6" key={item.id}>

        <div className="product-card">

          <div className="image-box">
            <img
              src={item.thumbnail}
              className="product-image"
              alt={item.title}
            />
          </div>

          <div className="card-body">

            <h5 className="product-title">
              {item.title}
            </h5>

            <p className="product-desc">
              {item.description.slice(0, 90)}...
            </p>

            <div className="d-flex justify-content-between align-items-center mb-3">

              <span className="price">
                ₹ {item.price}
              </span>

              <span className="rating">
                ⭐ {item.rating}
              </span>

            </div>

            <p className="brand">
              Brand :
              <strong> {item.brand}</strong>
            </p>

            <button className="btn btn-dark w-100 view-btn">
              View Details
            </button>

          </div>

        </div>

      </div>

    ))}

  </div>

  <div className="text-center mt-5">

    {visible < list.length ? (

      <button
        className="btn btn-primary load-btn"
        onClick={() => setVisible(list.length)}
      >
        Load More
      </button>

    ) : (

      <button
        className="btn btn-danger load-btn"
        onClick={() => setVisible(6)}
      >
        Show Less
      </button>

    )}

  </div>

</div>
  );
};

export default App;