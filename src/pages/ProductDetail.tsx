import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { useParams } from "react-router-dom";
import basketSlice from "../redux/basketSlice";

const ProductDetails = () => {
    const { id } = useParams<{ id: string }>();
    const productId = id ? parseInt(id, 10) : null;
    const { data } = useSelector((state: RootState) => state.product);
    const dispatch = useDispatch();
    const {add}=basketSlice.actions
    
    const handleAddToBasket=(product:any)=>{
       dispatch(add(product))
    }
    
    const selectedProduct = data.find((item) => item.id === productId);

    if (!selectedProduct) {
        return <div className="text-center mt-5">Product not found</div>;
    }

    return (
        <div id="pricing-tables" className="padding-top padding-bottom">
            <div className="container-fluid d-flex justify-content-center mt-4">
                <div className="col-12 col-md-8 col-lg-6">
                    <div className="single-table d-flex flex-column justify-content-between w-100 m-4 p-4 rounded shadow-lg" 
                         style={{ backgroundColor: "#fff", borderRadius: "15px" }}>
                        <div className="image-container text-center">
                            <img 
                                src={selectedProduct.image} 
                                alt={selectedProduct.title} 
                                className="img-fluid rounded" 
                                style={{ maxHeight: "400px", objectFit: "contain" }} 
                            />
                        </div>
                        <h2 className="text-center mt-3">{selectedProduct.title}</h2>
                        <p className="text-center mt-4 " style={{color:"hsl(269, 100%, 62%)", fontSize:"40px"}}>{selectedProduct.category}</p>

                        <p className="price text-center">
                            <span className="dollar-icon">$</span>
                            <span style={{ color: "#3a0d69", fontSize: "24px" }}>
                                {selectedProduct.price || "99"}
                            </span> 
                            monthly
                        </p>
                        <div className="text-center" style={{ fontSize: "18px", color: "#555" }}>
                            {selectedProduct.description}
                        </div>
                        <button onClick={()=>{handleAddToBasket(selectedProduct)}} className="btn btn-primary mt-2 border-white rounded text-light">Add To Basket</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
