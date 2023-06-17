import React, { FC } from "react";
// import { IEmployee } from "../../Api/Employee";
import { useDispatch } from "react-redux";
import { voteEmployee } from "../../Store/EmployeesSlice";
import Card from "../../Components/Card";
import styled from "styled-components";
import CustomImage from "../../Components/CustomImage";
import { IEmployee } from "../../Api/Employee";
interface EmployeeCardProps
  extends Pick<
    IEmployee,
    "avatar" | "fullname" | "vote" | "id" | "department" | "age"
  > {}

const EmployeeCardStyle = styled.div`
  padding: 10px;
  /* width: 50%; */
  display: flex;
`;

const CardContentStyle = styled.div`
  width: 100%;
  font-size: 18px;
  font-weight: 500;
`;

const EmployeeCard: FC<EmployeeCardProps> = (props) => {
  const dispatch = useDispatch();
  return (
    <EmployeeCardStyle>
      <Card>
        <CustomImage src={props.avatar} alt={props.fullname} />
        <CardContentStyle>
          <p onClick={() => dispatch(voteEmployee(props.id))}>{props.vote}</p>
          <p>{props.fullname}</p>
          <p>{props.age}</p>
          <p> {props.department}</p>
        </CardContentStyle>
      </Card>
    </EmployeeCardStyle>
  );
};

export default EmployeeCard;
