import React from "react";
import Sidebar from "../sidebar/Sidebar";
import Top from "../header/Top";
import Layout, {Content, Footer} from "antd/es/layout/layout";
import Main from "../content/Main";
import Header from "../header/Top";
import Sider from "antd/es/layout/Sider";
import {BrowserRouter,Route} from 'react-router-dom';
import MainTow from "../content/MainTow";


const LayoutComponents = () => {

    return (

        <Layout>
            <Header><Top/></Header>
            <Layout>
                <Sider><Sidebar/></Sider>
                <BrowserRouter>
                    <Route path={"/MainTow"} component={MainTow}/>
                    <Route exact path={"/"} component={Main}/>
                </BrowserRouter>
                {/*<Content> <Main/></Content>*/}
            </Layout>

        </Layout>

    )
}

export default LayoutComponents;