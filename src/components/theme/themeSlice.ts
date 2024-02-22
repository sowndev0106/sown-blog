import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../redux/store";
const themeSlice = createSlice({
  name: "theme",
  initialState: {
    value: "dark",
  },
  reducers: {
    changeTheme: (state) => {
      state.value = state.value === "dark" ? "light" : "dark";
    },
  },
});
export const selectTheme = (state: RootState) => state.theme.value;
export const { changeTheme } = themeSlice.actions;
export default themeSlice;
