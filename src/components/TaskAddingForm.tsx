import React from "react";
import { Button, Form, Input } from "antd";

interface TaskAddingProps {
  createTask: (value: any) => any;
}

export const TaskAddingForm: React.FC<TaskAddingProps> = ({ createTask }) => {
  const [form] = Form.useForm();
  const onFinish = (values: { newTask: string }) => {
    const { newTask } = values;
    createTask(newTask);
    form.resetFields();
  };
  return (
    <Form
      form={form}
      name="adding"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{ maxWidth: 600, display: "flex", gap: "10px" }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      autoComplete="off"
    >
      <Form.Item
        label="newTask"
        name="newTask"
        rules={[{ required: true, message: "Please input the new task" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};
