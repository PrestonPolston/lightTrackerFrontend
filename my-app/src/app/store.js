import { configureStore } from "@reduxjs/toolkit";
import { lightApi } from "../api/lightTrackr";
const store = configureStore({
  reducer: { [lightApi.reducerPath]: lightApi.reducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(lightApi.middleware),
});
export default store;
