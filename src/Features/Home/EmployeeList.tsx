  import React from "react";
  import EmployeeCard from "./EmployeeCard";
  import { useSelector } from "react-redux";
  import { selectEmployeeState } from "../../Store/EmployeesSlice";
  import styled from "styled-components";
  import { useRouter } from "next/router";

  type Props = {};

  const EmployeesStyle = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 10px;

    @media screen and (max-width: 975px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media screen and (min-width: 976px) and (max-width: 1351px) {
      grid-template-columns: repeat(3, 1fr);
    }
    @media screen and (min-width: 1352px) and (max-width: 1660px) {
      grid-template-columns: repeat(4, 1fr);
    }
  `;

  const EmployeeList = (props: Props) => {
    const Employees = useSelector(selectEmployeeState);
    const router = useRouter();

    const employeeDetailPage = (id: string) => {
      const url = `/${id}`;
      router.push(url);
    };

    return (
      <EmployeesStyle>
        {Employees.map((employee) => (
          <EmployeeCard
            cardDetailOnClick={() => employeeDetailPage(employee.id)}
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
