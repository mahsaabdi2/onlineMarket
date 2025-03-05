import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { fetchProducts } from "../redux/productSlice";
import { AppDispatch, RootState } from "../redux/store";
const Home=()=>{
    const {data , status}=useSelector((state:RootState)=>state.product);
    const dispatch=useDispatch<AppDispatch>();

    useEffect(()=>{
        dispatch(fetchProducts());
    }, [dispatch])

    
    return(
        <ul>
                 {
        data.map((item:any)=>(
           <li>{item.title}</li>
        ))
      }
        </ul>
     
    )
};

export default Home;