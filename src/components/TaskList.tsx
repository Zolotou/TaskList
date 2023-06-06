import React from "react";
import { TaskItem } from "./TaskItem";

interface ListItem {
  value: string;
  id: string;
  isChecked: boolean;
}

interface TaskListProps {
  listItems: ListItem[];
  deleteTask: (id: string) => void;
  checkTask: (id: string) => void;
}

// TODO: items and renderItems
export const TaskList: React.FC<TaskListProps> = ({
  listItems,
  deleteTask,
  checkTask,
}) => {
  return (
      <>
        <h3>TASK LIST</h3>
        <ul>
          {listItems?.length > 0 ? (
              listItems.map((listItem: ListItem) => (
                  <TaskItem
                      key={listItem.id}
                      onChecked={() => checkTask(listItem.id)}
                      onDelete={() => deleteTask(listItem.id)}
                      value={listItem.value}
                      checkedValue={listItem.isChecked}
                  />
              ))
          ) : (
              <li>List is Clear</li>
          )}
        </ul>
      </>
  );
};
