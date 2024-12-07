import React from "react";
import PageWrapper from "/src/components/layout/page-wrapper/page-wrapper";
import products from "/src/mocks/products";
import gallery from "/src/mocks/gallery";
import { GlobalStyle } from "./styles";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AppRoute } from "/src/const";
import MainPage from "/src/components/pages/main-page/main-page";
import BuyPage from "/src/components/pages/buy-page/buy-page";
import ScrollToTop from "/src/components/ui/scroll-top/scroll-top";

export default function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path={AppRoute.MAIN} element={<PageWrapper />}>
            <Route index element={<MainPage products={products} />} />
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
