'use client';
import React from "react";
import { Button, Divider, Flex, Form, Input, Typography } from "antd";
import { LockOutlined, MailOutlined, SyncOutlined } from "@ant-design/icons";

const { Title, Text } = Typography;

type SignInModel = {
    email: string;
    password: string;
    remember: boolean;
};

export default function SignInForm() {
    return (
        <>
            <Flex justify="center">
                <Title>Xin chào!</Title>
            </Flex>
            <Flex justify="center">
                <Text>Đăng nhập bằng Email</Text>
            </Flex>

            <Flex justify="center">
                <Form
                    name="signin"
                    initialValues={{ remember: true }}
                    style={{
                        width: "100%"
                    }}
                    autoComplete="off"
                >
                    <Form.Item<SignInModel>
                        name="email"
                        rules={[{ required: true, message: "Vui lòng nhập email!" }]}
                    >
                        <Input placeholder="Nhập email" type="email" prefix={<MailOutlined />} />
                    </Form.Item>
                    <Form.Item<SignInModel>
                        name="password"
                        rules={[{ required: true, message: "Vui lòng nhập email!" }]}
                    >
                        <Input.Password placeholder="Nhập email" type="password" prefix={<LockOutlined />} />
                    </Form.Item>
                    <Flex justify="center">
                        {/* loading={{ icon: <SyncOutlined spin /> }} */}
                        <Button type="primary" style={{width: "100%"}}>
                            Đăng nhập
                        </Button>
                    </Flex>
                </Form>
            </Flex>
        </>
    );
}
