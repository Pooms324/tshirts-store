import React, { Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Navigation from "./navigation/Navigation";
import ProductsPage from "./pages/ProductsPage";
import CartPage from "./pages/CartPage";
import Loading from "./components/uiElements/Loading";
import Error404Page from "./components/uiElements/Error404Page";
const productsPage = React.lazy(() => import("./pages/ProductsPage"));
const cartPage = React.lazy(() => import("./pages/CartPage"));
export default function App() {
  return (
    <div data-testid="app_comp" className="App">
      <Navigation>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<Navigate to="/tshirts" />} />
            <Route path="/tshirts" element={<ProductsPage />} />
            <Route path="/tshirts/cart" element={<CartPage />} />
            <Route
              path="*"
              element={<Error404Page>Page not found </Error404Page>}
            />
          </Routes>
        </Suspense>
      </Navigation>
    </div>
  );
}
