import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleModal } from "../slice/modalSlice";
const Modal = () => {
  const dispatch = useDispatch();
  const modal = useSelector((state) => state.modal);
  useEffect(() => {
    console.log(modal);
  });
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        background: "rgba(0,0,0,0.3)",
        position: "fixed",
        top: "0",
        left: "0",
        zIndex: 100,
        display: modal.isShowModal ? "flex" : "none",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "300px",
          height: "300px",
          background: "white",
        }}
      >
        <div
          style={{
            width: "100%",
            height: "60%",
          }}
        >
          <p>{modal.content}</p>
        </div>
        <div
          style={{
            width: "100%",
            height: "40%",
          }}
        >
          <button
            onClick={() => {
              dispatch(toggleModal({ content: "" }));
            }}
          >
            Tắt
          </button>
          <button>
            <p style={modal.style}>ok</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
