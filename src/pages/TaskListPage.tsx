import React from "react";
import { TaskAddingForm } from "../components/TaskAddingForm";
import { TaskList } from "../components/TaskList";
import { inject, observer } from "mobx-react";
import { TaskListFilterForm } from "../components/TaskListFilterForm";
import { Space } from "antd";
import taskListStore from "../stores/taskListStore";

const TaskListPage: React.FC<{ taskListStore?: typeof taskListStore }> = ({
  taskListStore,
}) => {
  const createTask = (value: any) => taskListStore?.createNewTask(value);
  const deleteTask = (id: string) => taskListStore?.deleteTask(id);
  const checkTask = (id: string) => taskListStore?.updateTask(id);

  return (
    <Space style={{ height: '100%', display: "flex", flexDirection: "column", padding: '20px' }}>
      <TaskListFilterForm />
      <TaskList
        listItems={taskListStore?.tasksArray || []}
        checkTask={checkTask}
        deleteTask={deleteTask}
      />
      <TaskAddingForm createTask={createTask} />
    </Space>
  );
};

export default inject("taskListStore")(observer(TaskListPage));
