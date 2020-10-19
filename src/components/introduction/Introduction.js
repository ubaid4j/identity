import React, {useCallback} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {useDispatch, useSelector} from "react-redux";
import {Redirect} from "react-router";
import {Link} from "react-router-dom";
import {MenuItem} from "@material-ui/core";
import Toolbar from "@material-ui/core/Toolbar";

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
});

const Introduction = () =>  {
    const classes = useStyles();

    // const dispatch = useDispatch();
    // const signIn = useCallback(() => dispatch(signIn()), [dispatch]);

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={require('../../assets/images/identity.png')}
                    title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        Identity
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Identity is the Project initiated by Govt of Pakistan to register yourself from anywhere.
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Link to="/identity/login" style={{ textDecoration: 'none', outline: "none" }}>
                    <Button size="small" color="primary">
                        Sign In
                    </Button>
                </Link>
            </CardActions>
        </Card>
    );
}

export default Introduction;
