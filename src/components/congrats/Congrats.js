import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import FormLink from 'components/links/FormLink';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
        margin: 'auto',
        marginTop: '5rem'
    }
});

const Congrats = () => {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardContent>
                <Typography gutterBottom variant='h5' component='h2'>
                    Congrats!
                </Typography>
                <Typography variant='body2' color='textSecondary' component='p'>
                    You have been registered in Identity. You will received your Identity Number through by SMS soon.
                </Typography>
            </CardContent>
            <CardActions>
                <FormLink label='View Your Form' to='/identity/preview'/>
                <FormLink label='Edit Your Form' to='/identity/edit'/>
            </CardActions>
        </Card>
    );
}
export default Congrats;
