import React, { FC } from "react";
import { IEmployee } from "../../Api/Employee";
import { useDispatch } from "react-redux";
import { voteEmployee } from "../../Store/EmployeesSlice";
interface EmployeeCardProps
  extends Pick<IEmployee, "avatar" | "fullname" | "vote" | "id"> {}
  

const EmployeeCard: FC<EmployeeCardProps> = (props) => {
  const dispatch = useDispatch();
  return (
    <div onClick={() => dispatch(voteEmployee(props.id))}>
      <p>{props.avatar}</p>
      <p>{props.fullname}</p>
      <p>{props.vote}</p>
    </div>
  );
};

export default EmployeeCard;
