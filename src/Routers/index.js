import React from "react"
import { Outlet } from "react-router-dom";
import Layout from '../Layout/index'


const MainRouters = ({ children }) => {

    return (
        <React.Fragment>
            <Layout>
                {children}
                <Outlet />
            </Layout>
        </React.Fragment>
    );
}

export default MainRouters
