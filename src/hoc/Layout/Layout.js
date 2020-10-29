import React, {useCallback, useEffect, useRef, useState} from "react";
import { makeStyles } from '@material-ui/core/styles';
import Fade from '@material-ui/core/Fade';
import AppNavBar from "../../containers/appBar/AppNavBar";
import Backdrop from '@material-ui/core/Backdrop';
import Modal from '@material-ui/core/Modal';
import {useDispatch, useSelector} from "react-redux";
import ErrorHandler from "../../store/actions/Error";

const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));

const Layout = props => {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const isError = useSelector(state => state.error.isError);
    const errorMessage = useSelector(state => state.error.message);

    const errorRef = useRef();

    const dispatch = useDispatch();
    const removeError = useCallback(() => dispatch(ErrorHandler(false, "")), [dispatch]);

    useEffect(() => {
        setOpen(isError);
    }, [isError])

    const handler = () => {
        setOpen(prevState => !prevState);
        removeError();
    }

    return (
        <React.Fragment>
            <AppNavBar>

            </AppNavBar>
            <main>
                {props.children}
            </main>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={handler}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <div className={classes.paper}>
                        <h2 id="transition-modal-title">Error</h2>
                        <h3 ref={errorRef} id="transition-modal-description">{errorMessage}</h3>
                    </div>
                </Fade>
            </Modal>
        </React.Fragment>
    );
}

export default Layout;
