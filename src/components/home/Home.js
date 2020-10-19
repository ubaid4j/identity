import React from "react";
import Paper from '@material-ui/core/Paper';
import {makeStyles} from "@material-ui/core/styles";
import Introduction from "../introduction/Introduction";
import {Grid} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    paper: {
        padding: theme.spacing(1),
        textAlign: "center",
        color: theme.palette.text.primary,
        background: theme.palette.grey,
        height: `calc(100vh -  11vh)`

    }
}));

const Home = () => {
    return (
        <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justify="center"
            style={{ minHeight: 'calc(100vh - 11vh)' }}
        >

            <Grid item xs={8} xl={2} sm={5}>
                <Introduction/>
            </Grid>

        </Grid>     );
}
export default Home;
