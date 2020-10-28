import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import {MenuItem, Typography} from '@material-ui/core';
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";

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

    const userId = useSelector(state => state.login.id);

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar className={classes.toolbar}>
                    <Typography className={classes.title}>Identity</Typography>
                    <Link to="/identity/welcome" style={{textDecoration: 'none', outline: "none"}}>
                        <MenuItem style={{color: "white"}}>Home</MenuItem>
                    </Link>
                    <Link to="/logout" style={{textDecoration: 'none', outline: "none"}}>
                        <MenuItem style={{color: "white"}}>{userId ? "Logout" : null}</MenuItem>
                    </Link>
                </Toolbar>
            </AppBar>
        </div>
    );
}
