import React, {createRef, useCallback, useEffect, useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import MaterialLink from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {Redirect} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {LoginHandler} from 'store/actions/Login';
import LoginEmail from "./components/LoginEmail";
import LoginPassword from "./components/LoginPassword";
import LoginProgress from "./components/LoginProgress";
import LoginButton from "./components/LoginButton";
import SignUpLink from "./components/SignUpLink";

const Copyright = () => {
    return (
        <Typography variant='body2' color='textSecondary' align='center'>
            {'Copyright © '}
            <MaterialLink color='inherit' href='https://github.com/UbaidurRehman1/identity'>
                Identity
            </MaterialLink>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%',
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

const Login = () => {
    const classes = useStyles();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();
    const loginHandler = useCallback((username, password) => dispatch(LoginHandler(username, password)), [dispatch]);

    const isLoginStart = useSelector(state => state.login.loginStart);
    const isLogin = useSelector(state => state.login.isLogin);

    const spinnerRef = createRef();
    const loginButtonRef = createRef();

    const showSpinnerAndHideLoginButton = useCallback(() => {
        if (spinnerRef.current) {spinnerRef.current.style.display = 'inline-block';}
        if (loginButtonRef.current) {loginButtonRef.current.style.display = 'none';}
    }, [spinnerRef, loginButtonRef]);

    const hideSpinnerAndShowLoginButton = useCallback(() => {
        if (spinnerRef.current) {spinnerRef.current.style.display = 'none';}
        if (loginButtonRef.current) {loginButtonRef.current.style.display = 'inline-flex';}
    }, [spinnerRef, loginButtonRef])

    useEffect(() => {
        isLoginStart ? showSpinnerAndHideLoginButton() : hideSpinnerAndShowLoginButton();
    }, [hideSpinnerAndShowLoginButton, isLoginStart, showSpinnerAndHideLoginButton])

    const login = (event) => {
        event.preventDefault();
        loginHandler(username, password);
    }

    if (isLogin) {
        return <Redirect to='/identity/welcome'/>
    }

    return (
        <Container component='main' maxWidth='xs'>
            <CssBaseline/>
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon/>
                </Avatar>
                <Typography component='h1' variant='h5'>
                    Log in
                </Typography>
                <form className={classes.form} onSubmit={(event) => login(event)}>
                    <LoginEmail value={username} setUserName={setUsername}/>
                    <LoginPassword value={password} setPassword={setPassword}/>
                    <LoginProgress ref={spinnerRef}/>
                    <LoginButton ref={loginButtonRef} className={classes.submit}/>
                    <SignUpLink />
                </form>
            </div>
            <Box mt={8}>
                <Copyright/>
            </Box>
        </Container>
    );
}
export default Login;
