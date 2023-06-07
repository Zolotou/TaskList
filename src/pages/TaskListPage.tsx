import React from "react";
import { TaskAddingForm } from "../components/TaskAddingForm";
import { TaskList } from "../components/TaskList";
import { inject, observer } from "mobx-react";
import { TaskListFilterForm } from "../components/TaskListFilterForm";
import { Space } from "antd";
import { taskListStoreComponent } from "../models/taskListStoreComponent.model";
import { Statistics } from "../components/Statistics";
import useBreakpoint from "antd/es/grid/hooks/useBreakpoint";
import { taskListPageStyle } from "../stylesheets/styles";

const TaskListPage: taskListStoreComponent = ({ taskListStore }) => {
  const { xs } = useBreakpoint();
  const taskListPage = taskListPageStyle(xs);
  return (
    <Space style={taskListPage}>
      <TaskListFilterForm
        filters={taskListStore!.filters}
        updateFilters={taskListStore!.updateFilters}
      />
      <Statistics {...taskListStore!.taskStatistics} />
      <TaskList
        listItems={taskListStore!.currentTaskArray || []}
        checkTask={taskListStore!.updateTask}
        deleteTask={taskListStore!.deleteTask}
      />
      <TaskAddingForm createTask={taskListStore!.createNewTask} />
    </Space>
  );
};

export default inject("taskListStore")(observer(TaskListPage));
