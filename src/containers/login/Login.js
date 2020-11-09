import React, {createRef, useCallback, useEffect, useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {Redirect} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {LoginHandler} from 'store/actions/LoginHandler';
import LoginEmail from 'components/login/LoginEmail';
import LoginPassword from 'components/login/LoginPassword';
import FormSpinner from 'components/inputs/FormSpinner';
import SubmitButton from 'components/inputs/SubmitButton';
import FormLink from 'components/links/FormLink';
import CopyRight from 'components/copyright/CopyRight';

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
        if (spinnerRef.current) {
            spinnerRef.current.style.display = 'inline-block';
        }
        if (loginButtonRef.current) {
            loginButtonRef.current.style.display = 'none';
        }
    }, [spinnerRef, loginButtonRef]);

    const hideSpinnerAndShowLoginButton = useCallback(() => {
        if (spinnerRef.current) {
            spinnerRef.current.style.display = 'none';
        }
        if (loginButtonRef.current) {
            loginButtonRef.current.style.display = 'inline-flex';
        }
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
                    <FormSpinner ref={spinnerRef}/>
                    <SubmitButton id={'login'} ref={loginButtonRef} isDisable={false} className={classes.submit} label={'Log In'}/>
                    <FormLink id={'toSignUp'} label={'Don\'t have an account? Sign Up'} to={'/identity/signup'}/>
                </form>
            </div>
            <CopyRight/>
        </Container>
    );
}
export default Login;
