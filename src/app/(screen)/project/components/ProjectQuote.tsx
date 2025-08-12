'use client';
import React, { ReactNode } from "react";

type ProjectQuoteProps = {
    children: ReactNode
}
export default function ProjectQuote(props: ProjectQuoteProps){
    return (
        <div style={{
            width: "100%",
            backgroundColor: "#B5A7D6",
            padding: "10px 20px"
        }}>
            <div
            style={{
                width: "100%",
                height: "100%",
                textAlign: "center",
                lineHeight: "50px",
                color: "white",
                borderRadius: "10px",
                border: "1px dashed white",
                fontSize: "1.5rem"
            }}>
                {props.children}
            </div>
        </div>
    )
}