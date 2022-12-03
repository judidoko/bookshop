import "./App.css";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Cart from "./pages/cart/Cart";
import Login from "./pages/forms/Login";
import Register from "./pages/forms/Register";
import Book from "./pages/book/Book";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/book/:id" element={<Book />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
