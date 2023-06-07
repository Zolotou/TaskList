import React from "react";
import { Button, Checkbox, Space } from "antd";
import type { CheckboxChangeEvent } from "antd/es/checkbox";
import useBreakpoint from "antd/es/grid/hooks/useBreakpoint";
import { taskCheckBoxStyle, taskItemStyle } from "../stylesheets/styles";

interface TaskItemProps {
  onChecked: (event: CheckboxChangeEvent) => void;
  value: string;
  onDelete: () => void;
  checkedValue: boolean;
}

export const TaskItem: React.FC<TaskItemProps> = ({
  onChecked,
  value,
  checkedValue,
  onDelete,
}) => {
  const { xs } = useBreakpoint();
  const taskItem = taskItemStyle();
  const taskCheckBox = taskCheckBoxStyle(xs);
  const onChange = (event: CheckboxChangeEvent) => {
    onChecked(event);
  };

  return (
    <>
      <Space style={taskItem} wrap>
        <Checkbox
          style={taskCheckBox}
          checked={checkedValue}
          onChange={onChange}
        >
          {value}
        </Checkbox>
        <Button onClick={onDelete} danger>
          Delete
        </Button>
      </Space>
    </>
  );
};
