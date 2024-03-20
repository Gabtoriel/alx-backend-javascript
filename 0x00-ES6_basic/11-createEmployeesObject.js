export default function createEmployeesObject(departmentName, employees) {
  const employee_data = {
    [`${departmentName}`]: [...employees,],
  }

  return employee_data;
}
