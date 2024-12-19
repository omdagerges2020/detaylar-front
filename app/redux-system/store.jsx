import { configureStore } from "@reduxjs/toolkit";
import { collectionData } from "./slices/collectionsSlice";
import { categoriesData } from "./slices/categoriesSlice";

const store = configureStore({
  reducer: { collectionData, categoriesData },
});

export default store;
