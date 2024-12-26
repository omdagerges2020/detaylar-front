import { configureStore } from "@reduxjs/toolkit";
import { collectionData } from "./slices/collectionsSlice";
import { categoriesData } from "./slices/categoriesSlice";
import { categoryProductsData } from "./slices/categoryProductsSlice";
import {login} from "./slices/loginSlice";
// import {register} from "./slices/registerSlice"; 

const store = configureStore({
  reducer: {
    collectionData,
    categoriesData,
    categoryProductsData,
    login,
    // register,
  },
});

export default store;
