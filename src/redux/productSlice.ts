import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
interface Product {
    id: number;
    title: string;
    price: number;
    category: string;
    description: string;
    image: string;
  };

  interface ProductState {
    data: Product[];
    status: "idle" | "loading" | "succeeded" | "failed";
    error: string | null;
  };
  
  const initialState: ProductState = {
    data: [],
    status: "idle",
    error: null,
  };

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      return data; 
    } catch (error) {
      throw error; 
    }
  }
);



  
  // Product slice
const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(fetchProducts.pending, (state) => {
          state.status = "loading";
        })
        .addCase(fetchProducts.fulfilled, (state, action: PayloadAction<Product[]>) => {
          state.status = "succeeded";
          state.data = action.payload;
        })
        .addCase(fetchProducts.rejected, (state, action) => {
          state.status = "failed";
          state.error = action.payload as string || action.error.message || "Something went wrong";
        });
    },
  });
  
  export default productSlice;