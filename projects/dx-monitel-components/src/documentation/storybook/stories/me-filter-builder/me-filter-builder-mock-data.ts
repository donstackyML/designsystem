import { Field } from 'devextreme/ui/filter_builder';

export const tags = [
  { id: 1, name: "admin" },
  { id: 2, name: "editor" },
  { id: 3, name: "user" },
  { id: 4, name: "manager" },
  { id: 5, name: "developer" },
];

export const departments = [
  { id: 1, name: "HR" },
  { id: 2, name: "Engineering" },
  { id: 3, name: "Finance" },
  { id: 4, name: "Marketing" },
  { id: 5, name: "IT" },
];

export const mockData = Array.from({ length: 100 }, (_, index) => {
  const id = index + 1;
  const randomTagIds = Array.from(
    { length: Math.floor(Math.random() * tags.length) },
    () => tags[Math.floor(Math.random() * tags.length)].name
  );
  const randomDepartment =
    departments[Math.floor(Math.random() * departments.length)].name;
  const gender = Math.random() > 0.5 ? "male" : "female";
  const salary = Math.random() > 0.2
    ? Math.floor(Math.random() * 90000) + 30000
    : null;

  return {
    id,
    name: `User${id}`,
    age: Math.random() > 0.2 ? Math.floor(Math.random() * 60) + 18 : null,
    birthdate:
      Math.random() > 0.2
        ? new Date(
            Date.now() - Math.floor(Math.random() * 1000000000000)
          ).toISOString().split("T")[0]
        : null,
    isActive: Math.random() > 0.5,
    tags: randomTagIds,
    address: {
      city: `City${Math.floor(Math.random() * 100)}`,
      zip: `${Math.floor(10000 + Math.random() * 90000)}`,
    },
    department: randomDepartment,
    gender,
    salary,
  };
});

export const filterFields: Field[] = [
  { dataField: "id", dataType: "number" },
  { dataField: "name", dataType: "string" },
  { dataField: "age", dataType: "number" },
  { dataField: "birthdate", dataType: "date" },
  { dataField: "isActive", dataType: "boolean" },
  {
    dataField: "tags",
    dataType: "object",
    lookup: {
      dataSource: tags,
      valueExpr: "id",
      displayExpr: "name",
    },
    calculateFilterExpression: (filterValue) => {
      if (!filterValue) return "";
      return ["tags", "contains", filterValue];
    },
  },
  { dataField: "address.city", dataType: "string" },
  { dataField: "address.zip", dataType: "string" },
];
