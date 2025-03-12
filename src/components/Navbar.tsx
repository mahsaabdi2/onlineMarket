import { Link } from "react-router-dom";
import { useEffect, useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import basketSlice from "../redux/basketSlice";
import basket from "../asset/icons8-shopping-baskets-50.png";
import icon from "../asset/logo.png";

const Navbar = () => {
  const items = useSelector((state: RootState) => state.basket);
  const { remove, updateQuantity, clearBasket } = basketSlice.actions;
  const [isScrolled, setIsScrolled] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();

  
  useEffect(() => {
    const storedBasket = localStorage.getItem("basket");
    if (storedBasket) {
      const parsedItems = JSON.parse(storedBasket);
      parsedItems.forEach((item: any) => {
        dispatch(basketSlice.actions.add(item));
      });
    }
  }, [dispatch]);
  const handleChangeQuantity = useCallback((id: number, value: number) => {
    dispatch(updateQuantity({ id, value, change: 0 }));
  }, [dispatch,updateQuantity]);

  const handleRemoveProduct = (productId: number) => {
    dispatch(remove(productId));
  };

  const handleClearAllBasket = () => {
    dispatch(clearBasket());
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Navbar */}
      <div className={`container mt-2 position-${isScrolled ? "fixed" : "absolute"} ${isScrolled ? "bg-light" : "bg-transparent"} top-0 start-0 rounded end-0 z-50 transition-colors duration-300 px-4`}>
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
        <div className="modal fade show d-block" tabIndex={-1} role="dialog">
          <div className="modal-dialog modal-lg" style={{marginTop:"8%" }} role="document">
            <div className="modal-content  bg-light">
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
                    {items.map((item:any) => (
                      <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center bg-light">
                        <div className="d-flex align-items-center">
                          <span className="rounded text-black fw-bold">{"  "}{item.quantity}</span>
                          <img src={item.image} alt={item.title} style={{ width: "50px", height: "50px", objectFit: "contain" }} className="me-3" />
                          <span className="fw-bold" style={{ maxWidth: '150px', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                            {item.title.length > 50 ? `${item.title.slice(0, 20)}...` : item.title}
                          </span>

                          <button className="mx-1 btn" style={{ border: "white 1px dashed", backgroundColor: "hsl(268, 13.50%, 78.20%)" }} onClick={() => handleChangeQuantity(item.id, 1)}>+</button>
                          <button
                            className="btn"
                            style={{ border: "white 1px dashed", backgroundColor: "hsl(268, 13.50%, 78.20%)" }}
                            onClick={() => handleChangeQuantity(item.id, -1)}
                            disabled={item.quantity <= 1}
                          >
                            -
                          </button>
                        </div>

                        {/* Wrap price and button inside a flex container */}
                        <div className="d-flex align-items-center gap-2">
                          <span className="fw-bold">Total: ${(item.price * item.quantity).toFixed(2)}</span>
                          <span className="fw-bold">Price: ${item.price.toFixed(2)}</span>

                          <button onClick={() => handleRemoveProduct(item.id)} className="btn btn-danger p-1">
                          <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              viewBox="0 0 16 16"
                            >
                              <path d="M5.5 5.5a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0v-6a.5.5 0 0 1 .5-.5zm2.5.5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0v-6zm2-.5a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0v-6a.5.5 0 0 1 .5-.5z" />
                              <path
                                fillRule="evenodd"
                                d="M14.5 3a1 1 0 0 1-1 1h-11a1 1 0 0 1-1-1h13zM3.5 4h9l-.5 9a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2L3.5 4zm7-1V2h-5v1h5z"
                              />
                            </svg>
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
                <div>
                  <button onClick={handleClearAllBasket} style={{ backgroundColor: "hsl(269, 100%, 62%)" }} className="btn">
                    Clear
                  </button>
                </div>
                <div>
                  <button type="button" className="btn" style={{ backgroundColor: "hsl(269, 100%, 62%)" }} onClick={() => setIsModalOpen(false)}>
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
