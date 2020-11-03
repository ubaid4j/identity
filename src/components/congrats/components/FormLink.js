import {Link} from "react-router-dom";
import Button from "@material-ui/core/Button";
import React from "react";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles({
    link: {
        textDecoration: 'none',
        outline: 'none'
    }
});


const FormLink = ({label, to}) => {
    const classes = useStyles();
    return (
        <Link to={to} className={classes.link}>
            <Button size='small' color='primary'>
                {label}
            </Button>
        </Link>
    );
}
export default FormLink;
