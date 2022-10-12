import { Routes, Route } from 'react-router-dom'
import HomePage from "./pages/Home/Home.js"
import ShopPage from "./pages/Shop/Shop.js"
import ContactPage from "./pages/Contact/Contact.js"
import Cartshop from "./pages/CartShop/Cartshop.js"
import LoginPage from "./pages/Login/Login.js"
import Register from "./pages/Register/Register.js"
import About from "./pages/About/About.js"
import CRUDUser from "./pages/SystemManage/admin/crudUser.js"


function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/shop' element={<ShopPage />} />
        <Route path='/contact' element={<ContactPage />} />
        <Route path='/cartshop' element={<Cartshop />} />
        <Route path='/about' element={<About />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<Register />} />
        <Route path='/manage-crud-user' element={<CRUDUser />} />
      </Routes>
    </div>
  )
}

export default App;
