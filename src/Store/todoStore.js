import { makeAutoObservable } from "mobx";
import { STATUS_CONTENT } from "./../Config/Constants";

// Model the application state.
class Todo {
  constructor() {
    // observable state
    makeAutoObservable(this); // giúp biến luu trong store (secondspassed) đc theo dõi khi thay đổi thì render lại ui
  }
  todoArray = [
    {
      id: 1,
      content: "App",
      status: STATUS_CONTENT.NEW,
    },
    {
      id: 2,
      content: "Custom UI",
      status: STATUS_CONTENT.DONE,
    },
    {
      id: 3,
      content: "App",
      status: STATUS_CONTENT.DOING,
    },
  ];

  clearItemTodo = (indexStatus) => {
    const arrTodo = this.todoArray;
    // splice (index,soluongcancat, doituongcanchen)
    arrTodo.splice(indexStatus, 1);
    // setlistTodo([...arrTodo]);
  };
  AddNewToDo = (value) => {
    const arrTodo = this.todoArray;
    if (value.content !== "") {
      // setlistTodo([
      //   ...arrTodo,
      //   // {
      //   //   content: value.content,
      //   //   status: value.status
      //   // },
      // ]);

      arrTodo.unshift({
        content: value.content,
        status: value.status,
      });
    }
    // return;
  };
  changeStatus = (indexStatus) => {
    console.log(">>> check status" + indexStatus);
    const arrTodo = this.todoArray;
    // splice (index,soluongcancat, doituongcanchen)
    arrTodo.splice(indexStatus, 1, {
      content: this.todoArray[indexStatus].content,
      status:
        this.todoArray[indexStatus].status === STATUS_CONTENT.NEW
          ? STATUS_CONTENT.DOING
          : STATUS_CONTENT.DONE,
    });
    // setlistTodo([...arrTodo]);
  };
  saveContent = (indexItem, content) => {
    const arrTodo = this.todoArray;
    // splice (index,soluongcancat, doituongcanchen)
    if (content !== "") {
      arrTodo.splice(indexItem, 1, {
        content: content,
        status: arrTodo[indexItem].status,
      });
    }
  };
}

const todoStore = new Todo();
export default todoStore;
