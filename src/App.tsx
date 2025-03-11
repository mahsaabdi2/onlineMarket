
import Home from "./pages/Home";
import './App.css';
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProductDetails from "./pages/ProductDetail";

const App: React.FC = () => {

  return (
   <div>
    <Navbar/>
    <div>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/detail/:id" element={<ProductDetails/>}/>
      </Routes>
    </div>
   </div>

    );
  }
 
export default App;