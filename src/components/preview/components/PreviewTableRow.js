import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import React from 'react';

const PreviewTableRow = ({subForm, identityForm, id, subKey}) => {
    return (
        <TableRow key={subForm.name}>
            <TableCell component='th' scope='row'>
                {identityForm[id][subKey] ? identityForm[id][subKey].label : null}
            </TableCell>
            <TableCell
                align='right'>{subForm[subKey] ? subForm[subKey] : null}
            </TableCell>
        </TableRow>
    );
}
export default PreviewTableRow;
