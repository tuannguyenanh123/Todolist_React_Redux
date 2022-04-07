import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./../slice/todoSlice";
import modalReducer from "./../slice/modalSlice";

const store = configureStore({
  reducer: {
    todo: todoReducer,
    modal: modalReducer,
  },
});
export default store;
