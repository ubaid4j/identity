import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import React from 'react';
import {Typography} from "@material-ui/core";

const PreviewTableRow = ({subForm, identityForm, id, subKey}) => {
    return (
        <TableRow key={subForm.name}>
            <TableCell component='th' scope='row'>
                <Typography>
                    {identityForm[id][subKey] ? identityForm[id][subKey].label : ''}
                </Typography>
            </TableCell>
            <TableCell align='right'>
                <Typography>
                    {subForm[subKey] ? subForm[subKey] : ''}
                </Typography>
            </TableCell>
        </TableRow>
    );
}
export default PreviewTableRow;
