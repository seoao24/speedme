'use client';
import React, { ReactNode } from "react";

type ProjectDetailCardProps = {
    children: ReactNode
}
export default function ProjectDetailCard(props: ProjectDetailCardProps) {
    return (
        <div style={{
            border: "1px solid #A0A8BD",
            padding: "0 10px",
        }}>
            {props.children}
        </div>
    )
}