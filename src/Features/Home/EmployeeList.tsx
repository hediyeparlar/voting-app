import React from "react";
import EmployeeCard from "./EmployeeCard";
import { useSelector } from "react-redux";
import { selectEmployeeState } from "../../Store/EmployeesSlice";

type Props = {};

const EmployeeList = (props: Props) => {
  const Employees = useSelector(selectEmployeeState);

  return Employees.map((employee) => (
    <EmployeeCard
      key={employee.id}
      avatar={employee.avatar}
      fullname={employee.fullname}
      vote={employee.vote}
      id={employee.id}
    />
  ));
};

export default EmployeeList;
