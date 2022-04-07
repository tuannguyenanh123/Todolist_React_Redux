import { Layout, Menu } from "antd";
import {
  FileDoneOutlined,
  FileOutlined,
  FileTextOutlined,
  ProfileOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "antd/dist/antd.css";
import { Pagination } from "antd";

import TodoItem from "../components/TodoItem";
import AllView from "../View/AllView";
import New from "../View/New";
import Doing from "../View/Doing";
import Done from "../View/Done";
import { STATUS_CONTENT } from "../Config/Constants";
import FormInput from "../components/FormInput";
import FormEdit from "../components/FormEdit";
import {
  clearItemTodo,
  changeStatus,
  saveContent,
  fetchTodos,
  handleTransToFormEdit,
} from "../slice/todoSlice";
import Footer from "./Footer";

const { Header, Sider, Content } = Layout;

function Body() {
  const todo = useSelector((state) => state.todo);
  const dispatch = useDispatch();

  console.log("Body ~ todo", todo);
  const [keySearchCurrent, setKeySearchCurrent] = useState(todo.keySearch);
  console.log(">>>>" + keySearchCurrent);
  const renderTodo = (status = null) => {
    return todo.listTodo
      .filter((item) => {
        if (status === keySearchCurrent) {
          return item.status === keySearchCurrent;
        } else if (status) {
          return item.status === status;
        }
        return true;
      })
      .map((todoItem, index) => {
        return (
          <TodoItem
            key={index}
            {...todoItem}
            handleTrans={() => {
              dispatch(handleTransToFormEdit({ ...todoItem, index }));
            }}
            clearItemTodo={() => dispatch(clearItemTodo({ indexItem: index }))}
          />
        );
      });
  };
  const navigate = useNavigate();

  return (
    <div className="body">
      <Layout style={{ height: "100%" }}>
        <Sider
          breakpoint="lg"
          collapsedWidth="0"
          onBreakpoint={(broken) => {
            // console.log(broken);
          }}
          onCollapse={(collapsed, type) => {
            // console.log(collapsed, type);
          }}
        >
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
            <Menu.Item
              key="1"
              icon={<ProfileOutlined />}
              onClick={() => {
                navigate(`/`);
              }}
            >
              All
            </Menu.Item>

            <Menu.Item
              key="2"
              icon={<FileTextOutlined />}
              onClick={() => {
                navigate(`/new`);
              }}
            >
              New
            </Menu.Item>
            <Menu.Item
              key="3"
              icon={<FileOutlined />}
              onClick={() => {
                navigate(`/doing`);
              }}
            >
              Doing
            </Menu.Item>
            <Menu.Item
              key="4"
              icon={<FileDoneOutlined />}
              onClick={() => {
                navigate(`/done`);
              }}
            >
              Done
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Content style={{ overflow: "hidden" }}>
            <div className="content">
              <div
                className="site-layout-background"
                style={{
                  padding: 24,
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "center",
                }}
              >
                <Routes>
                  <Route path="/" element={<AllView>{renderTodo()}</AllView>} />
                  <Route
                    path="new"
                    element={<New>{renderTodo(STATUS_CONTENT.NEW)}</New>}
                  />
                  <Route
                    path="doing"
                    element={<Doing>{renderTodo(STATUS_CONTENT.DOING)}</Doing>}
                  />
                  <Route
                    path="done"
                    element={<Done>{renderTodo(STATUS_CONTENT.DONE)}</Done>}
                  ></Route>
                  <Route path="formInput" element={<FormInput />}></Route>
                  <Route path="formEdit/:id" element={<FormEdit />}></Route>
                </Routes>
              </div>
            </div>
          </Content>
          {todo.isView ? <Pagination defaultCurrent={1} total={50} /> : null}
        </Layout>
      </Layout>
    </div>
  );
}
// Body.propTypes = {
//   todoArray: PropTypes.arrayOf(
//     PropTypes.shape({
//       content: PropTypes.string.isRequired,
//       status: PropTypes.string.isRequired,
//     })
//   ),
//   changeStatus: PropTypes.func,
//   clearItemTodo: PropTypes.func,
// };

export default React.memo(Body);
