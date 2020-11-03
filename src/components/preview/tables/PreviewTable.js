import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import React from 'react';
import PreviewTableRow from 'components/preview/tables/PreviewTableRow';
import PreviewTableHead from 'components/preview/tables/PreviewTableHead';

const PreviewTable = ({id, subForm, identityForm}) => {
    return (
        <Table aria-label='simple table'>
            <PreviewTableHead id={id}/>
            <TableBody>
                {
                    Object.keys(subForm).map(subKey => subKey !== 'isCompleted' ?
                    <PreviewTableRow id={id} subForm={subForm} identityForm={identityForm} subKey={subKey}/>
                    : null)
                }
            </TableBody>
        </Table>
    );
}
export default PreviewTable;
