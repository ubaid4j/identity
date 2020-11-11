import PropTypes from 'prop-types';
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import {Typography} from "@material-ui/core";
import React from "react";

const PreviewTableNotApplicableRow = () => {
    return (
        <TableRow>
            <TableCell align='left'>
                <Typography style={{color: 'red'}}>
                    Not Applicable
                </Typography>
            </TableCell>
        </TableRow>
    );
}
export default PreviewTableNotApplicableRow;

PreviewTableNotApplicableRow.propTypes = {
    subForm: PropTypes.object
}
