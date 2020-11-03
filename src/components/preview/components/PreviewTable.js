import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import React from "react";
import PreviewTableRow from "./PreviewTableRow";
import PreviewTableHead from "./PreviewTableHead";

const PreviewTable = ({id, subForm, identityForm}) => {
    return (
        <Table aria-label="simple table">
            <PreviewTableHead id={id}/>
            <TableBody>
                {Object.keys(subForm).map(subKey => {
                    let view;
                    subKey !== 'isCompleted' ?
                        view = (
                            <PreviewTableRow id={id} subForm={subForm} identityForm={identityForm} subKey={subKey}/>
                        ) :
                        view = null;
                    return view;
                })}
            </TableBody>
        </Table>
    );
}

export default PreviewTable;
