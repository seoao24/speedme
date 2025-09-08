import { Col, Form, Row } from "antd";
import TextArea from "antd/es/input/TextArea";
import React from "react";

export default function ProjectDetail() {
    return (
        <Form>
            <Row style={{
                width: "100vw",
            }}>
                <Col xs={24} sm={16} >
                    <TextArea
                        placeholder="Tên công việc"
                    />
                </Col>
                <Col xs={24} sm={8}>

                </Col>
            </Row>
        </Form>
    )
}