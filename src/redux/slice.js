import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isMoreOpen: false,
};

export const serviceSlice = createSlice({
  name: "service",
  initialState,
  reducers: {
    openModal(state) {
      state.isMoreOpen = true;
    },
    closeModal(state) {
      state.isMoreOpen = false;
    },
  },
});

export const { openModal, closeModal } = serviceSlice.actions;

export default serviceSlice.reducer;
