import React from "react";
import AppNavBar from "../../containers/appBar/AppNavBar";

const Layout = props => {
    return (
        <React.Fragment>
            <AppNavBar>

            </AppNavBar>
            <main>
                {props.children}
            </main>
        </React.Fragment>
    );
}

export default Layout;
