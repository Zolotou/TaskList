import TaskListStore from "./taskListStore";

export type RootStore = { taskListStore: TaskListStore}

export const rootStore:RootStore = {
    taskListStore: new TaskListStore()
}
