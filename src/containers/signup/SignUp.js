import React, {createRef, useCallback, useEffect, useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {Redirect} from 'react-router-dom';
import _ from 'lodash';
import {useDispatch, useSelector} from 'react-redux';
import {SignUpHandler} from 'store/actions/SignUpHandler';
import {validateEmail, validateFieldLength, validatePassword, validateWholeForm} from 'shared/util/Utils';
import SubmitButton from 'components/inputs/SubmitButton';
import FormSpinner from 'components/inputs/FormSpinner';
import CopyRight from 'components/copyright/CopyRight';
import FormLink from 'components/links/FormLink';

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

    const spinnerRef = createRef();
    const submitRef = createRef();

    const dispatch = useDispatch();
    const handleSignup = useCallback((userData) => dispatch(SignUpHandler(userData)), [dispatch]);

    const isLogin = useSelector(state => state.auth.isLogin);
    const isSignUpLoading = useSelector(state => state.auth.isSignUpLoading);

    const SIGNUP_FORM = {
        firstName: {
            disabled: false,
            value: '',
            type: 'text',
            autoComplete: 'fname',
            name: 'firstName',
            variant: 'outlined',
            fullWidth: true,
            id: 'firstName',
            key: 'firstName',
            autoFocus: true,
            required: true,
            error: false,
            helperText: '',
            onChange: (event) => onChangeHandler('firstName', event),
            validation: {
                minLength: 3,
                maxLength: 255,
                isTouched: false,
                isValid: false
            },
            label: 'First Name'
        },
        lastName: {
            disabled: false,
            value: '',
            type: 'text',
            variant: 'outlined',
            required: true,
            fullWidth: true,
            id: 'lastName',
            ket: 'lastName',
            name: 'lastName',
            autoComplete: 'lname',
            error: false,
            helperText: '',
            onChange: (event) => onChangeHandler('lastName', event),
            validation: {
                required: true,
                minLength: 3,
                maxLength: 255,
                isTouched: false,
                isValid: false
            },
            label: 'Last Name'
        },
        email: {
            disabled: false,
            value: '',
            type: 'email',
            variant: 'outlined',
            required: true,
            fullWidth: true,
            id: 'email',
            key: 'email',
            name: 'email',
            autoComplete: 'email',
            error: false,
            helperText: '',
            onChange: (event) => onChangeHandler('email', event),
            validation: {
                minLength: 6,
                maxLength: 255,
                isTouched: false,
                isValid: false
            },
            label: 'Email Address'
        },
        password: {
            disabled: false,
            value: '',
            type: 'password',
            variant: 'outlined',
            required: true,
            fullWidth: true,
            name: 'password',
            id: 'password',
            key: 'password',
            autoComplete: 'current-password',
            error: false,
            helperText: '',
            onChange: (event) => onChangeHandler('password', event),
            validation: {
                minLength: 8,
                maxLength: 16,
                isTouched: false,
                isValid: false
            },
            label: 'Password'
        }
    }

    const [form, setForm] = useState(SIGNUP_FORM);
    const [isSignUpButtonEnable, setSignUpButtonEnable] = useState(false);

    useEffect(() => {
        if (isSignUpLoading) {
            if (spinnerRef.current) spinnerRef.current.style.display = 'inline-block';
            if (submitRef.current) submitRef.current.style.display = 'none';
        } else {
            if (spinnerRef.current) spinnerRef.current.style.display = 'none';
            if (submitRef.current) submitRef.current.style.display = 'inline-flex';
        }
    }, [isSignUpLoading, spinnerRef, submitRef]);

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
        setSignUpButtonEnable(validateWholeForm(newForm));
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
                    Sign up
                </Typography>
                <form className={classes.form} onSubmit={(event) => signUpHandler(event)}>
                    <Grid container spacing={2}>
                        {
                            Object.keys(form).map(key => {
                                const field = form[key];
                                if (field === form.firstName || field === form.lastName) {
                                    return (<Grid item xs={12} sm={6} key={key}><TextField {...field}/></Grid>);
                                } else {
                                    return (<Grid item xs={12} key={key}><TextField{...field}/></Grid>);
                                }
                            })
                        }
                    </Grid>
                    <FormSpinner ref={spinnerRef}/>
                    <SubmitButton id={'signUp'} ref={submitRef} className={classes.submit} isDisable={!isSignUpButtonEnable}
                                  label='Sign Up'/>
                    <FormLink to={'/identity/login'} label={'Already have an account? Sign in'}/>
                </form>
            </div>
            <CopyRight/>
        </Container>
    );
}

export default SignUp;
