import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import React from 'react';

const LoginPassword = ({password, setPassword}) => {
    return (
        <TextField
            variant='outlined'
            margin='normal'
            required
            fullWidth
            name='password'
            label='Password'
            type='password'
            id='password'
            autoComplete='current-password'
            value={password}
            onChange={(event) => setPassword(event.target.value)}
        />
    );
}
export default LoginPassword;

LoginPassword.propTypes = {
    password: PropTypes.string,
    setPassword: PropTypes.func
}
