import React from "react";
import EmployeeList from "../Features/Home/EmployeeList";
import { wrapper } from "../Store";
import { getEmployeesAction } from "../Store/EmployeesAction";

const Index = () => {
  return <EmployeeList />;
};
export default Index;

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({}) => {
      await store.dispatch(getEmployeesAction());
      return {
        props: {},
      };
    }
);
