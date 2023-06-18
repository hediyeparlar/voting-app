import React from "react";
import { getEmployeeDetailAction } from "../Store/EmployeesAction";
import { wrapper } from "../Store";
import { GetServerSideProps } from "next";
import Profile from "../Features/Detail/Profile";
type Props = {};

const EmployeeDetail = (props: Props) => {
  return <Profile />;
};

export default EmployeeDetail;

export const getServerSideProps: GetServerSideProps =
  wrapper.getServerSideProps((store) => async ({ params }) => {
    const { Id } = params as { Id: string };
    await store.dispatch(getEmployeeDetailAction(Id));
    return {
      props: {},
    };
  });
