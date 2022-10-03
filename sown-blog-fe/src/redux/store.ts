import { configureStore } from "@reduxjs/toolkit";
import themeSlice from "../components/theme/themeSlice";

const store = configureStore({
  reducer: {
    theme: themeSlice.reducer,
  },
});
export default store;
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
