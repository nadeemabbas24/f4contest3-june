import React, { useEffect } from "react";
import {
  fetchProductRequest,
  fetchProductSuccess,
} from "../redux/productActions";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/cartActions";

function Home() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);
  const loading = useSelector((state) => state.loading);

  useEffect(() => {
    dispatch(fetchProductRequest());
    const fetchData = async () => {
      const res = await fetch("https://dummyjson.com/products");
      const data = await res.json();
      // console.log(data)
      dispatch(fetchProductSuccess(data));
    };
    fetchData();
    // console.log(typeof products, products);
  }, [dispatch]);

  const addToCartHandler = (item) => {
    console.log("item", item);
    dispatch(addToCart(item));
  };
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>All Items</h1>
      <div className="product-container">
        {loading && <h3>Loading Products...</h3>}
        {products &&
          products.map((obj) => {
            return (
              <div className="card" key={obj.id}>
                <img src={obj.thumbnail} alt="product" />
                <p>Title: {obj.title}</p>
                <p>Price: {obj.price}</p>
                <button onClick={() => addToCartHandler(obj)}>
                  Add To Cart
                </button>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default Home;
