import { gql } from "@apollo/client";
import client from "../base";
import { wrapper } from "../../Store";
import { setEmployees } from "../../Store/EmployesSlice";

export const getEmployees = () => {
  return client.query({
    query: gql`
      query getEmployees {
        employees {
          id
          fullname
          department
          avatar
        }
      }
    `,
  });
};

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ params }) => {
      console.log(params, "params");
      // we can set the initial state from here
      // we are setting to false but you can run your custom logic here
      await store.dispatch(setEmployees(params));
      console.log("State on server", store.getState());
      return {
        props: {
          authState: false,
        },
      };
    }
);
