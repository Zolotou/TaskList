import React from "react";
import { Button, Form, Input } from "antd";
import useBreakpoint from "antd/es/grid/hooks/useBreakpoint";
import { taskAddingFormStyle } from "../stylesheets/styles";

interface TaskAddingProps {
  createTask: (value: string) => void;
}

export const TaskAddingForm: React.FC<TaskAddingProps> = ({ createTask }) => {
  const [form] = Form.useForm();
  const { xs } = useBreakpoint();
  const taskAddingForm = taskAddingFormStyle(xs);
  const onFinish = (values: { newTask: string }) => {
    const { newTask } = values;
    createTask(newTask);
    form.resetFields();
  };
  return (
    <Form
      form={form}
      name="adding"
      style={taskAddingForm}
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
