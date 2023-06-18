import React from "react";
import { useRouter } from "next/router";
import { getEmployeeDetailAction } from "../Store/EmployeesAction";
import { wrapper } from "../Store";
import { useSelector } from "react-redux";
import { selectEmployeeDetailState } from "../Store/EmployeesSlice";
import { GetServerSideProps } from "next";
type Props = {};

const EmployeeDetail = (props: Props) => {
  const router = useRouter();
  const detailData = useSelector(selectEmployeeDetailState);

  console.log(detailData, "Employees");

  return <p>Employee: {router.query.Id}</p>;
};

export default EmployeeDetail;

export const getServerSideProps: GetServerSideProps =
  wrapper.getServerSideProps((store) => async ({ params }) => {
    const { Id } = params as { Id: string };

    console.log(Id, "Id");

    await store.dispatch(getEmployeeDetailAction(Id));

    return {
      props: {},
    };
  });
