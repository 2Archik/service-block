import { configureStore } from "@reduxjs/toolkit";
import { moreApi } from "./moreApi";
import services from "./slice";

export const store = configureStore({
  reducer: {
    [moreApi.reducerPath]: moreApi.reducer,
    services,
  },
  middleware: (getDefaultMiddlware) =>
    getDefaultMiddlware().concat(moreApi.middleware),
});
