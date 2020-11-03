import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import FormPreview from "../preview/FormPreview";

const DialogView = ({open, modalHandler, form, saveFormHandler}) => {

    const descriptionElementRef = React.useRef(null);
    React.useEffect(() => {
        if (open) {
            const { current: descriptionElement } = descriptionElementRef;
            if (descriptionElement !== null) {
                descriptionElement.focus();
            }
        }
    }, [open]);

    return (
        <div>
            <Dialog
                fullWidth={true}
                maxWidth="md"
                open={open}
                onClose={modalHandler}
                scroll={'paper'}
                aria-labelledby="scroll-dialog-title"
                aria-describedby="scroll-dialog-description"
            >
                <DialogTitle id="scroll-dialog-title">Form Preview</DialogTitle>
                <DialogContent dividers={true}>
                    <DialogContentText
                        id="scroll-dialog-description"
                        ref={descriptionElementRef}
                        tabIndex={-1}>
                        <FormPreview form={form} />
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={modalHandler} color="primary">Cancel</Button>
                    <Button onClick={saveFormHandler} color="primary">Save</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default DialogView;
