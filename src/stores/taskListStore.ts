import {makeAutoObservable} from "mobx";
import { v4 as uuid } from "uuid";

interface Task {
    id: string;
    value: string;
    isChecked: boolean;
}

class TaskListStore {
    tasksArray: Task[] = [{id: 'hey', value: 'value2', isChecked: true}];

    constructor() {
        makeAutoObservable(this);
    }

    createNewTask(value:string) {
        console.log(value)
        this.tasksArray = [ ...this.tasksArray, {id: uuid(), value, isChecked: false} ];
        console.log(this.tasksArray)
    }

    deleteTask(id:string) {
        this.tasksArray = this.tasksArray.filter((task) => task.id !== id);
    }

    updateTask(id:string) {
        this.tasksArray = this.tasksArray.map((task) => { if(task.id === id) {
            task.isChecked = !task.isChecked
        } return task})
    }
}

export default new TaskListStore();