import React from 'react';
import {Button, Checkbox, Space} from "antd";
import type { CheckboxChangeEvent } from 'antd/es/checkbox';

interface TaskItemProps {
    onChecked: (event: CheckboxChangeEvent) => void;
    value: string;
    onDelete: () => void;
    checkedValue: boolean;
}

export const TaskItem: React.FC<TaskItemProps> = ({ onChecked, value, checkedValue , onDelete}) => {
    const onChange= (event: CheckboxChangeEvent) => {
        console.log('checkEvent')
        onChecked(event);
    };

    return (
        <li>
            <Space wrap>
                <Checkbox checked={ checkedValue } onChange={onChange}>{ value }</Checkbox>
                <Button onClick={onDelete} danger>Delete</Button>
            </Space>
        </li>
    );
};