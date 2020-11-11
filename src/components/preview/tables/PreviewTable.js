import PropTypes from 'prop-types';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import React from 'react';
import PreviewTableRow from 'components/preview/tables/PreviewTableRow';
import PreviewTableHead from 'components/preview/tables/PreviewTableHead';
import PreviewTableNotApplicableRow from "./PreviewTableNotApplicableRow";

const PreviewTable = ({id, subForm, identityForm}) => {
    const checkedFields = ['isCompleted', 'isVehicle', 'isHouse', 'status'];

    const isCheckField = field => {
        return checkedFields.includes(field);
    }
    const totalNumberOfFieldsIfNoInformationInForm = 2;

    const notApplicableRow = <PreviewTableNotApplicableRow/>
    const body = (
        Object.keys(subForm).map(subKey => !isCheckField(subKey) ?
            <PreviewTableRow id={id} key={subKey} subForm={subForm} identityForm={identityForm}
                             subKey={subKey}/>
            : null)
    );


    return (
        <Table aria-label='simple table'>
            <PreviewTableHead id={id}/>
            <TableBody>
                {Object.keys(subForm).length ===  totalNumberOfFieldsIfNoInformationInForm ? notApplicableRow : body}
            </TableBody>
        </Table>
    );
}
export default PreviewTable;

PreviewTable.propTypes = {
    id: PropTypes.string,
    subForm: PropTypes.object,
    identityForm: PropTypes.object
}
