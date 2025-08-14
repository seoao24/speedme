'use client';
import React, { useEffect, useRef, useState } from "react";
import ProjectScreenLayout from "./project-layout";
import ProjectTitle from "./components/ProjectTitle";
import { Col, Flex, Row } from "antd";
import ProjectQuote from "./components/ProjectQuote";
import ProjectInformation from "./components/ProjectInformation";
import ProjectTask from "./components/ProjectTask";

export default function ProjectScreen() {
    const rowRef = useRef(null);
    const [totalDisplayItem, setTotalDisplayItem] = useState(1);
    const [projectItemWidth, setProjectItemWidth] = useState(200);

    useEffect(() => {
        if (!rowRef.current) return;

        const observer = new ResizeObserver((entries) => {
            for (let entry of entries) {
                const containerWidth = entry.contentRect.width;
                const minItemWidth = 200;

                // Số item vừa container, không cần chia width
                const itemsFit = Math.floor(containerWidth / minItemWidth) || 1;

                // Chỉ update nếu khác state cũ
                setTotalDisplayItem(prev => (prev !== itemsFit ? itemsFit : prev));
            }
        });

        observer.observe(rowRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <ProjectScreenLayout>
            <ProjectTitle>Weekly Planner</ProjectTitle>
            <hr style={{ margin: "3px 0", color: "#ECF0F6" }} />
            <ProjectQuote>
                <div>Hello kitty</div>
                <div>Width: {projectItemWidth}</div>
                <div>Total: {totalDisplayItem}</div>
            </ProjectQuote>
            <hr style={{ margin: "3px 0", color: "#ECF0F6" }} />
            <Flex justify="space-between" style={{ width: "100%" }}>
                <ProjectInformation />
                <div ref={rowRef} >
                    <Row style={{
                        paddingLeft: "10px",
                        flexWrap: "nowrap",
                        overflow: "hidden"
                    }}
                    >
                        {Array.from({ length: totalDisplayItem }).map((_, index) => (
                            <Col key={index}>
                                <div style={{ width: projectItemWidth }}>
                                    <ProjectTask id="1" />
                                </div>
                            </Col>
                        ))}
                    </Row>
                </div>
            </Flex>
        </ProjectScreenLayout>
    );
}
