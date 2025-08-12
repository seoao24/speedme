'use client';
import React from "react";
import ProjectDetailCard from "./ProjectDetailCard";
import ProjectCalendar from "./ProjectCalendar";
import ProjectInformationTaskList, { PITaskItem } from "./ProjectInformationTaskList";

const tasks : PITaskItem[] = [
    {
        id: "1",
        title: "Thứ hai"
    },
    {
        id: "2",
        title: "Thứ ba"
    },
    {
        id: "3",
        title: "Thứ tư"
    },
    {
        id: "4",
        title: "Thứ năm"
    },
    {
        id: "5",
        title: "Thứ sáu"
    },
    {
        id: "6",
        title: "Thứ bảy"
    },
    {
        id: "7",
        title: "Chủ nhật"
    }
]
export default function ProjectInformation() {
    return (
        <ProjectDetailCard>
            <div style={{
                maxWidth: "250px"
            }}>
                <div style={{
                    fontWeight: "600"
                }}>Project week start</div>
                <ProjectCalendar/>
            </div>
            <ProjectInformationTaskList selectedTaskIds={[]} tasks={tasks}/>
        </ProjectDetailCard>
    )
}