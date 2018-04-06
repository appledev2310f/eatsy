import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/store";
import {
  fetchProducts,
  fetchProduct,
  createProduct,
  updateProduct,
  deleteProduct
} from "./actions/product_actions";
import Root from "./components/root";

document.addEventListener("DOMContentLoaded", () => {
  let store;
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.fetchProduct = fetchProduct;
  window.fetchProducts = fetchProducts;
  window.createProduct = createProduct;
  window.updateProduct = updateProduct;
  window.deleteProduct = deleteProduct;

  const root = document.getElementById("root");
  ReactDOM.render(<Root store={store} />, root);
});
