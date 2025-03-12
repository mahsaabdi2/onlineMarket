import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import productSlice, { fetchProducts } from "../redux/productSlice";
import { AppDispatch, RootState } from "../redux/store";
import { Link } from "react-router-dom";
import basketSlice from "../redux/basketSlice";
import Footer from "../components/Footer";
import { getFromLocalStorage, saveToLocalStorage } from "../utilies/localStorageUtil";

const Home = () => {
  const { data, search , status} = useSelector((state: RootState) => state.product);
  const dispatch = useDispatch<AppDispatch>();
  const { setSearch } = productSlice.actions;
  const { add } = basketSlice.actions;
  const [category, setCategory] = useState<string>("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

 

  useEffect(() => {
    const storedSearch = getFromLocalStorage("search");
    if (storedSearch) {
      dispatch(setSearch(storedSearch));
    }
  }, [dispatch]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    dispatch(setSearch(value));
    saveToLocalStorage("search", value); 
  };

  const handleAddToBasket = (product: any) => {
      dispatch(add(product));
    };
  const filteredData = data.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase()) &&
    (category ? item.category === category : true)
  );

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const paginatedProducts = filteredData.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  return (
    <>
      {status === 'loading' && <div className="loader">Loading...</div>}
      {status === 'failed' && <div className="error">Failed to load products.</div>}
      {status === 'succeeded' && filteredData.length > 0 && (
        <>
          <div id="pricing-tables" className="padding-top padding-bottom">
            <div className="container rounded d-flex flex-column align-items-center text-center" style={{ width: "100%" }}>
              <h1 className="text-sm fw-bold sm:text-lg m-4 fw-bol" style={{ color: "hsl(269, 100%, 62%)" }}>Online Market</h1>
              <div style={{ width: "80%" }}>
                <form className="form-inline mx-4 d-flex justify-content-between mx-2" onSubmit={(e:any) =>{handleSearch(e)}}>
                  <input
                    id="searchInput"
                    className="form-control mr-ms-2"
                    type="search"
                    placeholder="Search here"
                    aria-label="Search"
                    onChange={handleSearch}
                  />
                </form>
              </div>
            </div>
  
            <div className="container text-center">
              <div className="d-flex justify-content-center mt-4">
                <button className="btn m-2" onClick={() => setCategory("")} style={{ backgroundColor: "hsl(269, 100%, 62%)" }}>All</button>
                {['men\'s clothing', 'women\'s clothing', 'electronics', 'jewelery'].map((item) => (
                  <button
                    key={item}
                    onClick={() => setCategory(item)}
                    className="btn m-2"
                    style={{ backgroundColor: "hsl(269, 100%, 62%)" }}
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </button>
                ))}
              </div>
  
              <div className="pricing-table text-left">
                <div className="row">
                  {paginatedProducts.map((item: any, index) => (
                    <div key={index} className="col-md-6 col-lg-3 d-flex mt-4">
                      <div className={`single-table d-flex flex-column justify-content-between w-100 m-4 p-4 ${index % 2 === 0 ? 'gray-card' : 'pink-card'}`}>
                        <div className="image-container">
                          <img src={item.image} alt={item.title} />
                        </div>
                        <h6 style={{ fontSize: "20px" }}>{item.title}</h6>
                        <p className="price">
                          <span className="dollar-icon">$</span>
                          <span style={{ color: "#3a0d69" }}>{item.price || "99"}</span> monthly
                        </p>
                        <div className="flex-grow-1" style={{ fontSize: "12px" }}>{item.description}</div>
                        <Link to={`/detail/${item.id}`} className="btn btn-primary mt-auto border-black rounded text-light">View</Link>
                        <button onClick={() => handleAddToBasket(item)} className="btn btn-primary mt-2 border-white rounded text-light mb-2">Add To Basket</button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
  
          {/* Pagination */}
          {category === '' && (
            <nav aria-label="Page navigation example" className="d-flex justify-content-center m-4">
              <ul className="pagination">
                {/* Previous Button */}
                <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                  <button
                    className="page-link"
                    onClick={() => handlePageChange(currentPage - 1)}
                    style={{
                      cursor: currentPage > 1 ? 'pointer' : 'not-allowed',
                      borderColor: 'hsl(269, 100%, 62%)',
                      color: '#000',
                    }}
                    disabled={currentPage === 1}
                  >
                    Previous
                  </button>
                </li>
  
                {/* Page Numbers */}
                {[1, 2].map((page) => (
                  <li key={page} className="page-item">
                    <button
                      onClick={() => handlePageChange(page)}
                      className={`page-link ${currentPage === page ? 'active' : ''}`}
                      style={{
                        cursor: 'pointer',
                        backgroundColor: currentPage === page ? 'hsl(269, 100%, 62%)' : '#fff',
                        color: currentPage === page ? '#fff' : '#000',
                        borderColor: 'hsl(269, 100%, 62%)',
                      }}
                    >
                      {page}
                    </button>
                  </li>
                ))}
  
                {/* Next Button */}
                <li className={`page-item ${currentPage >= Math.ceil(filteredData.length / itemsPerPage) ? 'disabled' : ''}`}>
                  <button
                    className="page-link"
                    onClick={() => handlePageChange(currentPage + 1)}
                    style={{
                      cursor: currentPage < Math.ceil(filteredData.length / itemsPerPage) ? 'pointer' : 'not-allowed',
                      borderColor: 'hsl(269, 100%, 62%)',
                      color: '#000',
                    }}
                    disabled={currentPage >= Math.ceil(filteredData.length / itemsPerPage)}
                  >
                    Next
                  </button>
                </li>
              </ul>
            </nav>
          )}
          <Footer />
        </>
      )}
    </>
  );
  
};

export default Home;
