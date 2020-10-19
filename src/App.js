import React, {Suspense} from 'react';
import './App.css';
import Layout from "./hoc/Layout/Layout";
import Forms from "./containers/Forms/Forms";
import {Redirect, Route, Switch} from "react-router";
import Preview from "./containers/preview/Preview";

function App() {

    let routes = (
        <Switch>
            <Suspense fallback={<div>Loading ....</div>}>
                <Route path="/identity/create" exact component={Forms}/>
                <Route path="/identity/preview" exact component={Preview}/>
                <Redirect to="/identity/create"/>
            </Suspense>
        </Switch>
    );

    return (
        <div className="App">
            <Layout>
                {routes}
            </Layout>
        </div>
    );
}

export default App;
