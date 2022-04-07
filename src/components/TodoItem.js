import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import "../App.css";
import { useDispatch, useSelector } from "react-redux";
import { isViewPagination } from "../slice/todoSlice";

function TodoItem({
  id,
  title,
  creator,
  status,
  created_at,
  description,
  changeStatus,
  clearItemTodo,
  saveContent,
  todoItem,
  handleTrans,
}) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <div
      className="todoItem"
      onClick={() => {
        navigate(id ? `/formEdit/${id}` : `/`);
        handleTrans();
        dispatch(isViewPagination(false));
      }}
    >
      <div className="todoItem__header">
        <div className="todoItem__header--title">
          title: <span>{title}</span>
        </div>
        <div className="todoItem__header--creator">
          creator: <span>{creator}</span>
        </div>
        <div className="todoItem__header--status">
          status: <span>{status}</span>
        </div>
      </div>
      <span className="todoItem__border"></span>
      <div className="todoItem__container">
        <span>description:</span>
        <span>{description}</span>
      </div>
      {/* {!isShowInput ? (
        <div className="todoItem__button">
          <button onClick={() => setIsShowInput(!isShowInput)}>Edit</button>
          {valueFirst.status === STATUS_CONTENT.NEW ? (
            <DoneIcon className="todoItem__button--done" />
          ) : null}
          <button onClick={changeStatus}>{valueFirst.status}</button>
          <CloseIcon
            className="todoItem__button--black"
            onClick={clearItemTodo}
          />
        </div>
      ) : (
        <button onClick={() => handleSaveTodo()}>Save</button>
      )} */}
    </div>
  );
}

TodoItem.propTypes = {
  // content: PropTypes.string.isRequired,
  // status: PropTypes.string.isRequired,
  changeStatus: PropTypes.func,
  clearItemTodo: PropTypes.func,
};
export default TodoItem;
