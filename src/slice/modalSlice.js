import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  isShowModal: false,
  content: "",
  style: {},
};
// export const fetchIssues = createAsyncThunk() => {};
const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    toggleModal(state, action) {
      console.log({ state, action });
      state.isShowModal = !state.isShowModal;
      state.content = action.payload.content;
      state.style = action.payload.style;
    },
  },
});
export const { toggleModal } = modalSlice.actions;
export default modalSlice.reducer;

// slice ket hop action va reducer
