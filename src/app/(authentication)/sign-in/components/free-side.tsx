import { Image } from "antd";
import React from "react";

export default function SiginInFreeSide(){
    return (
        <Image alt="free-side" src="/assets/images/sign-in-free-side.jpg" className="w-100 h-100" preview={false}
        style={{
            borderTopLeftRadius: "10px",
            borderBottomLeftRadius: "10px"
        }}/>
    )
}