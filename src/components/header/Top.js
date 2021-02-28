import { Layout} from "antd";
import React from "react";
import {Header} from "antd/es/layout/layout";


const Top = ()=> {
    return (
        <div>
            <Layout className="site-layout">
                <Header className="site-layout-background" style={{ padding: 0 }} />

                {/*<Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>*/}
            </Layout>
        </div>
    )
}

export default Top