export const fieldsList = [
  {
    dataField: 'Name',
    dataType: 'string' as const,
    editorTemplate: 'textTemplate',
  },
  {
    dataField: 'Age',
    dataType: 'number' as const,
    editorTemplate: 'numberTemplate',
  },
];

export const employeesDataList = [
  {
    Name: 'Иван',
    Age: 20,
    key: 'Иван',
  },
  {
    Name: 'Алексей',
    Age: 17,
    key: 'Алексей',
  },
  {
    Name: 'Ирина',
    Age: 25,
    key: 'Ирина',
  },
  {
    Name: 'Петр',
    Age: 40,
    key: 'Петр',
  },
  {
    Name: 'Олеся',
    Age: 55,
    key: 'Олеся',
  },
];

export const fields = [
  {
    dataField: 'Name',
    dataType: 'string' as const,
    editorTemplate: 'textTemplate',
  },
  {
    dataField: 'Position',
    dataType: 'string' as const,
    editorTemplate: 'textTemplate',
  },
  {
    dataField: 'HireDate',
    dataType: 'datetime' as const,
    editorTemplate: 'dateTemplate',
  },
  {
    dataField: 'Salary',
    dataType: 'number' as const,
    editorTemplate: 'numberTemplate',
  },
  {
    dataField: 'Department',
    dataType: 'string' as const,
    editorTemplate: 'selectTemplate',
  },
];

export const employeesData = [
  {
    Name: 'Иван',
    Position: 'Dev',
    HireDate: new Date(2020, 2, 10),
    Salary: 120000,
    Department: 'Engineering',
  },
  {
    Name: 'Алексей',
    Position: 'Manager',
    HireDate: new Date(2019, 6, 15),
    Salary: 150000,
    Department: 'Marketing',
  },
  {
    Name: 'Ирина',
    Position: 'Analyst',
    HireDate: new Date(2021, 0, 5),
    Salary: 110000,
    Department: 'Finance',
  },
];

export const filtersForGrid = [
  ['Name', 'contains', 'ан'],
  'or',
  ['Department', 'contains', 'Marketing'],
];
