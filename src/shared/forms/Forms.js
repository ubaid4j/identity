

const PERSONAL_INFO = {
    firstName: {
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
