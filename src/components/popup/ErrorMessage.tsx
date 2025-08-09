'use client';
import React from "react";
import { message } from "antd";
import { useEffect } from "react";
import useErrorStore from "@/store/errorStore";

export default function ErrorMessage(){
    const { error, clearError } = useErrorStore();
    useEffect(() => {
    if (error) {
      message.error(error);
      clearError();
    }
  }, [error, clearError]);
    return (
        <></>
    )
}