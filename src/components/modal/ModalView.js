import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import FormPreview from "../preview/FormPreview";

const useStyles = makeStyles((theme) => ({
    modal: {
        // display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'auto',
        position: 'absolute',
        top: '0',
        left: '0',
        width: '80%',
        height: '90%',
        padding: '20px 50px 20px 20px'
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));

const  ModalView = ({open, modalHandler, form}) => {

    const classes = useStyles();

    return (
        <div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={modalHandler}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <div className={classes.paper}>
                        <FormPreview form={form}/>
                    </div>
                </Fade>
            </Modal>
        </div>
    );
}

export default ModalView;
