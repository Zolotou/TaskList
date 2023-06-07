import React from "react";
import TaskListStore from '../stores/taskListStore';

export type taskListStoreComponent = React.FC<{taskListStore?:TaskListStore, children?:React.ReactNode}>