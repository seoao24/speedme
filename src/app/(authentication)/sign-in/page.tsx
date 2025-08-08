'use client';
import { Card, Col, Divider, Flex, Row } from "antd";
import React from "react";
import SiginInFreeSide from "./components/free-side";
import SiginInForm from "./components/form";
import OAuth from "./components/OAuth";

export default function SiginInScreen() {
    return (
        <Flex justify="center" align="center" style={{height: "100vh", backgroundColor: "#E7F2F5"}}>
            <Card bodyStyle={{ padding: 0 }} bordered={false} style={{
                maxWidth: "1300px",
                borderRadius: "10px"
            }}>
                <Row gutter={0}>
                    <Col span={12}>
                        <SiginInFreeSide />
                    </Col>
                    <Col span={12}>
                        <Flex justify="center" align="center">
                            <div style={{
                                maxWidth: 400,
                                width: "100%"
                            }}>
                                <SiginInForm />
                                <Divider>Hoặc</Divider>
                                <OAuth />
                            </div>
                        </Flex>
                    </Col>
                </Row>
            </Card>
        </Flex>
    )
}