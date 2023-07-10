const { configureStore } = require("@reduxjs/toolkit");
import cartReducer from '../../Feature/cartSlice';

const store = configureStore({
    reducer: {
        cart: cartReducer,
    }
})

export default store;