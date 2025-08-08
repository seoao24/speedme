'use client';
import { Button, Flex, Image } from "antd";
import React from "react";

export default function OAuth() {
    return (
        <Flex justify="center">
            <Button type="primary" style={{ backgroundColor: "#E7F2F5", margin: "0 5px" }}>
                <Image alt="google" src="/assets/images/logo-google.png" preview={false} width={20} height={20}></Image>
            </Button>
            <Button type="primary" style={{ backgroundColor: "#E7F2F5", margin: "0 5px" }}>
                <Image alt="google" src="/assets/images/logo-facebook.png" preview={false} width={20} height={20}></Image>
            </Button>
            <Button type="primary" style={{ backgroundColor: "#E7F2F5", margin: "0 5px" }}>
                <Image alt="google" src="/assets/images/logo-github.png" preview={false} width={20} height={20}></Image>
            </Button>
        </Flex>
    )
}