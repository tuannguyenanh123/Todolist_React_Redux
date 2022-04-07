import React, { useState } from "react";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { STATUS_CONTENT } from "../Config/Constants";
import { addNewTodo, fetchTodos, handleSearch } from "./../slice/todoSlice";
import { toggleModal } from "../slice/modalSlice";

function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [headerValue, setheaderValue] = useState("");
  const handleSearchItem = (e) => {
    dispatch(handleSearch(headerValue));
    // setheaderValue("");
    console.log(headerValue);
    e.preventDefault();
  };
  const handleAddNewTodo = (e) => {
    console.log("handleAddNewTodo");
    console.log(headerValue);
    if (headerValue.title !== "") {
      dispatch();
      // addNewTodo({
      //   content: headerValue.title,
      //   status: headerValue.status,
      // });
    }
    setheaderValue({
      title: "",
      status: STATUS_CONTENT.NEW,
    });
    e.preventDefault();
  };
  // const handleOnChange = (e) => {
  //   setheaderValue({
  //     ...headerValue,
  //     [e.target.name]: e.target.value,
  //   });
  // };
  return (
    <div className="header">
      <span className="header__btn">
        <Button
          size="large"
          onClick={() => {
            navigate(`/formInput`);
          }}
        >
          Create New Task
        </Button>
      </span>
      <form className="header__content">
        <input
          type="text"
          placeholder="Type something to search"
          className="header__content_input"
          name="title"
          value={headerValue.title}
          onChange={(e) => setheaderValue(e.target.value)}
        />
        <button
          className="header__content_btn"
          onClick={(e) => handleSearchItem(e)}
        >
          Search
        </button>
      </form>
    </div>
  );
}

export default Header;
