import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import React from 'react';

const LoginEmail = ({username, setUserName}) => {
    return (
        <TextField
            variant='outlined'
            margin='normal'
            required
            fullWidth
            id='email'
            label='Email Address'
            name='email'
            autoComplete='email'
            autoFocus
            value={username}
            onChange={(event) => setUserName(event.target.value)}
        />

    );
}
export default LoginEmail;

LoginEmail.propTypes = {
    username: PropTypes.string,
    setUserName: PropTypes.func
}
