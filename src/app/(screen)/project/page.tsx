'use client';
import React, { ReactNode } from "react";
import ProjectScreenLayout from "./project-layout";
import ProjectTitle from "./components/ProjectTitle";
import { Divider, Flex } from "antd";
import ProjectQuote from "./components/ProjectQuote";
import ProjectInformation from "./components/ProjectInformation";
import ProjectTask from "./components/ProjectTask";

export default function ProjectScreen(){
    return (
        <ProjectScreenLayout>
            <ProjectTitle>Weekly Planner</ProjectTitle>
            <hr style={{
                margin: "3px 0",
                color: "#ECF0F6"
            }}/>
            <ProjectQuote>Hello kitty</ProjectQuote>
            <hr style={{
                margin: "3px 0",
                color: "#ECF0F6"
            }}/>
            <Flex justify="space-between" style={{
                width: "100%"
            }}>
                <ProjectInformation/>
                <div>
                    <ProjectTask id="1" />
                </div>
            </Flex>
        </ProjectScreenLayout>
    )
}