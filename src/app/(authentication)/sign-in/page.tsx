import { Card, Col, Row } from "antd";
import React from "react";
import SiginInFreeSide from "./components/free-side";
import SiginInForm from "./components/form";
import OAuth from "./components/OAuth";

export default function SiginInScreen() {
    return (
        <>
            <Card>
                <Row>
                    <Col span={12}>
                        <SiginInFreeSide />
                    </Col>
                    <Col span={12}>
                        <SiginInForm />
                        <OAuth/>
                    </Col>
                </Row>
            </Card>
        </>
    )
}