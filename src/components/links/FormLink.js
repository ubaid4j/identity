import Grid from '@material-ui/core/Grid';
import {Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import React from 'react';

const FormLink = ({to, label}) => {
    return (
        <Grid container>
            <Grid item>
                <Link to={to} style={{textDecoration: 'none', outline: 'none'}}>
                    <Button size='small' color='primary'>
                        {label}
                    </Button>
                </Link>
            </Grid>
        </Grid>
    )
}
export default FormLink;
