import { configureStore } from "@reduxjs/toolkit";
// import cryptoSlice from "../services/cryptoApi";
import { cryptoApi } from "../services/cryptoApi";
import { cryptoNewsApi } from "../services/cryptoNewsApi";
// console.log('from  sotre')
const store = configureStore({
    
    reducer:{
        
        [cryptoApi.reducerPath]: cryptoApi.reducer,
        [cryptoNewsApi.reducerPath]: cryptoNewsApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat((cryptoApi.middleware),(cryptoNewsApi.middleware))
}
)
export default store;