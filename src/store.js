import { configureStore } from "@reduxjs/toolkit";
import droppingData from "./UI/droppingData";

const store = configureStore({
  reducer: {
    droppingData: droppingData,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
