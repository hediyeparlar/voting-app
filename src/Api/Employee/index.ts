import { gql } from "@apollo/client";
import client from "../base";
import { IEmplyeesQRequest } from "./index.d";
export type * from './index.d'
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
        }
      }
    `,
  });
};


// getEmployeeDetail
