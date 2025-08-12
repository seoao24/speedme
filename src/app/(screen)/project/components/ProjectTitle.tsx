'use client';
import React, { ReactNode } from "react";

type ProjectTitleProps = {
    children: ReactNode
}
export default function ProjectTitle(props: ProjectTitleProps) {
    return (
        <div
            style={{
                border: "1px solid #B5A7D6",
                height: "50px",
                width: "100%",
                textAlign: "center",
                lineHeight: "50px",
                fontSize: "2rem",
                fontWeight: "600",
                color: "#9E517C"
            }}
        >
            {props.children}
        </div>
    )
}