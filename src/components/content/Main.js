import React from "react";
import {Breadcrumb, Layout} from "antd";
import {Content} from "antd/es/layout/layout";

const Main = ()=> {
    return (
            <div>
                <Layout>
                <Content style={{ margin: '0 16px' }}>
                    <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item>User</Breadcrumb.Item>
                        <Breadcrumb.Item>Bill</Breadcrumb.Item>
                    </Breadcrumb>
                    <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                        Bill is a cat.
                    </div>
                </Content>
                </Layout>
            </div>
        )

}
export default Main