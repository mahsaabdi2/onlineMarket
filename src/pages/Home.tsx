import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import productSlice, { fetchProducts } from "../redux/productSlice";
import { AppDispatch, RootState } from "../redux/store";
import { Link } from "react-router-dom";
import basketSlice from "../redux/basketSlice";




const Home = () => {
    const { data, search } = useSelector((state: RootState) => state.product);
    const dispatch = useDispatch<AppDispatch>();
     const {setSearch}=productSlice.actions
     const {add}=basketSlice.actions;
     const [category , setCategory]=useState<string>("")
    
     const handleAddToBasket=(product:any)=>{
        dispatch(add(product))
     }
      const handleSearch = (e: React.FormEvent | React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
    
        const inputElement = document.getElementById("searchInput") as HTMLInputElement;
        if (inputElement) {
          dispatch(setSearch(inputElement.value)); 
        }
      };

    const filteredData = data.filter((item) =>
        item.title.toLowerCase().includes(search.toLowerCase())
    );

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    return (
        <>
        <div id="pricing-tables" className="padding-top padding-bottom">
             <div  className="container rounded d-flex flex-column align-items-center text-center" style={{ width: "100%" }} >
                <a href="#" style={{ fontSize: "1.5rem" }} className="navbar-brand mx-4 mb-4">Online Market</a>
                    <div className=" " style={{width:"80%"}}>
                    <form className="form-inline mx-4 d-flex justify-content-between mx-2" onSubmit={handleSearch}>
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
                <div className="pricing-table text-left">
                    <div className="row">
                        {filteredData.map((item: any, index) => (
                            <div key={index} className="col-md-6 col-lg-3 d-flex mt-4">
                                <div  className={`single-table d-flex flex-column justify-content-between w-100 m-4 p-4 ${index % 2 === 0 ? 'gray-card' : 'pink-card'}`}>
                                    <div className="image-container">
                                    <img 
                                        src={item.image} 
                                        alt={item.title} />

                                    </div>
                                    <h6 style={{fontSize:"20px"}}>{item.title}</h6>
                                    <p className="price">
                                        <span className="dollar-icon">$</span>
                                        <span style={{color:"#3a0d69"}}>{item.price || "99"}</span> monthly
                                    </p>
                                    <div className="flex-grow-1" style={{fontSize:"12px"}}>{item.description}</div>
                                    <Link to={`/detail/${item.id}`} className="btn btn-primary mt-auto border-black rounded text-light">View</Link>
                                    <button onClick={()=>{handleAddToBasket(item)}} className="btn btn-primary mt-2 border-white rounded text-light">Add To Basket</button>

                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default Home;


