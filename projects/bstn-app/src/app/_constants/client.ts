const createMoths = (() => {
    const date = new Date();
    const year = date.getFullYear();
    const maxYear = date.getFullYear() + 50;
    let temp = [];
    for (let i = maxYear; i >= year; i--) {
        let item = { name: i, code: i }
        temp.push(item)
    }
    return temp
})
export const clientType = [
    { value: "1", label: "Clinical" },
    { value: "2", label: "Both" },
    { value: "3", label: "Residential" }
];
export const serviceType = [
    { value: "1", label: "Behavior Analyst" },
    { value: "2", label: "Behavior Specialist" },
    { value: "3", label: "Supported Living" },
    { value: "4", label: "Day Service" },
    // { value: "5", label: "Personal Assistance" },
    //  {value:"6",label:"Nursing Services"},
    //  {value:"7",label:"Transportation Services"},
    //  {value:"8",label:"Medical Residential"}, 
    //  {value:"9",label:"Hospital Sitter"},
    //  {value:"10",label:"Supported Employment"},
    //  {value:"11",label:"PA-Self Determination"},{value:"12",label:"MR Housing"}
];

export const cityList = [
    { value: "1", label: "Test" },
    { value: "2", label: "Normal" },
    { value: "3", label: "Test" }
];

export const stateList = [
    { value: 'TN', label: 'TN' },
    { value: 'CA', label: 'CA' },
    { value: 'NY', label: 'NY' },
    { value: 'OR', label: 'OR' },
    { value: 'WA', label: 'WA' },
    { value: 'TX', label: 'TX' }
]

export const zipCodeList = [
    { value: "1", label: "32424" },
    { value: "2", label: "43434" },
    { value: "3", label: "43434" }
]

export const billingTypes = [
    { value: "1", label: "Regular" },
    { value: "2", label: "Normal" },
    { value: "3", label: "Test" }
];


export const unitType = [
    { value: "1", label: "Test" },
    { value: "2", label: "Normal" },
    { value: "3", label: "Test" }
]

export const payerAgency = [
    { value: "1", label: "Regional Office" },
    { value: "2", label: "Community Service Network" },
    { value: "3", label: "Private Payee" }
]

export const DayList = [
    { name: '01', code: '01' },
    { name: '02', code: '02' },
    { name: '03', code: '03' },
    { name: '04', code: '04' },
    { name: '05', code: '05' },
    { name: '06', code: '06' },
    { name: '07', code: '07' },
    { name: '08', code: '08' },
    { name: '09', code: '09' },
    { name: '10', code: '10' },
    { name: '11', code: '11' },
    { name: '12', code: '12' },
    { name: '13', code: '13' },
    { name: '14', code: '14' },
    { name: '15', code: '15' },
    { name: '16', code: '16' },
    { name: '17', code: '17' },
    { name: '18', code: '18' },
    { name: '19', code: '19' },
    { name: '20', code: '20' },
    { name: '21', code: '21' },
    { name: '22', code: '22' },
    { name: '23', code: '23' },
    { name: '24', code: '24' },
    { name: '25', code: '25' },
    { name: '26', code: '26' },
    { name: '27', code: '27' },
    { name: '28', code: '28' },
    { name: '29', code: '29' },
    { name: '30', code: '30' },
    { name: '31', code: '31' },
];

export const MonthList = [
    { name: '01', code: '01' },
    { name: '02', code: '02' },
    { name: '03', code: '03' },
    { name: '04', code: '04' },
    { name: '05', code: '05' },
    { name: '06', code: '06' },
    { name: '07', code: '07' },
    { name: '08', code: '08' },
    { name: '09', code: '09' },
    { name: '10', code: '10' },
    { name: '11', code: '11' },
    { name: '12', code: '12' },
];
export const YearList = createMoths();
export const contactTypelst = [
    { name: 'Conservator', code: '1' },
    { name: 'Independent Support Coordinator', code: '2' },
    { name: 'Advocate', code: '3' },
    { name: 'Family Member', code: '4' },
    { name: 'Primary Care Physician', code: '5' },
    { name: 'Secondary Care Physician', code: '6' },
    { name: 'Psychiatrist', code: '7' },
    { name: 'Nurse', code: '8' },
    { name: 'Dentist', code: '9' },
    { name: 'Other Specialist', code: '10' },
    { name: 'Behavior Analyst', code: '11' },
    { name: 'BSTN Manager', code: '12' },
    { name: 'Residential Agency', code: '13' },
    { name: 'Pharmacy', code: '14' },
    { name: 'Outcome Manager', code: '15' },
];
