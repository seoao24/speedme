"use client";
import React from "react";
import ProjectDetailCard from "./ProjectDetailCard";
import { Button, Flex } from "antd";

type ProjectTaskProps = {
    id: string
}
export default function ProjectTask(props: ProjectTaskProps) {
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
                textAlign: "center",
                fontSize: "0.6rem"
            }}>Ngày 9 tháng 8 năm 2025</div>
            <Flex justify="center">
                <Button color="pink" variant="filled" style={{
                    width: "100%"
                }}>
                    Mở rộng
                </Button>
            </Flex>
        </ProjectDetailCard>
    )
}