"use client";
import { Checkbox, CheckboxProps } from "antd";
import React from "react";
type ProjectInformationTaskListProps = {
    selectedTaskIds: string[]
    tasks: PITaskItem[]
}
export type PITaskItem = {
    id: string,
    title: string
}
export default function ProjectInformationTaskList(props: ProjectInformationTaskListProps) {
    const onChange: CheckboxProps['onChange'] = (e) => {
        if(e.target.checked && !props.selectedTaskIds.includes(e.target.value)){
            props.selectedTaskIds.push(e.target.value);
        }
        else {
            props.selectedTaskIds = props.selectedTaskIds.filter(id => id != e.target.value);
        }
    };
    return (
        <div>
            <div>Danh sách nhiệm vụ {props.tasks.length}</div>
            {
                props.tasks.map(e => (
                    <div key={e.id}>
                        <Checkbox onChange={onChange} value={e.id}>{e.title}</Checkbox>
                    </div>
                ))
            }
        </div>
    )
}