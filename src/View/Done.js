import React from "react";
import { Routes, Router, Link, Outlet } from "react-router-dom";

export default function Done({ children }) {
  return (
    <>
      {children}
      <Outlet />
    </>
  );
}
