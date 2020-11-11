import React from "react";
import Paper from '@material-ui/core/Paper';
import FormPreview from "../../components/preview/FormPreview";
import {useSelector} from "react-redux";
import {Container} from "@material-ui/core";

const Preview = () => {

    const form = useSelector(state => state.form.form);

    return (
        <Container maxWidth="sm">
            <Paper  elevation={3}>
                <FormPreview form={form}/>
            </Paper>
        </Container>
    );
}
export default Preview;
