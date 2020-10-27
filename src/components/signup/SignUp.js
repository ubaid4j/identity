import React, {useCallback, useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import MaterialLink from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';
import {makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {Link, Redirect} from "react-router-dom";
import _ from 'lodash';
import {useDispatch, useSelector} from "react-redux";
import {signup} from "../../store/actions/SignUp";


const Copyright = () => {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <MaterialLink color="inherit" href="https://github.com/UbaidurRehman1/identity">
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
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

const SignUp = () => {
    const classes = useStyles();

    const dispatch = useDispatch();
    const handleSignup = useCallback((userData) => dispatch(signup(userData)), [dispatch]);

    const isLogin = useSelector(state => state.auth.isLogin);
    const isSignUpLoading = useSelector(state => state.auth.isSignUpLoading);


    const SIGNUP_FORM = {
        firstName: {
            disabled: false,
            value: "",
            type: "text",
            autoComplete: "fname",
            name: "firstName",
            variant: "outlined",
            fullWidth: true,
            id: "firstName",
            key: "firstName",
            autoFocus: true,
            required: true,
            error: false,
            helperText: "",
            onChange: (event) => onChangeHandler('firstName', event),
            validation: {
                minLength: 3,
                maxLength: 255,
                isTouched: false,
                isValid: false
            },
            label: "First Name"
        },
        lastName: {
            disabled: false,
            value: "",
            type: "text",
            variant: "outlined",
            required: true,
            fullWidth: true,
            id: "lastName",
            ket: "lastName",
            name: "lastName",
            autoComplete: "lname",
            error: false,
            helperText: "",
            onChange: (event) => onChangeHandler('lastName', event),
            validation: {
                required: true,
                minLength: 3,
                maxLength: 255,
                isTouched: false,
                isValid: false
            },
            label: "Last Name"
        },
        email: {
            disabled: false,
            value: "",
            type: "email",
            variant: "outlined",
            required: true,
            fullWidth: true,
            id: "email",
            key: "email",
            name: "email",
            autoComplete: "email",
            error: false,
            helperText: "",
            onChange: (event) => onChangeHandler('email', event),
            validation: {
                minLength: 6,
                maxLength: 255,
                isTouched: false,
                isValid: false
            },
            label: "Email Address"
        },
        password: {
            disabled: false,
            value: "",
            type: "password",
            variant: "outlined",
            required: true,
            fullWidth: true,
            name: "password",
            id: "password",
            key: "password",
            autoComplete: "current-password",
            error: false,
            helperText: "",
            onChange: (event) => onChangeHandler('password', event),
            validation: {
                minLength: 8,
                maxLength: 16,
                isTouched: false,
                isValid: false
            },
            label: "Password"
        }
    }

    const [form, setForm] = useState(SIGNUP_FORM);

    const onChangeHandler = (fieldId, event) => {
        const newForm = _.clone(form);
        newForm[fieldId].validation.isTouched = true;
        newForm[fieldId].value = event.target.value;
        if (fieldId === form.firstName.id || fieldId === form.lastName.id) {
            validateFieldLength(newForm[fieldId])
        } else if (fieldId === form.email.id) {
            validateEmail(newForm[fieldId]);
        } else if (fieldId === form.password.id) {
            validatePassword(newForm[fieldId]);
        }
        setForm(newForm);
    }

    const validateFieldLength = field => {
        if (field.validation.isTouched) {
            if (field.value.length < field.validation.minLength || field.value.length > field.validation.maxLength) {
                field.validation.isValid = false;
                field.error = true;
                field.helperText = 'Min Val: ' + field.validation.minLength + ', Max Val: ' + field.validation.maxLength;
            } else {
                field.error = false;
                field.helperText = '';
            }
        }
    }

    const validateEmail = emailField => {
        const email = emailField.value;
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const isValid = re.test(String(email).toLowerCase());
        if (!isValid) {
            emailField.validation.isValid = false;
            emailField.error = true;
            emailField.helperText = 'Invalid Email Address';
        } else {
            emailField.error = false;
            emailField.helperText = '';
        }

    }

    const validatePassword = passwordField => {
        const pw = passwordField.value;
        const isValid = /[A-Z]/.test(pw) &&
            /[a-z]/.test(pw) &&
            /[0-9]/.test(pw) &&
            /[^A-Za-z0-9]/.test(pw) &&
            pw.length > 4;
        if (!isValid) {
            passwordField.validation.isValid = false;
            passwordField.error = true;
            passwordField.helperText = 'Password should at least contain an upper case letter, a lower case letter, a digit and a special symbol and greater than 4 digits';

        } else {
            passwordField.error = false;
            passwordField.helperText = '';
        }

    }

    const signUpHandler = (event) => {
        event.preventDefault();
        const newFormData = _.clone(form);
        const formData = {};
        Object.keys(newFormData).map(key => {
            formData[key] = newFormData[key].value;
            return null;
        });
        handleSignup(formData);
    }

    if (isLogin) {
        return <Redirect to="/identity/welcome"/>
    }

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline/>
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon/>
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign up
                </Typography>
                <form className={classes.form} noValidate onSubmit={(event) => signUpHandler(event)}>
                    <Grid container spacing={2}>
                        {
                            Object.keys(form).map(key => {
                                const field = form[key];
                                if (field === form.firstName || field === form.lastName) {
                                    return (
                                        <Grid item xs={12} sm={6} key={key}>
                                            <TextField
                                                {...field}
                                            />
                                        </Grid>
                                    );
                                } else {
                                    return (
                                        <Grid item xs={12} key={key}>
                                            <TextField
                                                {...field}
                                            />
                                        </Grid>
                                    );
                                }
                            })
                        }
                    </Grid>
                    {
                        isSignUpLoading ? <CircularProgress style={{marginTop: '8px'}}/> :
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                className={classes.submit}
                            >
                                Sign Up
                            </Button>
                    }
                    <Grid container justify="flex-end">
                        <Grid item>
                            <Link to="/identity/login" style={{textDecoration: 'none', outline: "none"}}>
                                <Button size="small" color="primary">
                                    Already have an account? Sign in
                                </Button>
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </div>
            <Box mt={5}>
                <Copyright/>
            </Box>
        </Container>
    );
}

export default SignUp;
