import { Link } from "react-router-dom";
import icon from "../asset/logo.png";
import { useEffect, useState } from "react";
import basket from "../asset/icons8-shopping-baskets-50.png"
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";

import basketSlice from "../redux/basketSlice";
const Navbar = () => {
  const items=useSelector((state:RootState)=>state.basket);
  const {remove , updateQuantity, clearBasket}=basketSlice.actions;
  const [isScrolled, setIsScrolled] = useState(false);
  const [isModalOpen , setIsModalOpen]=useState(false);
  const dispatch=useDispatch();

  const handleChangeQuantity = (id: number, value: number) => {
    dispatch(updateQuantity({
      id, value,
      change: 0
    }));
  };
  
  
  const handleRemoveProduct=(product:any)=>{
    dispatch(remove(product));
  }

  const handleClearAllBasket=()=>{
    dispatch(clearBasket())
  }


    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            if (scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

        return (
        <>
      {/* Navbar */}
      <div className={`container mt-2 position-${isScrolled ? "fixed" : "absolute"} ${
          isScrolled ? "bg-light" : "bg-transparent"} top-0 start-0 rounded end-0 z-50 transition-colors duration-300 px-4`}>
        <div className="container mx-auto d-flex flex-sm-row justify-content-between align-items-center py-2">
          <div>
            <Link to="/" className="d-flex align-items-center text-decoration-none">
              <img src={icon} alt="Logo" className="h-8 sm:h-10" style={{ width: "20%" }} />
              <span className="text-sm fw-bold sm:text-lg ms-2" style={{ color: "violet" }}>
                Mahsa Shop
              </span>
            </Link>
          </div>

          {/* Basket Icon with Counter */}
          <div className="d-flex align-items-center me-4">
            <button className="btn p-0 position-relative" onClick={() => setIsModalOpen(true)}>
              <img className="w-100 h-100" src={basket} alt="basket" style={{ width: "30px", height: "30px" }} />
              <span
                className="position-absolute top-0 start-100 translate-middle text-black fw-bold text-xs sm:text-base rounded-circle px-2 py-1"
                style={{ backgroundColor: "violet" }}
              >
                {items.length}
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Basket Modal */}
      {isModalOpen && (
  <div 
    className="modal fade show d-block" 
    tabIndex={-1} 
    role="dialog" 
    style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
  >
    <div className="modal-dialog modal-lg" role="document">
      <div className="modal-content">
        
        {/* Modal Header */}
        <div className="modal-header d-flex justify-content-between align-items-center">
          <h5 className="modal-title" style={{ color: "hsl(269, 100%, 62%)" }}>Your Basket</h5>
          <button 
            type="button" 
            className="close" 
            onClick={() => setIsModalOpen(false)} 
            style={{ border: "none", background: "transparent", fontSize: "1.5rem" }}
          >
            &times;
          </button>
        </div>

        {/* Scrollable Modal Body */}
        <div className="modal-body" style={{ maxHeight: "400px", overflowY: "auto" }}>
          {items.length > 0 ? (
            <ul className="list-group">
              {items.map((item: any, index) => (
                <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center">
                  <span className="rounded text-white" style={{backgroundColor:"hsl(268, 37.00%, 71.40%)"}}>{item.quantity}</span>
                  <img src={item.image} alt={item.title} 
                    style={{ width: "50px", height: "50px", objectFit: "contain" }} className="me-3"/>
                  <span className="mx-2">{item.title}</span>

                  <button className="mx-1 btn" style={{border:"white 1px dashed" ,backgroundColor: "hsl(268, 13.50%, 78.20%)"}} onClick={()=>{handleChangeQuantity(item.id ,1)}} >+</button>
                  <button className="btn" style={{border:"white 1px dashed" , backgroundColor: "hsl(268, 13.50%, 78.20%)"}} 
                  onClick={()=>{handleChangeQuantity(item.id,-1)}} disabled={item.quantity <= 1}>-</button>
                </div>

                {/* Wrap price and button inside a flex container */}
                <div className="d-flex align-items-center gap-2">
                  <span className="fw-bold">Total: ${(item.price * item.quantity).toFixed(2)}</span>
                  <span className="fw-bold">Price: ${item.price.toFixed(2)}</span>

                  <button onClick={() => handleRemoveProduct(item.id)} className="btn btn-danger p-1">
                    {/* <FaTrashAlt /> */}
                  </button>
                  
                </div>
              </li>
              ))}
            </ul>
          ) : (
            <p className="text-center">Your basket is empty.</p>
          )}
        </div>

        {/* Modal Footer */}
        <div className="modal-footer d-flex justify-content-between">
        <div><button onClick={()=>handleClearAllBasket()} style={{ backgroundColor: "hsl(269, 100%, 62%)"}} className="btn">clear</button></div>
          <div><button 
            type="button" 
            className="btn" 
            style={{ backgroundColor: "hsl(269, 100%, 62%)"}} 
            onClick={() => setIsModalOpen(false)}>Close</button></div>
        </div>
      </div>
    </div>
  </div>
)}

    </>
  );
  };
  
  export default Navbar;