const PERSONAL_INFO = {
    firstName: {
        text: 'No Digits/Space Allowed. Not more than 8 and less than 3 Alphabets',
        pattern: /^[A-z]{3,8}$/g,
        disabled: false,
        value: "",
        type: "text",
        error: false,
        helperText: "",
        validation: {
            required: true,
            isTouched: false,
            isValid: false
        },
        label: "First Name"
    },
    middleName: {
        text: 'No Digits/Space Allowed. Not more than 4',
        pattern: /^[A-z]?[A-z]?[A-z]?[A-z]?$/g,
        disabled: false,
        value: "",
        type: "text",
        error: false,
        helperText: "",
        validation: {
            required: false,
            isTouched: false,
            isValid: true
        },
        label: "Middle Name"
    },
    lastName: {
        text: 'No Digits/Space Allowed. Not more than 8 and less than 2 Alphabets',
        pattern: /^[A-z]{2,8}$/g,
        disabled: false,
        value: "",
        type: "text",
        error: false,
        helperText: "",
        validation: {
            required: true,
            isTouched: false,
            isValid: false
        },
        label: "Last Name"
    },
    age: {
        text: 'Please Enter Age between 1 and 99',
        pattern: /^[1-9][0-9]?$/g,
        disabled: false,
        value: "",
        type: "number",
        error: false,
        helperText: "",
        validation: {
            required: true,
            isTouched: false,
            isValid: false
        },
        label: "Age"
    },
    mobileNumber: {
        text: 'Mobile Number should be in this pattern +92-3xx-xxxxxx',
        pattern: /^[+][9][2][-][3][0-4][0-9][-][0-9]{7}$/g,
        disabled: false,
        value: "",
        type: "text",
        error: false,
        helperText: "",
        placeholder: "+92-3xx-xxxxxxx",
        validation: {
            required: true,
            isTouched: false,
            isValid: false
        },
        label: "Mobile Number"
    }
}
const EDUCATIONAL_INFO = {
    metricMarks: {
        text: 'Invalid Input. Should like this xx%',
        pattern: /^[1-9][0-9]?%$/g,
        disabled: false,
        value: "",
        type: "text",
        error: false,
        helperText: "",
        validation: {
            required: true,
            isTouched: false,
            isValid: false

        },
        label: "Percentage in Metric"
    },
    intermediateMarks: {
        text: 'Invalid Input. Should like this xx%',
        pattern: /^[1-9][0-9]?%$/g,
        disabled: false,
        value: "",
        type: "text",
        error: false,
        helperText: "",
        validation: {
            required: true,
            isTouched: false,
            isValid: false

        },
        label: "Percentage in Intermediate"
    },
    bachelorCGPA: {
        text: 'Select CGPA',
        pattern: /^[1-9]+$/g,
        disabled: false,
        value: "",
        type: "select",
        options: [1, 2, 3, 4],
        error: false,
        helperText: "",
        validation: {
            required: true,
            isTouched: false,
            isValid: false

        },
        label: "CGPA in Bachelor "
    }
}
const PROFESSIONAL_INFO  = {
    status: {
        value: false,
        type: "check",
        error: false,
        helperText: "",
        validation: {
            required: true,
            isTouched: false,
            isValid: true
        },
        label: "Are You Employed?"
    },
    companyName: {
        text: 'No Digits/Space Allowed. Range [3, 15]',
        pattern: /^[A-z]{3,15}$/g,
        disabled: true,
        value: "",
        type: "text",
        error: false,
        helperText: "",
        validation: {
            required: true,
            isTouched: false,
            isValid: false
        },
        label: "Name of Company"
    },
    designationName: {
        text: 'No Digits/Space Allowed. Range [3, 15]',
        pattern: /^[A-z]{3,15}$/g,
        disabled: true,
        value: "",
        type: "text",
        error: false,
        helperText: "",
        validation: {
            required: true,
            isTouched: false,
            isValid: false
        },
        label: "Designation Name"
    }
}
const EXCISE_INFO = {
    isVehicle: {
        value: false,
        type: "check",
        error: false,
        helperText: "",
        validation: {
            required: false,
            isValid: true
        },
        label: "Have you vehicle?"
    },
    type: {
        text: 'Select Type',
        pattern: /^[A-z]+$/g,
        disabled: true,
        value: "Bike",
        type: "select",
        options: ["Bike", "SVM"],
        error: false,
        helperText: "",
        validation: {
            required: true,
            isTouched: false,
            isValid: true
        },
        label: "Type"
    },
    plateNumber: {
        text: 'Not a valid plate number. Format should be like AKK-2915',
        pattern: /^[A-Z]{3}-[0-9]{4}$/g,
        disabled: true,
        type: "text",
        value: "",
        error: false,
        helperText: "",
        placeholder: "AKK-2915",
        validation: {
            required: true,
            isTouched: false,
            isValid: false
        },
        label: "Plate Number"
    }
}
const RESIDENT_INFO = {
    isHouse: {
        value: false,
        type: "check",
        error: false,
        helperText: "",
        validation: {
            required: false,
            isValid: true
        },
        label: "Do you own a house?"
    },
    houseNumber: {
        text: 'Not a valid plate number. Format should be like JND-233232',
        pattern: /^[A-Z]{3}-[0-9]{6}$/g,
        disabled: true,
        value: "",
        type: "text",
        error: false,
        helperText: "",
        placeholder: "XXX-DDDDDD",
        validation: {
            required: true,
            isTouched: false,
            isValid: false
        },
        label: "House Number"
    }
}

const form = {
    PERSONAL_INFO,
    EDUCATIONAL_INFO,
    PROFESSIONAL_INFO,
    EXCISE_INFO,
    RESIDENT_INFO
}
export default form;
