export const userFields = [
  {
    name: "username",
    label: "User Name",
    type: "text",
    required: true,
    placeholder: "Enter user name",
  },
  {
    name: "firstName",
    label: "First Name",
    type: "text",
  },
  {
    name: "lastName",
    label: "Last Name",
    type: "text",
  },
  {
    name: "dob",
    label: "Date of Birth",
    type: "date",
  },
  {
    name: "gender",
    label: "Gender",
    type: "select",
    required: true,
    options: ["Male", "Female"],
  },
  {
    name: "userType",
    label: "User Type",
    type: "select",
    required: true,
    options: ["Admin", "User"],
  },
  {
    name: "phone",
    label: "Phone",
    type: "text",
    required: true,
  },
  {
    name: "mail",
    label: "Mail",
    type: "email",
    required: true,
  },
  {
    name: "location",
    label: "Location",
    type: "text",
    required: true,
  },
  {
    name: "status",
    label: "Status",
    type: "toggle",
  },
];
