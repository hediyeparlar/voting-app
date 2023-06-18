import React from "react";
import EmployeeCard from "./EmployeeCard";
import { useSelector } from "react-redux";
import { selectEmployeeState } from "../../Store/EmployeesSlice";
import styled from "styled-components";

type Props = {};

const EmployeesStyle = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;

  @media screen and (max-width: 1052px) {
    grid-template-columns: repeat(1, 1fr);
  }
  @media screen and (min-width: 1053px) and (max-width: 1660px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const EmployeeList = (props: Props) => {
  const Employees = useSelector(selectEmployeeState);

  return (
    <EmployeesStyle>
      {Employees.map((employee) => (
        <EmployeeCard
          key={employee.id}
          avatar={employee.avatar}
          fullname={employee.fullname}
          vote={employee.vote}
          id={employee.id}
          department={employee.department}
          age={employee.age}
        />
      ))}
    </EmployeesStyle>
  );
};

export default EmployeeList;
