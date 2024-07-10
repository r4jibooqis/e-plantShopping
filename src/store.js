import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './CreatSlice';

const store = configureStore({
    reducer: {
        cart: cartReducer,  // Import the cart reducer here
    },
});
export default store