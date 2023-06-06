import React from 'react';
import {Form, Input} from "antd";
import { SearchOutlined } from '@ant-design/icons';
import type { RadioChangeEvent } from 'antd';
import { Radio } from 'antd';

const onFinish = (values: any) => {
    console.log('Success:', values);
};

export const TaskListFilterForm: React.FC<{  }> = ()=> {
    const onChange = (e: RadioChangeEvent) => {
        console.log('radio checked', e.target.value);
    };
    return (
        <Form
            name="filter"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            style={{ maxWidth: 600, padding: '20px', display: 'flex', gap: '10px' }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            autoComplete="off"
        >
            <Form.Item
                label="filterTask"
                name="filterTask"
                rules={[{required: true, message: 'Please input the new task'}]}
            >
                <Input addonBefore={<SearchOutlined />} placeholder="large size" />
            </Form.Item>
            <Form.Item>
                <Radio.Group onChange={onChange} value={'13'}>
                    <Radio value={1}>All</Radio>
                    <Radio value={2}>Fulfilled</Radio>
                    <Radio value={3}>In Progress</Radio>
                </Radio.Group>
            </Form.Item>
        </Form>
    );
};