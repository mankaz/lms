import React from 'react';
import ReactDom from 'react-dom';
import App from "./App";
import {ConfigProvider} from "antd";

ReactDom.render(
    <ConfigProvider direction="rtl">
        <React.StrictMode>
            <App/>
        </React.StrictMode>
    </ConfigProvider>

    ,document.querySelector('#root'))