import React from "react";
import { useSelector } from "react-redux";
import { selectEmployeeDetailState } from "../../Store/EmployeesSlice";

type Props = {};

const Profile = (props: Props) => {
  const detailData = useSelector(selectEmployeeDetailState);

  console.log(detailData, detailData?.telephone, "Employees");
  return <div>Profile</div>;
};

export default Profile;
