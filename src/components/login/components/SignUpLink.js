import Grid from "@material-ui/core/Grid";
import {Link} from "react-router-dom";
import Button from "@material-ui/core/Button";
import React from "react";

const SignUpLink = () => {
    return (
        <Grid container>
            <Grid item>
                <Link to='/identity/signup' style={{textDecoration: 'none', outline: 'none'}}>
                    <Button size='small' color='primary'>
                        Don't have an account? Sign Up
                    </Button>
                </Link>
            </Grid>
        </Grid>
    );
}

export default SignUpLink;
