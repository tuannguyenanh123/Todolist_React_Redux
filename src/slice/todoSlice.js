import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

import { STATUS_CONTENT } from "./../Config/Constants";

const initialState = {
  listTodo: [
    {
      id: 1,
      title: "Task 1",
      creator: "Tuan",
      created_at: "23:20:32, 8/3/2022",
      status: STATUS_CONTENT.DOING,
      description: "sang",
    },
    {
      id: 2,
      title: "Task 2",
      creator: "Tuan nguyen",
      created_at: "23:20:32, 8/3/2022",
      status: STATUS_CONTENT.NEW,
      description: "trua",
    },
    {
      id: 3,
      title: "Task 3",
      creator: "Tuan anh",
      created_at: "23:20:32, 8/3/2022",

      status: STATUS_CONTENT.DONE,
      description: "chieu",
    },
    {
      id: 3,
      title: "Task 3",
      creator: "Tuan anh",
      created_at: "23:20:32, 8/3/2022",

      status: STATUS_CONTENT.DONE,
      description: "chieu",
    },
    {
      id: 3,
      title: "Task 3",
      creator: "Tuan anh",
      created_at: "23:20:32, 8/3/2022",

      status: STATUS_CONTENT.DONE,
      description: "chieu",
    },
    {
      id: 3,
      title: "Task 3",
      creator: "Tuan anh",
      created_at: "23:20:32, 8/3/2022",

      status: STATUS_CONTENT.DONE,
      description: "chieu",
    },
    {
      id: 3,
      title: "Task 3",
      creator: "Tuan anh",
      created_at: "23:20:32, 8/3/2022",

      status: STATUS_CONTENT.DONE,
      description: "chieu",
    },
    {
      id: 3,
      title: "Task 3",
      creator: "Tuan anh",
      created_at: "23:20:32, 8/3/2022",

      status: STATUS_CONTENT.DONE,
      description: "chieu",
    },
    {
      id: 3,
      title: "Task 3",
      creator: "Tuan anh",
      created_at: "23:20:32, 8/3/2022",

      status: STATUS_CONTENT.DONE,
      description: "chieu",
    },
    {
      id: 3,
      title: "Task 3",
      creator: "Tuan anh",
      created_at: "23:20:32, 8/3/2022",

      status: STATUS_CONTENT.DONE,
      description: "chieu",
    },
    {
      id: 3,
      title: "Task 3",
      creator: "Tuan anh",
      created_at: "23:20:32, 8/3/2022",

      status: STATUS_CONTENT.DONE,
      description: "chieu",
    },
    {
      id: 3,
      title: "Task 3",
      creator: "Tuan anh",
      created_at: "23:20:32, 8/3/2022",

      status: STATUS_CONTENT.DONE,
      description: "chieu",
    },
  ],
  valueTemp: null,
  keySearch: "",
  isView: true,
};

// export const fetchTodos = createAsyncThunk("todo/fetchTodos", async () => {
//   // fetch data
//   console.log("Fetch issues");
//   const res = await axios
//     .get("http://localhost:3001/todos")
//     .then((result) => {
//       return result.data;
//     })
//     .catch((error) => {
//       console.log(error);
//     });
//   return res;
// });
// export const addNewTodo = createAsyncThunk(
//   "todo/addNewTodo",
//   async (payload, store) => {
//     // fetch data
//     const res = await axios
//       // create item
//       .post("http://localhost:3001/todos", payload)
//       .then((result) => {
//         // trả về item vào post
//         store.dispatch(fetchTodos());
//         return result.data;
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//     return res;
//   }
// );

// export const clearItemTodo = createAsyncThunk(
//   "todo/clearItemTodo",
//   async (payload, store) => {
//     // fetch data
//     const res = await axios
//       // create item
//       .delete(`http://localhost:3001/todos/${payload.id}`)
//       .then((result) => {
//         // trả về item vào post
//         store.dispatch(fetchTodos());
//         return result.data;
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//     return res;
//   }
// );
// export const changeStatus = createAsyncThunk(
//   "todo/changeStatus",
//   async (payload, store) => {
//     // fetch data
//     const res = await axios
//       // create item
//       .patch(`http://localhost:3001/todos/${payload.id}`, {
//         status: payload.status,
//       })
//       .then((result) => {
//         // trả về item vào post
//         store.dispatch(fetchTodos());
//         return result.data;
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//     return res;
//   }
// );
// export const saveContent = createAsyncThunk(
//   "todo/saveContent",
//   async (payload, store) => {
//     // fetch data
//     console.log({ payload, store });
//     const res = await axios
//       // create item
//       .patch(`http://localhost:3001/todos/${payload.id}`, {
//         content: payload.content,
//       })
//       .then((result) => {
//         // trả về item vào post
//         store.dispatch(fetchTodos());
//         return result.data;
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//     return res;
//   }
// );

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    AddNewToDo(state, action) {
      console.log("addNewTodo state", state);
      console.log("addNewTodo action", action.payload);
      state.listTodo = [...state.listTodo, action.payload];
    },
    clearItemTodo(state, action) {
      console.log("clearItemTodo action", action);
      const arr = state.listTodo;
      arr.splice(state.valueTemp.index, 1);
      state.listTodo = [...arr];
    },
    saveContent(state, action) {
      console.log("saveContent action", action.payload);
      console.log(state.valueTemp.index);
      const arr = state.listTodo;
      if (action.payload.title !== "") {
        // splice (index,soluongcancat, doituongcanchen)
        arr.splice(state.valueTemp.index, 1, {
          ...action.payload,
        });
      }
    },
    changeStatus(state, action) {
      console.log(action);
      const arrTodo = state.listTodo;
      arrTodo.splice(action.payload.indexItem, 1, {
        content: state.listTodo[action.payload.indexItem].content,
        status:
          state.listTodo[action.payload.indexItem].status === STATUS_CONTENT.NEW
            ? STATUS_CONTENT.DOING
            : STATUS_CONTENT.DONE,
      });
      state.listTodo = [...arrTodo];
    },
    handleTransToFormEdit(state, action) {
      state.valueTemp = action.payload;
      console.log({ state });
    },
    handleSearch(state, action) {
      state.keySearch = action.payload;
      console.log(state.keySearch);
    },
    isViewPagination(state, action) {
      state.isView = action.payload;
    },
  },
});
export const {
  AddNewToDo,
  clearItemTodo,
  saveContent,
  changeStatus,
  handleTransToFormEdit,
  handleSearch,
  isViewPagination,
} = todoSlice.actions;
export default todoSlice.reducer;

// slice ket hop action va reducer
