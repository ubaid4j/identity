export const PERSONAL_INFO = {
    firstName: {
        value: "",
        required: true,
        label: "First Name"
    },
    middleName: {
        value: "",
        required: false,
        label: "Middle Name"
    },
    lastName: {
        value: "",
        required: true,
        label: "Last Name"
    },
    age: {
        value: "",
        required: true,
        label: "Age"
    },
    mobileNumber: {
        value: "",
        required: true,
        label: "Mobile Number"
    }
}

export const EDUCATIONAL_INFO = {
    metricMarks: {
        value: "",
        required: true,
        label: "Marks in Metric"
    },
    intermediateMarks: {
        value: "",
        required: true,
        label: "Marks in Intermediate"
    },
    bachelorCGPA: {
        value: "",
        required: true,
        label: "Bachelor CGPA"
    }
}
export const PROFESSIONAL_INFO  = {
    status: {
        value: "",
        required: true,
        label: "Current Status"
    },
    companyName: {
        value: "",
        required: true,
        label: "Name of Company"
    },
    designationName: {
        value: "",
        required: true,
        label: "Designation Name"
    }
}
export const EXCISE_INFO = {
    isVehicle: {
        value: "",
        required: true,
        label: "Have you vehicle?"
    },
    type: {
        value: "",
        required: true,
        label: "Type"
    },
    plateNumber: {
        value: "",
        required: true,
        label: "Plate Number"
    }
}
export const RESIDENT_INFO = {
    isHouse: {
        value: "",
        required: true,
        label: "Are you own a house?"
    },
    houseNumber: {
        value: "",
        required: true,
        label: "houseNumber"
    },
}

const IDENTITY_FORM = [PERSONAL_INFO, EDUCATIONAL_INFO, PROFESSIONAL_INFO, EXCISE_INFO, RESIDENT_INFO];
export default IDENTITY_FORM;
