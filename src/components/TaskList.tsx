import React from "react";
import { TaskItem } from "./TaskItem";
import { Task } from "../models/task.model";
import { List } from "antd";
import useBreakpoint from "antd/es/grid/hooks/useBreakpoint";
import { taskListStyle } from "../stylesheets/styles";

interface TaskListProps {
  listItems: Task[];
  deleteTask: (id: string) => void;
  checkTask: (id: string) => void;
}

export const TaskList: React.FC<TaskListProps> = ({
  listItems,
  deleteTask,
  checkTask,
}) => {
  const { xs } = useBreakpoint();
  const list = taskListStyle(xs);
  return (
    <>
      {listItems?.length > 0 ? (
        <List
          header={<h3>TASK LIST</h3>}
          bordered
          dataSource={listItems}
          style={list}
          renderItem={(item: Task) => (
            <List.Item>
              <TaskItem
                checkedValue={item.isChecked}
                onChecked={() => checkTask(item.id)}
                onDelete={() => deleteTask(item.id)}
                value={item.value}
              />
            </List.Item>
          )}
        />
      ) : (
        <h2>List is Clear</h2>
      )}
    </>
  );
};
