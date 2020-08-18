export const NameFormData = [
  {
    page: 1,
    required: true,
    name: "fullName",
    type: "text",
    placeholder: "Your full name",
  },
];
export const EmailFormData = [
  {
    page: 1,
    required: true,
    name: "email",
    type: "email",
    placeholder: "emailaddress@email.com",
  },
];
export const TextAreaData = [
  {
    page: 2,
    name: "textArea",
    type: "textArea",
    placeholder: "Enter response here.",
    question:
      "Are you aware you are canceling with your current company and entering a contract with Alder, Inc.?",
  },
];
export const RadioChoiceData = [
  {
    page: 2,
    required: true,
    name: "radioChoice",
    question: "Do you understand you will be paying a monthly rate of $49.95?",
    type: "radio",
    options: [
      {
        value: "Yes",
        label: "Yes",
      },
      {
        value: "No",
        label: "No",
      },
    ],
  },
];
export const CheckboxData = [
  {
    page: 2,
    name: "checkbox",
    question: "Check all that apply. I understand:",
    type: "checkbox",
    options: [
      {
        value: "I am entering into a new contract.",
        label: "I am entering into a new contract.",
      },
      {
        value:
          "I will be responsible for $49.95 each month until my contract is over.",
        label:
          "I will be responsible for $49.95 each month until my contract is over.",
      },
      {
        value: "I have three days to cancel.",
        label: "I have three days to cancel.",
      },
      {
        value:
          "If I cancel after three days, I will be responsible for the remainder of the contract.",
        label:
          "If I cancel after three days, I will be responsible for the remainder of the contract.",
      },
      {
        value:
          "My system is monitored and if it is set off, the cops will come to my home.",
        label:
          "My system is monitored and if it is set off, the cops will come to my home.",
      },
    ],
  },
];
export const SelectData = [
  {
    page: 2,
    name: "Select",
    question: "Which of the following is not true?",
    type: "select",
    options: [
      {
        value: "I can cancel any time with no penalty.",
        label: "I can cancel any time with no penalty.",
      },
      {
        value:
          "I will be responsible for the remaining balance of the contract if I cancel early.",
        label:
          "I will be responsible for the remaining balance of the contract if I cancel early.",
      },
      {
        value: "I have to set the alarm for the house to be protected.",
        label: "I have to set the alarm for the house to be protected.",
      },
      {
        value: "My alarm system is with Alder, Inc.",
        label: "My alarm system is with Alder, Inc.",
      },
    ],
  },
];

export const MultiSelectData = [
  {
    page: 2,
    name: "multiSelect",
    question: "Select all that apply:",
    type: "multiSelect",
    multiple: true,
    options: [
      {
        value: "I am happy with the system as it has been explained to me.",
        label: "I am happy with the system as it has been explained to me.",
      },
      {
        value:
          "I am happy with the level of customer service I have receievd today.",
        label:
          "I am happy with the level of customer service I have receievd today.",
      },
      {
        value:
          "I am happy with the representatives who have helped protect my home today.",
        label:
          "I am happy with the representatives who have helped protect my home today.",
      },
    ],
  },
];
