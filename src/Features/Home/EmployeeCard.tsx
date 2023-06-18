import React, { FC, useState } from "react";
import { useDispatch } from "react-redux";
import { voteEmployee } from "../../Store/EmployeesSlice";
import Card from "../../Components/Card";
import styled from "styled-components";
import CustomImage from "../../Components/CustomImage";
import { IEmployee } from "../../Api/Employee";
import CardLabel from "../../Components/Card/CardLabel";
import Button from "../../Components/Button";
interface EmployeeCardProps
  extends Pick<
    IEmployee,
    "avatar" | "fullname" | "vote" | "id" | "department" | "age"
  > {
  cardDetailOnClick: (id: string) => void;
}

const EmployeeCardStyle = styled.div`
  padding: 20px;
  margin: auto;
  width: 75%;
`;

const CardContentStyle = styled.div`
  width: 100%;
  font-size: 18px;
  font-weight: 500;
  margin: auto;
`;

const EmployeeCard: FC<EmployeeCardProps> = (props) => {
  const dispatch = useDispatch();
  const [moveAnimationIcon, setMoveAnimationIcon] = useState<boolean>(false);

  const voteEmployeeIncrease = (id: string) => {
    dispatch(voteEmployee(id));
    setMoveAnimationIcon(!moveAnimationIcon);
    setTimeout(() => {
      setMoveAnimationIcon(false);
    }, 1000);
  };

  return (
    <EmployeeCardStyle>
      <Card>
        <div onClick={() => props.cardDetailOnClick(props.id)}>
          <CustomImage src={props.avatar} alt={props.fullname} />
          <CardContentStyle>
            <CardLabel icon="user" text={props.fullname} />
            <CardLabel icon="age" text={props.age + " Yaş "} />
            <CardLabel icon="department" text={props.department} />
            <CardLabel
              icon="voteChart"
              text={props.vote + " Oy "}
              boldGreenLabel
            />
          </CardContentStyle>
        </div>
        <Button onClick={() => voteEmployeeIncrease(props.id)} key={props.id}>
          <CardLabel
            icon="vote"
            text={"Oy Ver"}
            moveAnimation={moveAnimationIcon}
            buttonContent
          />
        </Button>
      </Card>
    </EmployeeCardStyle>
  );
};

export default EmployeeCard;
