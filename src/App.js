import { Routes, Route } from 'react-router-dom'
import Header from "./pages/Header/Header.js"
import Footer from "./pages/Footer/Footer.js"
import HomePage from "./pages/Home/Home.js"
import ShopPage from "./pages/Shop/Shop.js"
import ContactPage from "./pages/Contact/Contact.js"
import Cartshop from "./pages/CartShop/Cartshop.js"
import LoginPage from "./pages/Login/Login.js"
import Register from "./pages/Register/Register.js"
import About from "./pages/About/About.js"
import "@fortawesome/fontawesome-free/css/all.min.css"


function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/shop' element={<ShopPage />} />
        <Route path='/contact' element={<ContactPage />} />
        <Route path='/cartshop' element={<Cartshop />} />
        <Route path='/about' element={<About />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<Register />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App;
