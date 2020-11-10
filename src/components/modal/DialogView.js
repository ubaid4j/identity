import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import FormPreview from 'components/preview/FormPreview';

const DialogView = ({open, modalHandler, form, saveFormHandler}) => {

    return (
        <div>
            <Dialog
                fullWidth={true}
                maxWidth='md'
                open={open}
                onClose={modalHandler}
                scroll={'paper'}
                aria-labelledby='scroll-dialog-title'
                aria-describedby='scroll-dialog-description'
            >
                <DialogTitle id='scroll-dialog-title'>Form Preview</DialogTitle>
                <DialogContent dividers={true}>
                    <FormPreview form={form} />
                </DialogContent>
                <DialogActions>
                    <Button onClick={modalHandler} color='primary'>Cancel</Button>
                    <Button onClick={saveFormHandler} color='primary'>Save</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
export default DialogView;
