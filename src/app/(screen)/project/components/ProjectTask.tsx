"use client";
import React from "react";
import ProjectDetailCard from "./ProjectDetailCard";
import { Button, Checkbox, Flex, Form, Input } from "antd";
import styled from "styled-components";
import TextArea from "antd/es/input/TextArea";

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
                fontSize: "0.6rem",
                margin: "5px 0"
            }}>Ngày 9 tháng 8 năm 2025</div>
            <Flex justify="center">
                <Button color="pink" variant="filled" style={{
                    width: "100%"
                }}>
                    Mở rộng
                </Button>
            </Flex>
            <Flex justify="space-between" style={{
                backgroundColor: "#fff0f6",
                margin: "5px 0",
                border: "1px solid #FEB0D8"
            }}>
                <ProjectSummary title="Xong" value={10} />
                <ProjectSummary title="Chưa" value={10} />
                <ProjectSummary title="Tổng" value={20} />
            </Flex>
            <div style={{
                textAlign: "center",
                fontWeight: 600,
                margin: "10px 0"
            }}>Công việc</div>
            <Form>
                <LinedPaper>
                    <Flex justify="space-between"
                    align="start"
                    style={{
                        width: "100%"
                    }}>
                        <Checkbox />
                        <TextArea variant="borderless" style={{
                            overflow: "hidden",
                            width: "100%"
                        }}
                        autoSize={{ minRows: 1, maxRows: 5 }} />
                    </Flex>
                </LinedPaper>
            </Form>
        </ProjectDetailCard>
    )
}

type ProjectSummaryProps = {
    title: string,
    value: number
}
const ProjectSummary = (props: ProjectSummaryProps) => {
    return (
        <div style={{
            width: "100%"
        }}>
            <div style={{
                fontWeight: 500,
                textAlign: "center"
            }}>{props.title}</div>
            <div style={{
                textAlign: "center",
                fontSize: "0.8rem"
            }}>{props.value}</div>
        </div>
    )
}

const LinedPaper = styled.div`
  background-image: repeating-linear-gradient(
    to bottom,
    white 0px,
    white 23px,
    #ccc 24px
  );
  background-size: 100% 24px;
  padding: 25px 0;
  font-family: Arial, sans-serif;
  line-height: 24px;
`;