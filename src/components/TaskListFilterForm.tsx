import React, {ChangeEvent} from "react";
import { Form, Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import type { RadioChangeEvent } from "antd";
import { Radio } from "antd";
import { Filters } from "../models/filters";
import useBreakpoint from "antd/es/grid/hooks/useBreakpoint";
import {radioGroupStyle, taskFilterFormStyle} from "../stylesheets/styles";

interface TaskListFilterFormProps {
  updateFilters: (filters: Filters) => void;
  filters: Filters;
}
let debounceTimeout: NodeJS.Timeout;

export const TaskListFilterForm: React.FC<TaskListFilterFormProps> = ({
  updateFilters,
  filters,
}) => {
  const { xs } = useBreakpoint();
  const taskListFilterForm = taskFilterFormStyle(xs);
  const radioGroup = radioGroupStyle();

  const onStatusChange = (e: RadioChangeEvent) => {
    updateFilters({ taskStatus: e.target.value, taskValue: filters.taskValue });
  };

  const onValueChange = (e:ChangeEvent<HTMLInputElement>) => {
    clearTimeout(debounceTimeout)
    // Adding debounce so value will be updated only when user stops writing after 1 second
    debounceTimeout = setTimeout(() => {
      const inputValue = e.target.value
      updateFilters({taskValue: inputValue, taskStatus: filters.taskStatus})
    }, 1000)
  }

  return (
    <Form
      name="filter"
      style={taskListFilterForm}
      initialValues={{ remember: true }}
      autoComplete="off"
    >
      <Form.Item label="filterTask" name="filterTask">
        <Input
          addonBefore={<SearchOutlined />}
          onChange={onValueChange}
          value={filters.taskValue}
          placeholder="filter tasks"
        />
      </Form.Item>
      <Form.Item>
        <Radio.Group onChange={onStatusChange} style={radioGroup} value={filters.taskStatus}>
          <Radio.Button value={"All"}>All</Radio.Button>
          <Radio.Button value={"Completed"}>Fulfilled</Radio.Button>
          <Radio.Button value={"InProgress"}>In Progress</Radio.Button>
        </Radio.Group>
      </Form.Item>
    </Form>
  );
};
