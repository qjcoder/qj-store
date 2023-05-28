import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/home/home";
import Category from "./components/category/category";
import SingleProduct from "./components/single-product/single-product";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Newsletter from "./components/footer/newsletter/newsletter.jsx";
import AppContext from "./utils/context";
import Success from "./components/success/success";

function App() {
  return (
    <BrowserRouter>
      <AppContext>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category/:id" element={<Category />} />
          <Route path="/product/:id" element={<SingleProduct />} />
          <Route path="/success" element={<Success />} />
        </Routes>
        <Newsletter />
        <Footer />
      </AppContext>
    </BrowserRouter>
  );
}

export default App;
