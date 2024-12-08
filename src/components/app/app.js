import React from "react";
import PageWrapper from "../layout/page-wrapper/page-wrapper";
import products from "../../mocks/products";
import gallery from "../../mocks/gallery";
import { GlobalStyle } from "./styles";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { AppRoute } from "../../const";
import MainPage from "../pages/main-page/main-page";
import BuyPage from "../pages/buy-page/buy-page";
import ScrollToTop from "../ui/scroll-top/scroll-top";

export default function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path={AppRoute.MAIN} element={<PageWrapper />}>
            <Route  index element={<MainPage products={products} />} />
            <Route
              path={AppRoute.BUY.replace(AppRoute.MAIN, "")}
              element={<BuyPage slides={gallery} />}
            />
          </Route>
        </Routes>
      </Router>
    </>
  );
}
