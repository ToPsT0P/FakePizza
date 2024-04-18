import MainPage from "../pages/MainPage/MainPage"
import "./absoluteStyles.scss"
import Cart from "../pages/CartPage/CartPage"
import { Route, Routes } from "react-router-dom"


function App() {


  return(
  <div className="pages__Wrapper">

      <Routes>
        <Route path="/" element={<MainPage/>}/>
        <Route path="/cart" element={<Cart/>} />
      </Routes>
    </div>      
    )
  }

export default App
