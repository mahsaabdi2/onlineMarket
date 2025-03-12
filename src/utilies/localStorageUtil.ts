const LOCAL_STORAGE_KEY = "basket";

export const saveToLocalStorage = (key: string, data: any) => {
  localStorage.setItem(key, JSON.stringify(data));
};

export const getFromLocalStorage = (key: string) => {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : null;
};

export const removeFromLocalStorage = (key: string) => {
  localStorage.removeItem(key);
};

export const getBasketFromLocalStorage = () => {
  return getFromLocalStorage(LOCAL_STORAGE_KEY) || [];
};

export const saveBasketToLocalStorage = (basket: any[]) => {
  saveToLocalStorage(LOCAL_STORAGE_KEY, basket);
};
