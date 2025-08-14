'use client';
import React, { useEffect, useRef, useState } from "react";
import ProjectScreenLayout from "./project-layout";
import ProjectTitle from "./components/ProjectTitle";
import { Col, Flex, Row } from "antd";
import ProjectQuote from "./components/ProjectQuote";
import ProjectInformation from "./components/ProjectInformation";
import ProjectTask from "./components/ProjectTask";

export default function ProjectScreen() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [visibleCount, setVisibleCount] = useState(7); //items.length)

    useEffect(() => {
        if (!containerRef.current) return;

    const updateVisibleCount = () => {
      const containerWidth = containerRef.current?.offsetWidth || 0;
      const count = Math.floor(containerWidth / 200); // 200px là min width
      setVisibleCount(count);
    };

    updateVisibleCount();

    const observer = new ResizeObserver(updateVisibleCount);
    observer.observe(containerRef.current);

    return () => {
      observer.disconnect();
    };
    }, []);

    return (
        <ProjectScreenLayout>
            <ProjectTitle>Weekly Planner</ProjectTitle>
            <hr style={{ margin: "3px 0", color: "#ECF0F6" }} />
            <ProjectQuote>
                <div>Hello kitty</div>
            </ProjectQuote>
            <hr style={{ margin: "3px 0", color: "#ECF0F6" }} />
            <Flex justify="space-between" style={{ width: "100%" }}>
                <ProjectInformation />
                <div ref={containerRef} >
                    <Row style={{
                        paddingLeft: "10px",
                        flexWrap: "nowrap",
                        overflow: "hidden"
                    }}
                    >
                        {Array.from({ length: visibleCount }).map((_, index) => (
                            <Col key={index}>
                                <div style={{ 
                                    width: "100%",
                                    minWidth: "227px" }}>
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
