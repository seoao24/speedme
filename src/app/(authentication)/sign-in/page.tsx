'use client';
import { Card, Col, Divider, Flex, Row } from "antd";
import React, { useEffect, useState } from "react";
import SiginInFreeSide from "./components/free-side";
import SiginInForm from "./components/form";
import OAuth from "./components/OAuth";

export default function SiginInScreen() {
    const [mounted, setMounted] = useState(false);
    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;
    return (
        <Flex justify="center" align="center" style={{ height: "100vh", backgroundColor: "#E7F2F5" }}>
            <Card styles={{
                body: {
                    padding: 0,
                }
            }}
                style={{
                    maxWidth: 1200,
                    borderRadius: 10,
                    overflow: "hidden",
                    width: "100%",
                    maxHeight: 400,
                    margin: "0 10px"
                }}
                >
                <Row>
                    <Col span={12}>
                        <SiginInFreeSide />
                    </Col>
                    <Col span={12}>
                        <Flex justify="center" align="center">
                            <div style={{
                                maxWidth: 400,
                                width: "100%",
                                height: "100%",
                                padding: "50px 0"
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