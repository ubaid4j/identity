import {Link} from "react-router-dom";
import Button from "@material-ui/core/Button";
import React from "react";

const CongratsLink = ({label, className, to}) => {
    return (
        <Link to={to} className={className}>
            <Button size='small' color='primary'>
                {label}
            </Button>
        </Link>
    );
}
export default CongratsLink;
