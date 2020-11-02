import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {Link} from 'react-router-dom';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
        margin: 'auto',
        marginTop: '5rem'
    },
    link: {
        textDecoration: 'none',
        outline: 'none'
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
                <Link to='/identity/preview' className={classes.link}>
                    <Button size='small' color='primary'>
                        View Your Form
                    </Button>
                </Link>
                <Link to='/identity/create' className={classes.link}>
                    <Button size='small' color='primary'>
                        Edit Your Form
                    </Button>
                </Link>
            </CardActions>
        </Card>
    );
}

export default Congrats;
