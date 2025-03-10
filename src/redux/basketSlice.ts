import { createSlice, PayloadAction } from "@reduxjs/toolkit";


interface BasketItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

interface UpdateQuantityPayload {
  id: number;
  value: number;
}

interface UpdateQuantityPayload {
  id: number;
  change: number;
}


const initialState: BasketItem[] = [];

const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    add: (state, action: PayloadAction<BasketItem>) => {
      const newItem = state.find((item) => item.id === action.payload.id);
      if (newItem) {
        newItem.quantity += 1;
      } else {
        state.push({ ...action.payload, quantity: 1 });
      }
    },

    remove: (state, action: PayloadAction<number>) => {
      return state.filter((item) => item.id !== action.payload);
    },

    updateQuantity: (state, action: PayloadAction<UpdateQuantityPayload>) => {
      const { id, value } = action.payload;
      const newItem = state.find((item) => item.id === id);
      if (newItem) {
        newItem.quantity += value;
      }
    },
    
  

    clearBasket: () => [],
  },
});

export const { add, remove, updateQuantity, clearBasket } = basketSlice.actions;
export default basketSlice;
