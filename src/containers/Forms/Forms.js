import React, {useCallback, useContext, useEffect, useState} from "react";
import {makeStyles} from '@material-ui/core/styles';
import Form from "components/form/Form";
import Paper from '@material-ui/core/Paper';
import IDENTITY_FORM from "shared/forms/Forms";
import formTypes from "shared/forms/FormTypes";
import {useDispatch, useSelector} from "react-redux";
import _ from 'lodash'
import {updateForm} from "store/actions/Form";
import DialogView from "components/modal/DialogView";
import {UserContext} from "providers/UserProvider";
import {Redirect} from "react-router";
import {Container} from "@material-ui/core";
import MobileStepperWidget from "components/form/mobileStepperWidget/MobileStepperWidget";
import DesktopStepper from "components/form/deskopStepper/DesktopStepper";
import DesktopStepperButtons from "components/form/deskopStepper/DesktopStepperButtons";


const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    instructions: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
    },
    paper: {
        padding: theme.spacing(2),
        margin: theme.spacing(2),
        marginRight: "auto",
        marginLeft: "auto",
        width: "80%",
        height: "500px"
    }
}));


function getSteps() {
    return formTypes.filter(type => type.step !== 5).map(type => type.label);
}


const Forms = () => {
    const classes = useStyles();
    const [formType, setFormType] = React.useState(formTypes[0]);
    const [isSubFormComplete, setSubFormComplete] = useState(false);
    const steps = getSteps();

    const user = useContext(UserContext);

    const dispatch = useDispatch();
    const submitFormInfo = useCallback((info, id, user) => dispatch(updateForm(info, id, user)), [dispatch]);
    const formId = useSelector(state => state.form.formId);
    const form = useSelector(state => state.form.form);
    const isFormComplete = useSelector(state => state.login.formInfo ? state.login.formInfo.isFormCompleted : null)

    const [identityForm, setIdentityForm] = useState(IDENTITY_FORM);
    const [isNextButtonDisable, setNextButtonDisable] = useState(true);

    const [isModalOpen, setModalOpen] = useState(false);


    useEffect(() => {
        clearFormData();
        if (formId !== null) {
            const newIdentityForm = _.clone(identityForm);
            for (let key in newIdentityForm) {
                const subForm = newIdentityForm[key];
                const subRemoteForm = form[key];
                for (let field in subRemoteForm) {
                    if (field === 'isCompleted') continue;
                    if (subRemoteForm.hasOwnProperty(field)) {
                        if (subRemoteForm.isCompleted) {
                            setSubFormComplete(true);
                            subForm[field].value = subRemoteForm[field];
                            subForm[field].validation.isValid = true;
                            subForm[field].validation.isTouched = true;
                        }
                    }
                }
            }
            setIdentityForm(newIdentityForm);
            setNextButtonEnable(formTypes[0]);
        }

    }, []);

    function getFormData() {
        const form = _.clone(identityForm);
        const formData = {};
        for (let key in form) {
            const subForm = form[key];
            let info = {};
            const subFormTypes = formTypes.slice(0, formType.step + 1).map(value => value.value);
            if (subFormTypes.includes(key)) {
                info['isCompleted'] = isSubFormComplete;
            }
            for (let subKey in subForm) {
                if (subForm.hasOwnProperty(subKey)) {
                    const value = subForm[subKey];
                    if (!value.disabled) {
                        info[subKey] = value['value'];
                    }
                }
            }
            formData[key] = info;
        }
        return formData;
    }

    const clearFormData = () => {
        const newIdentityForm = _.clone(identityForm);
        for (let key in newIdentityForm) {
            const subForm = newIdentityForm[key];
            if (subForm === IDENTITY_FORM.PROFESSIONAL_INFO || subForm === IDENTITY_FORM.EXCISE_INFO || subForm === IDENTITY_FORM.RESIDENT_INFO) {
                for (let key in subForm) {
                    if (key === 'isCompleted') continue;
                    if (subForm.hasOwnProperty(key)) {
                        const field = subForm[key];
                        if (field.type === 'check') {
                            field.value = false
                        } else {
                            field.disabled = true;
                            field.value = "";
                            field.validation.isValid = false;
                            field.validation.isTouched = false;
                        }
                    }
                }
            } else {
                for (let key in subForm) {
                    if (subForm.hasOwnProperty(key)) {
                        const field = subForm[key];
                        field.value = "";
                        field.validation.isValid = !field.validation.required;
                        field.validation.isTouched = !field.validation.required;
                    }
                }
            }
        }
        setIdentityForm(newIdentityForm);
    }

    const handleSaveForm = () => {
        setModalOpen(false);
        const formData = getFormData();
        formData['isFormCompleted'] = true;
        submitFormInfo(formData, formId, user);
        setFormType(formTypes[0]);
        setNextButtonDisable(true);
        clearFormData();
    }

    const handleNext = () => {
        const formData = getFormData();
        formData['isFormCompleted'] = false;
        submitFormInfo(formData, formId, user);
        setFormType((prevActiveStep) => {
            setNextButtonEnable(formTypes[prevActiveStep.step + 1]);
            return formTypes[prevActiveStep.step + 1]
        });
    };

    const handleBack = () => {
        setFormType((prevActiveStep) => {
            setNextButtonEnable(formTypes[prevActiveStep.step - 1]);
            return formTypes[prevActiveStep.step - 1]
        });
    };

    const setNextButtonEnable = (formType) => {
        const newIdentityForm = _.clone(identityForm);
        const subForm = newIdentityForm[formType.value];
        if (isValid(subForm)) {
            setNextButtonDisable(false);
        } else {
            setNextButtonDisable(true);
        }
    }

    const toggleInputsDisabled = (formType, isDisable) => {
        const newIdentityForm = _.clone(identityForm);
        const subForm = newIdentityForm[formType.value];
        for (let field in subForm) {
            if (subForm.hasOwnProperty(field)) {
                if (subForm[field].type === 'text' || subForm[field].type === 'select') {
                    subForm[field].disabled = isDisable;
                }
            }
        }
        setIdentityForm(newIdentityForm);
    }

    const changeHandler = (event, formType, inputType) => {
        const newIdentityForm = _.clone(identityForm);
        const subForm = newIdentityForm[formType.value];
        let fieldName = event.target.id || event.target.name;
        if (inputType === "check") {
            subForm[fieldName].value = event.target.checked;
            toggleInputsDisabled(formType, !event.target.checked);
        } else {
            const field = subForm[fieldName];
            field.helperText = '';
            field.value = event.target.value;
            field.validation.isTouched = true;

            field.validation.isValid = field.pattern ? _.clone(field.pattern).test(field.value) : true;
            field.helperText = !field.validation.isValid ? field.text : '';
        }
        setSubFormComplete(isValid(subForm));
        setNextButtonDisable(!isValid(subForm));
        setIdentityForm(newIdentityForm);
    }

    const isValid = (subForm) => {
        for (let key in subForm) {
            if (key === 'isCompleted') continue;
            if (subForm.hasOwnProperty(key)) {
                const field = subForm[key];
                if (!field.disabled && !field.validation.isValid) {
                    return false;
                }
            }
        }
        console.log("Form is Valid");
        return true;
    }

    if (isFormComplete) {
        return <Redirect to="/identity/congrats"/>
    }

    const mobileStepper = <MobileStepperWidget
        formType={formType}
        handleBack={handleBack}
        handleNext={handleNext}
        isNextButtonDisable={isNextButtonDisable}
        setModalOpen={setModalOpen}
        steps={steps}
    />;

    const desktopStepper = <DesktopStepper steps={steps} formType={formType}/>;
    const desktopButton = <DesktopStepperButtons
        formType={formType}
        steps={steps}
        setModalOpen={setModalOpen}
        isNextButtonDisable={isNextButtonDisable}
        handleNext={handleNext}
        handleBack={handleBack}
    />

    const stepper = window.screen.width < 600 ? mobileStepper : desktopStepper;
    const stepperButton = window.screen.width >= 600 ? desktopButton : null;

    return (
        <Container>
            {stepper}
            <Container className={classes.root}>
                <Paper elevation={3} className={classes.paper}>
                    <Form form={identityForm[formType.value]} formType={formType} handler={changeHandler}/>
                </Paper>
                {stepperButton}
                <DialogView
                    form={form}
                    open={isModalOpen}
                    modalHandler={() => setModalOpen(false)}
                    saveFormHandler={handleSaveForm}
                />
            </Container>
        </Container>
    );
}

export default Forms;
