"use client";
import React from "react";
import ProjectDetailCard from "./ProjectDetailCard";

type ProjectTaskProps = {
    id: string
}
export default function ProjectTask(props: ProjectTaskProps){
    return (
        <ProjectDetailCard>
            <div style={{
                width: "100%",
                textAlign: "center",
                fontSize: "1.2rem",
                fontWeight: "600"
            }}>Thứ hai</div>
            <div style={{
                width: "100%",
                textAlign: "center"
            }}>Ngày 9 tháng 8 năm 2025</div>
        </ProjectDetailCard>
    )
}