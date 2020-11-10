import React, {Suspense} from 'react';
import 'App.css';
import Layout from 'hoc/Layout/Layout';
import Forms from 'containers/Forms/Forms';
import {Redirect, Route, Switch} from 'react-router';
import Preview from 'containers/preview/Preview';
import UserProvider from 'providers/UserProvider';
import GuardedRoute from 'hoc/gaurdedRoute/GaurdedRoute';
import Home from 'components/home/Home';
import Login from 'containers/login/Login';
import SignUp from 'containers/signup/SignUp';
import Welcome from 'components/welcome/Welcome';
import Logout from 'containers/logout/Logout';
import Congrats from 'components/congrats/Congrats';
import EditForm from 'hoc/editForm/EditForm';

const App = () => {

    let routes = (
        <Switch>
            <Suspense fallback={<div>Loading ....</div>}>
                <GuardedRoute path='/identity/create' exact component={Forms} />
                <GuardedRoute path='/identity/edit' exact component={EditForm} />
                <GuardedRoute path='/identity/preview' exact component={Preview} />
                <GuardedRoute path='/identity/welcome' exact component={Welcome} />
                <GuardedRoute path={'/logout'} exact component={Logout} />
                <GuardedRoute path='/identity/congrats' component={Congrats}/>
                <Route path='/identity/signup' exact component={SignUp}/>
                <Route path='/identity/login' exact component={Login}/>
                <Route path='/identity' exact component={Home}/>
                <Route render={() => <Redirect to='/identity' />}/>
            </Suspense>
        </Switch>
    );

    return (
        <div className='App'>
            <Layout>
                <UserProvider>
                    {routes}
                </UserProvider>
            </Layout>
        </div>
    );
}

export default App;
