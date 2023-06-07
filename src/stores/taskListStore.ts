import {makeAutoObservable} from "mobx";
import {v4 as uuid} from "uuid";
import {Task} from "../models/task.model";
import {Filters} from "../models/filters";

class TaskListStore {
  tasksArray: Task[] = [{ id: "hey", value: "value2", isChecked: true }];
  filters: Filters = {
    taskStatus: "All",
    taskValue: "",
  };

  constructor() {
    makeAutoObservable(this);
  }

  get currentTaskArray() {
    const { taskValue, taskStatus } = this.filters;
    return this.tasksArray.filter((task) => {
      if (taskValue && !task.value.includes(taskValue)) {
        return false;
      }
      return (
          taskStatus === "All" ||
          (task.isChecked && taskStatus === "Completed") ||
          (!task.isChecked && taskStatus === "InProgress")
      );
    });
  }

  get taskStatistics() {
    const completedTasksCount = this.tasksArray.filter(task => task.isChecked).length
    return {
      all: this.tasksArray.length,
      completed: completedTasksCount,
      inProgress: this.tasksArray.length - completedTasksCount,
    };
  }

  createNewTask = (value: string): void => {
    this.tasksArray = [
      ...this.tasksArray,
      { id: uuid(), value, isChecked: false },
    ];
  };

  deleteTask = (id: string): void => {
    this.tasksArray = this.tasksArray.filter((task) => task.id !== id);
  };

  updateTask = (id: string): void => {
    this.tasksArray = this.tasksArray.map((task) => {
      if (task.id === id) {
        task.isChecked = !task.isChecked;
      }
      return task;
    });
  };

  updateFilters = (filters: Filters): void => {
    this.filters = filters;
  };
}

export default TaskListStore;
