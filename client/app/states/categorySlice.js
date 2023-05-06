import { createSlice } from "@reduxjs/toolkit";

export const categorySlice = createSlice({
  name: "category",
  initialState: {
    activeCategoryId: null,
  },
  reducers: {
    setActiveCategoryId: (state, action) => {
      state.activeCategoryId = action.payload;
    },
  },
});

export const { setActiveCategoryId } = categorySlice.actions;

export default categorySlice.reducer;
