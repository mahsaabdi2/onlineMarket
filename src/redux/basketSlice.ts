import { createSlice, PayloadAction } from "@reduxjs/toolkit";


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
      localStorage.setItem("basket" , JSON.stringify(state))
    },

    remove: (state, action: PayloadAction<number>) => {
      const updatedState=state.filter((item) => item.id !== action.payload);
      localStorage.setItem("basket" , JSON.stringify(updatedState));
      return updatedState;
    },

    updateQuantity: (state, action: PayloadAction<UpdateQuantityPayload>) => {
      const { id, value } = action.payload;
      const newItem = state.find((item) => item.id === id);
      if (newItem) {
        newItem.quantity += value;
      }
      localStorage.setItem("basket" , JSON.stringify(state));
    },
    
    clearBasket: () => {
      localStorage.removeItem("basket");
      return []
    }
  },
});

export const { add, remove, updateQuantity, clearBasket } = basketSlice.actions;
export default basketSlice;
