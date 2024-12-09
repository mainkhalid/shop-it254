import { BrowserRouter, Routes, Route } from "react-router-dom"

import Shop from "./pages/Shop"
import ShopCategory from "./pages/ShopCategory"
import Product from "./pages/Product"
import Cart from "./pages/Cart"
import LoginSignup from "./pages/LoginSignup"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Contact from "./pages/Contact"
import About from "./pages/About"
import Policy from "./pages/Policy"
import new_banner from "./assets/new_banner.jpg"
import ex_uk_banner from "./assets/ex_uk_banner.jpg"
import students_banner from "./assets/kids_banner.jpg"
import phone_banner from "./assets/phone_banner.jpg"
import accessories_banner from "./assets/accessories_banner.jpg"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/ex-uk" element={<ShopCategory banner={ex_uk_banner} category="ex-uk" />} />
          <Route path="/new" element={<ShopCategory banner={new_banner} category="new" />} />
          {/* <Route path="/students" element={<ShopCategory banner={students_banner} category="students" />} /> */}
          <Route path="/accessories" element={<ShopCategory banner={accessories_banner} category="accessories" />} />
          <Route path="/phones" element={<ShopCategory banner={phone_banner} category="phones" />} />
          <Route path="/product/:productId" element={<Product />} />
          <Route path="cart" element={<Cart />} />
          <Route path="login" element={<LoginSignup />} />
          <Route path="contact" element={<Contact />} />
          <Route path="about" element={<About />} />
          <Route path="policy" element={<Policy />} />
          
        </Routes>
        <ToastContainer />
        <Footer />
      </BrowserRouter>
     
    </div>
  )
}

export default App