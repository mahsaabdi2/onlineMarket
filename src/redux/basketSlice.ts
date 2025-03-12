import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getBasketFromLocalStorage, removeFromLocalStorage, saveBasketToLocalStorage } from "../utilies/localStorageUtil";


interface BasketItem {
  image: string | undefined;
  title: string | undefined;
  id: number;
  name: string;
  price: number;
  quantity: number;
}

interface UpdateQuantityPayload {
  id: number;
  value: number;
}

const initialState: BasketItem[] = getBasketFromLocalStorage(); 

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
      saveBasketToLocalStorage(state); 
    },

    remove: (state, action: PayloadAction<number>) => {
      const updatedState = state.filter((item) => item.id !== action.payload);
      saveBasketToLocalStorage(updatedState); 
      return updatedState;
    },

    updateQuantity: (state, action: PayloadAction<UpdateQuantityPayload>) => {
      const { id, value } = action.payload;
      const item = state.find((item) => item.id === id);
      if (item) {
        item.quantity += value;
      }
      saveBasketToLocalStorage(state); 
    },

    clearBasket: () => {
      removeFromLocalStorage("basket");
      return []; 
    }
  },
});

export const { add, remove, updateQuantity, clearBasket } = basketSlice.actions;
export default basketSlice;
