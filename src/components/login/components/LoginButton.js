import Button from "@material-ui/core/Button";
import React, {forwardRef} from "react";

const LoginButton = forwardRef(({className}, ref) => {
    return (
        <Button
            ref={ref}
            type='submit'
            fullWidth
            variant='contained'
            color='primary'
            style={{display: 'inline-flex'}}
            className={className}>
            Log In
        </Button>
    );
})

export default LoginButton;
