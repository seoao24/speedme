"use client";
import { Calendar } from "antd";
import React from "react";

const months = [
  "Tháng một", "Tháng hai", "Tháng ba", "Tháng tư",
  "Tháng năm", "Tháng sáu", "Tháng bảy", "Tháng tám",
  "Tháng chín", "Tháng mười", "Tháng mười một", "Tháng mười hai"
];
export default function ProjectCalendar() {
    return (
        <Calendar
            fullscreen={false}
            headerRender={() => {
                const date = new Date();
                return (
                    <div style={{
                        fontWeight: "700",
                        width: "100%",
                        textAlign: "center",
                        fontSize: "1.5rem"
                    }}>{months[date.getMonth()]}</div>
                )
            }}
        />
    )
}