import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import {MenuItem, Typography} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        maxWidth: 160,
        fontSize: 30,
        marginRight: 30,
        textAlign: "center",
    },
    authItem: {
    },
    toolbar: {
    }
}));

export default function AppNavBar() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar className={classes.toolbar}>
                    <Typography className={classes.title}>Identity</Typography>
                    <MenuItem>Home</MenuItem>
                    <MenuItem>Preview Form</MenuItem>
                    <MenuItem className={classes.authItem}>Auth</MenuItem>
                </Toolbar>
            </AppBar>
        </div>
    );
}
