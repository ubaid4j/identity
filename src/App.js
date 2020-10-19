import React, {Suspense, useContext} from 'react';
import './App.css';
import Layout from "./hoc/Layout/Layout";
import Forms from "./containers/Forms/Forms";
import {Redirect, Route, Switch} from "react-router";
import Preview from "./containers/preview/Preview";
import UserProvider, {UserContext} from "./providers/UserProvider";
import GuardedRoute from "./hoc/gaurdedRoute/GaurdedRoute";
import Home from "./components/home/Home";
import Login from "./components/login/Login";
import SignUp from "./components/signup/SignUp";

function App() {

    const user = useContext(UserContext);

    let routes = (
        <Switch>
            <Suspense fallback={<div>Loading ....</div>}>
                <GuardedRoute path="/identity/create" exact component={Forms} auth={user}/>
                <GuardedRoute path="/identity/preview" exact component={Preview} auth={user}/>
                <Route path="/identity/signup" exact component={SignUp}/>
                <Route path="/identity/login" exact component={Login}/>
                <Route path="/identity" exact component={Home}/>
                {/*<Redirect to="/identity"/>*/}
            </Suspense>
        </Switch>
    );

    return (
        <div className="App">
            <Layout>
                <UserProvider>
                    {routes}
                </UserProvider>
            </Layout>
        </div>
    );
}

export default App;
