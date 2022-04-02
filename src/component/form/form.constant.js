const stateList = [
  { code: "AN", name: "Andaman and Nicobar Islands" },
  { code: "AP", name: "Andhra Pradesh" },
  { code: "AR", name: "Arunachal Pradesh" },
  { code: "AS", name: "Assam" },
  { code: "BR", name: "Bihar" },
  { code: "CG", name: "Chandigarh" },
  { code: "CH", name: "Chhattisgarh" },
  { code: "DH", name: "Dadra and Nagar Haveli" },
  { code: "DD", name: "Daman and Diu" },
  { code: "DL", name: "Delhi" },
  { code: "GA", name: "Goa" },
  { code: "GJ", name: "Gujarat" },
  { code: "HR", name: "Haryana" },
  { code: "HP", name: "Himachal Pradesh" },
  { code: "JK", name: "Jammu and Kashmir" },
  { code: "JH", name: "Jharkhand" },
  { code: "KA", name: "Karnataka" },
  { code: "KL", name: "Kerala" },
  { code: "LD", name: "Lakshadweep" },
  { code: "MP", name: "Madhya Pradesh" },
  { code: "MH", name: "Maharashtra" },
  { code: "MN", name: "Manipur" },
  { code: "ML", name: "Meghalaya" },
  { code: "MZ", name: "Mizoram" },
  { code: "NL", name: "Nagaland" },
  { code: "OR", name: "Odisha" },
  { code: "PY", name: "Puducherry" },
  { code: "PB", name: "Punjab" },
  { code: "RJ", name: "Rajasthan" },
  { code: "SK", name: "Sikkim" },
  { code: "TN", name: "Tamil Nadu" },
  { code: "TS", name: "Telangana" },
  { code: "TR", name: "Tripura" },
  { code: "UK", name: "Uttarakhand" },
  { code: "UP", name: "Uttar Pradesh" },
  { code: "WB", name: "West Bengal" },
];

const formConstants = [
  {
    title: "Name",
    titleValue: "name",
    description: "Enter Full Name",
    type: "text",
  },
  {
    title: "Aadhar Number",
    titleValue: "aadharNumber",
    description: "Aadhar Number",
    type: "text",
  },
  {
    title: "Gender",
    titleValue: "gender",
    options: ["Male", "Female", "Tamsgender"],
    type: "select",
  },
  {
    title: "DATE OF BIRTH",
    titleValue: "dob",
    description: "Enter Full Name",
    type: "date",
  },
  {
    title: "DATE OF BIRTH (In Words)",
    titleValue: "dobInWords",
    description: "DATE OF BIRTH (In Words)",
    type: "text",
  },
  {
    title: "PLACE OF BIRTH",
    titleValue: "placeOfBirth",
    description: "PLACE OF BIRTH",
    type: "text",
  },
  {
    title: "Father Name",
    titleValue: "fatherName",
    description: "Father Name",
    type: "text",
  },
  {
    title: "Father Aadhar",
    titleValue: "fatherAadhar",
    description: "Father Aadhar",
    type: "text",
  },
  {
    title: "Mother Name",
    titleValue: "motherName",
    description: "Mother Name",
    type: "text",
  },
  {
    title: "Mother Aadhar",
    titleValue: "motherAadhar",
    description: "Mother Aadhar",
    type: "text",
  },
  {
    title: "Permanent Address",
    titleValue: "permanentAddress",
    description: "Permanent Address",
    type: "text",
  },
  {
    title: "Address at time of Birth",
    titleValue: "birthAddress",
    description: "Address at time of Birth",
    type: "text",
  },
  {
    title: "Date of Registration",
    titleValue: "dateOfRegistration",
    description: "Permanent Address",
    type: "date",
  },
  {
    title: "State",
    titleValue: "state",
    options: stateList.map(({ code, name }) => name),
    type: "select",
  },
  {
    title: "city",
    titleValue: "city",
    options: [1, 2, 3],
    type: "select",
  },
  {
    title: "Select Hospital",
    titleValue: "hospital",
    options: [1, 2, 3],
    type: "select",
  },
];
export default formConstants;