import { gql } from "@apollo/client";
import client from "../base";
import { IEmplyeeDetailQRequest, IEmplyeesQRequest } from "./index.d";
export * from "./index.d";

export const getEmployees = () => {
  return client.query<IEmplyeesQRequest>({
    query: gql`
      query getEmployees {
        employees {
          id
          fullname
          department
          avatar
          vote
          age
        }
      }
    `,
  });
};

export const getEmployeeDetail = (id: string) => {
  return client.query({
    query: gql`
      query getEmployeeDetail($id: ID!) {
        employee(id: $id) {
          id
          fullname
          department
          avatar
          vote
          age
        }
      }
    `,
    variables: { id },
  });
};
