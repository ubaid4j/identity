import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import FormPreview from "../../components/preview/FormPreview";
import {useSelector} from "react-redux";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        '& > *': {
            margin: theme.spacing(1),
            width: theme.spacing(16),
            height: theme.spacing(16),
        },
    },
}));

const Preview = () => {
    const classes = useStyles();
    const form = useSelector(state => state.form.form);
    return (
        <Paper elevation={3} className={classes.root}>
            <FormPreview form={form}/>
        </Paper>
    );
}

export default Preview;
