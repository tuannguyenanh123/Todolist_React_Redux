import React, { useEffect, useState, useRef } from "react";
import { v4 as uuidv4 } from "uuid";
import moment from "moment";
import { Skeleton } from "antd";
import {
  Form,
  Input,
  DatePicker,
  Button,
  Radio,
  Popconfirm,
  message,
} from "antd";
import { useDispatch, useSelector } from "react-redux";
import { Routes, Route, Link } from "react-router-dom";

import { saveContent, clearItemTodo } from "../slice/todoSlice";
import { STATUS_CONTENT } from "./../Config/Constants";

const FormEdit = () => {
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
  // skeleton
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    const timing = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => {
      clearTimeout(timing);
    };
  }, []);

  const todo = useSelector((state) => state.todo);
  const data = todo.valueTemp;
  console.log(data);
  const dispatch = useDispatch();
  const [value, setValue] = React.useState(STATUS_CONTENT.NEW);
  const onChange = (e) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };
  const [form] = Form.useForm();
  const onReset = () => {
    form.resetFields();
  };
  const onFinish = (values) => {
    console.log(values);

    dispatch(
      saveContent({
        ...values,
        id: data.id,
        status: values.status ? values.status : data.status,
        // created_at: values.created_at._d.toLocaleString(),
      })
    );
  };

  const onFinishFailed = (errors) => {
    console.log({ errors });
  };

  function confirm(e) {
    console.log(e);
    message.success("Bạn vừa xóa thành công một task");
  }

  function cancel(e) {
    console.log(e);
    // message.error("Click on No");
  }
  return (
    <div className="form" style={{ width: "100%" }}>
      {loading && <Skeleton active paragraph={{ rows: 4 }} />}
      {!loading && (
        <Form
          {...formItemLayout}
          autoComplete="off"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          form={form}
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
            <Input placeholder={data?.title} />
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
            <Input placeholder={data?.creator} />
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
              placeholder={moment().format(data?.created_at)}
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
            <Input placeholder={data?.description} />
          </Form.Item>
          <Form.Item
            name="status"
            label=""
            style={{ justifyContent: "center" }}
          >
            <Radio.Group
              onChange={onChange}
              // value={value}
              defaultValue={data?.status}
            >
              <Radio value={STATUS_CONTENT.NEW}>{STATUS_CONTENT.NEW}</Radio>
              <Radio value={STATUS_CONTENT.DOING}>{STATUS_CONTENT.DOING}</Radio>
              <Radio value={STATUS_CONTENT.DONE}>{STATUS_CONTENT.DONE}</Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item
            wrapperCol={{ span: 20 }}
            style={{
              display: "flex",
              justifyContent: "space-around",
            }}
          >
            <div className="grBtn">
              <Button
                type="primary"
                htmlType="submit"
                style={{ marginRight: 8 }}
              >
                Save
                {/* <Link to="/">Save</Link> */}
              </Button>
              <Button
                type="primary"
                htmlType="submit"
                style={{ marginRight: 8 }}
                onClick={onReset}
              >
                Reset
              </Button>
              <Popconfirm
                title="Are you sure to delete this task?"
                onConfirm={confirm}
                onCancel={cancel}
                okText="Yes"
                cancelText="No"
              >
                <Button
                  type="primary"
                  htmlType="submit"
                  onClick={() => dispatch(clearItemTodo({ index: data?.id }))}
                >
                  Delete
                </Button>
              </Popconfirm>
              ,
            </div>
          </Form.Item>
        </Form>
      )}
    </div>
  );
};
export default React.memo(FormEdit);
