import React, { useEffect } from "react";
import moment from "moment";
import { Form, Input, DatePicker, Button } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { Routes, Route, Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

import { AddNewToDo } from "../slice/todoSlice";
import { STATUS_CONTENT } from "./../Config/Constants";

const FormInput = () => {
  const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 6 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 16 },
    },
  };
  const [form] = Form.useForm();
  const onReset = () => {};
  const todo = useSelector((state) => state.todo);
  const dispatch = useDispatch();
  return (
    <div className="form" style={{ width: "100%" }}>
      <Form
        {...formItemLayout}
        autoComplete="off"
        onFinish={(values) =>
          dispatch(
            AddNewToDo({
              id: uuidv4(),
              ...values,
              status: STATUS_CONTENT.NEW,
              created_at: values.created_at._d.toLocaleString(),
            })
          )
        }
        onFinishFailed={(errors) => console.log({ errors })}
      >
        <Form.Item
          name="title"
          label="Title"
          rules={[
            {
              required: true,
              message: "Please input your title!",
            },
            {
              whitespace: true,
            },
            {
              min: 3,
            },
          ]}
          hasFeedback
        >
          <Input placeholder="Type a title" />
        </Form.Item>
        <Form.Item
          name="creator"
          label="Creator"
          rules={[
            {
              required: true,
              message: "Please input your creator!",
            },
            {
              whitespace: true,
            },
            {
              min: 3,
            },
          ]}
          hasFeedback
        >
          <Input placeholder="Name of creator" />
        </Form.Item>
        <Form.Item
          name="created_at"
          label="Created at"
          rules={[
            {
              required: true,
              message: "Please provide your date!",
            },
          ]}
          hasFeedback
        >
          <DatePicker
            placeholder={moment().format("DD-MM-YYYY hh:mm:ss")}
            style={{ width: "100%" }}
          />
        </Form.Item>
        <Form.Item
          name="description"
          label="Description"
          rules={[
            {
              required: true,
              message: "Please input your description!",
            },
            {
              whitespace: true,
            },
            {
              min: 6,
            },
          ]}
          hasFeedback
        >
          <Input placeholder="Description Details" />
        </Form.Item>
        <Form.Item
          wrapperCol={{ span: 20 }}
          style={{
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          <Button type="primary" htmlType="submit" block>
            {/* <Link to="/new">Save</Link> */}
            Save
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
export default FormInput;
