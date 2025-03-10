
import Home from "./pages/Home";
import './App.css';
import { Route, Routes } from "react-router-dom";
import Basket from "./pages/Basket";
import Navbar from "./components/Navbar";
import ProductDetails from "./pages/ProductDetail";

const App: React.FC = () => {

  return (
   <div>
    <Navbar/>
    <div>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/basket" element={<Basket/>}/>
      <Route path="/detail/:id" element={<ProductDetails/>}/>
      </Routes>
    </div>
   
   </div>



  //     <div>
  //       <div id="pricing-tables" className="padding-top padding-bottom">
  //     <div className="container text-center">
  //         <div className="section-title">
  //             <h1>Pricing Tables</h1>
  //             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac augue at erat hendrerit dictum. Praesent porta, purus eget sagittis imperdiet.</p>
  //         </div>
  //         <div className="pricing-table  text-left">
  //             <div className="row">
  //                 <div className="col-md-6 col-lg-3">
  //                     <div className="single-table">
  //                         <h2>Starter</h2>
  //                         <p className="price"><span className="dollar-icon">$</span><span>19</span> monthly</p>
  //                         <ul>
  //                             <li>5 Domain Names</li>
  //                             <li>1GB Dedicated Ram</li>
  //                             <li>5 Sub Domain</li>
  //                             <li>10 Addon Domain</li>
  //                             <li>24/7 Support</li>
  //                         </ul>
  //                         <a href="#/" className="btn btn-primary">Sign-up</a>
  //                     </div>
  //                 </div>
  //                 <div className="col-md-6 col-lg-3">
  //                     <div className="single-table featured-table">
  //                         <h2>Business</h2>
  //                         <p className="price"><span className="dollar-icon">$</span><span>129</span> monthly</p>
  //                         <ul>
  //                             <li>5 Domain Names</li>
  //                             <li>1GB Dedicated Ram</li>
  //                             <li>5 Sub Domain</li>
  //                             <li>10 Addon Domain</li>
  //                             <li>24/7 Support</li>
  //                         </ul>
  //                         <a href="#/" className="btn btn-primary">Sign-up</a>
  //                     </div>
  //                 </div>
  //                 <div className="col-md-6 col-lg-3">
  //                     <div className="single-table">
  //                         <h2>Basic</h2>
  //                         <p className="price"><span className="dollar-icon">$</span><span>49</span> monthly</p>
  //                         <ul>
  //                             <li>5 Domain Names</li>
  //                             <li>1GB Dedicated Ram</li>
  //                             <li>5 Sub Domain</li>
  //                             <li>10 Addon Domain</li>
  //                             <li>24/7 Support</li>
  //                         </ul>
  //                         <a href="#/" className="btn btn-primary">Sign-up</a>
  //                     </div>
  //                 </div>
  //                 <div className="col-md-6 col-lg-3">
  //                     <div className="single-table">
  //                         <h2>Ultra</h2>
  //                         <p className="price"><span className="dollar-icon">$</span><span>199</span> monthly</p>
  //                         <ul>
  //                             <li>5 Domain Names</li>
  //                             <li>1GB Dedicated Ram</li>
  //                             <li>5 Sub Domain</li>
  //                             <li>10 Addon Domain</li>
  //                             <li>24/7 Support</li>
  //                         </ul>
  //                         <a href="#/" className="btn btn-primary">Sign-up</a>
  //                     </div>
  //                 </div>
  //             </div>
  //         </div>
  //         <div className="pricing-table-one pricing-table">
  //             <div className="row">
  //                 <div className="col-md-6 col-lg-3">
  //                     <div className="text-center single-table">
  //                         <h2>Basic</h2>
  //                         <p className="price"><span className="dollar-icon">$</span><span>19</span> monthly</p>
  //                         <ul>
  //                             <li>5 GB Space</li>
  //                             <li>50 GB Bandwidth</li>
  //                             <li>70 Portfolio Items</li>
  //                             <li>20 Video Uploads</li>
  //                             <li>24/7 Support</li>
  //                         </ul>
  //                         <a href="#/" className="btn btn-primary">Sign Up</a>
  //                     </div>
  //                 </div>
  //                 <div className="col-md-6 col-lg-3">
  //                     <div className="text-center single-table featured-table">
  //                         <h2>Standard</h2>
  //                         <p className="price"><span className="dollar-icon">$</span><span>39</span> monthly</p>
  //                         <ul>
  //                             <li>5 GB Space</li>
  //                             <li>50 GB Bandwidth</li>
  //                             <li>70 Portfolio Items</li>
  //                             <li>20 Video Uploads</li>
  //                             <li>24/7 Support</li>
  //                         </ul>
  //                         <a href="#/" className="btn btn-primary">Sign Up</a>
  //                     </div>
  //                 </div>
  //                 <div className="col-md-6 col-lg-3">
  //                     <div className="text-center single-table">
  //                         <h2>Business</h2>
  //                         <p className="price"><span className="dollar-icon">$</span><span>89</span> monthly</p>
  //                         <ul>
  //                             <li>5 GB Space</li>
  //                             <li>50 GB Bandwidth</li>
  //                             <li>70 Portfolio Items</li>
  //                             <li>20 Video Uploads</li>
  //                             <li>24/7 Support</li>
  //                         </ul>
  //                         <a href="#/" className="btn btn-primary">Sign Up</a>
  //                     </div>
  //                 </div>
  //                 <div className="col-md-6 col-lg-3">
  //                     <div className="text-center single-table">
  //                         <h2>Ultra</h2>
  //                         <p className="price"><span className="dollar-icon">$</span><span>199</span> monthly</p>
  //                         <ul>
  //                             <li>5 GB Space</li>
  //                             <li>50 GB Bandwidth</li>
  //                             <li>70 Portfolio Items</li>
  //                             <li>20 Video Uploads</li>
  //                             <li>24/7 Support</li>
  //                         </ul>
  //                         <a href="#/" className="btn btn-primary">Sign Up</a>
  //                     </div>
  //                 </div>
  //             </div>
  //         </div>
  //     </div>
  // </div>
  //     </div>
    );
  }
 
export default App;