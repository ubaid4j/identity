export const validateFieldLength = field => {
    if (field.validation.isTouched) {
        if (field.value.length < field.validation.minLength || field.value.length > field.validation.maxLength) {
            field.validation.isValid = false;
            field.error = true;
            field.helperText = 'Min Val: ' + field.validation.minLength + ', Max Val: ' + field.validation.maxLength;
        } else {
            field.validation.isValid = true;
            field.error = false;
            field.helperText = '';
        }
    }
}

export const validateEmail = emailField => {
    const email = emailField.value;
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const isValid = re.test(String(email).toLowerCase());
    if (!isValid) {
        emailField.validation.isValid = false;
        emailField.error = true;
        emailField.helperText = 'Invalid Email Address';
    } else {
        emailField.validation.isValid = true;
        emailField.error = false;
        emailField.helperText = '';
    }
}

export const validatePassword = passwordField => {
    const pw = passwordField.value;
    const isValid = /[A-Z]/.test(pw) &&
        /[a-z]/.test(pw) &&
        /[0-9]/.test(pw) &&
        /[^A-Za-z0-9]/.test(pw) &&
        pw.length > 4;
    if (!isValid) {
        passwordField.validation.isValid = false;
        passwordField.error = true;
        passwordField.helperText = 'Password should at least contain an upper case letter, a lower case letter, a digit and a special symbol and greater than 4 digits';

    } else {
        passwordField.validation.isValid = true;
        passwordField.error = false;
        passwordField.helperText = '';
    }
}

export const validateWholeForm = (form) => {
    let keys = Object.keys(form);
    for (let key in keys) {
        const field = form[keys[key]];
        if (!field.validation.isValid) {
            return false;
        }
    }
    return true;
}

