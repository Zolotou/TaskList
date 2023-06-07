import React from "react";
import { TaskItem } from "./TaskItem";
import {Task} from "../models/task.model";
import {List} from "antd";

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
    return (
        <>
            {listItems?.length > 0 ? <List
                header={<h3>TASK LIST</h3>}
                bordered
                dataSource={listItems}
                renderItem={(item:Task) => (
                    <List.Item>
                        <TaskItem
                         checkedValue={item.isChecked} onChecked={()=> checkTask(item.id)} onDelete={() => deleteTask(item.id)} value={item.value}/>
                    </List.Item>
                )}
            /> : <h2>List is Clear</h2>}
        </>
    );
};
