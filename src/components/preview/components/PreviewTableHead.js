import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import {Typography} from "@material-ui/core";
import React from "react";

const PreviewTableHead = ({id}) => {
    return (
        <TableHead>
            <TableRow>
                <TableCell colSpan={2} style={{textAlign: "center"}}>
                    <Typography variant="h5" style={{fontWeight: "bold"}}>
                        {id && id !== 'isFormCompleted' ? id.replace("_", " ") : null}
                    </Typography>
                </TableCell>
            </TableRow>
        </TableHead>
    );
}

export default PreviewTableHead;
