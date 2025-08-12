"use client";
import React, { ReactNode } from "react";

type ProjectScreenProps = {
    children: ReactNode
}
export default function ProjectScreenLayout(props: ProjectScreenProps) {
    return (
        <div style={{
            width: "100vw",
            height: "100vh",
            padding: "0 10px"
        }}>
            <div style={{
                height: "100%"
            }}>{props.children}</div>
        </div>
    )
}