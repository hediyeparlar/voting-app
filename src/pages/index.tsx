import React from "react";
import EmployeeList from "../Features/Home/EmployeeList";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { getEmployees } from "../Api/Employee";
import { useSelector } from "react-redux";

const Index = () => {
//   const employees = useSelector((state) => state.employees);
//   console.log(employees);
  //   console.log(props.employees.map((i) => i.avatar));
  //   const employeeFullnames = props.employees.map(
  //     (employee) => employee.fullname
  //   );
  //   console.log(employeeFullnames);
  return <EmployeeList />;
};
export default Index;
// export const getServerSideProps: GetServerSideProps<{
//   employees: Employee[];
// }> = async () => {
//   const { data: employees, error } = await getEmployees();
//   return { props: { employees } };
// };

// export default Index;
// export interface Employee {
//   id: string;
//   fullname: string;
//   department: string;
//   avatar: string;
//   // Diğer çalışan özellikleri...
// }
