import React from 'react'
import { useRouter } from 'next/router'
type Props = {}

const  EmployeeDetail = (props:Props) => {
  const router = useRouter()
  return <p>Employee: {router.query.Id}</p>
}

export default EmployeeDetail

// export const getServerSideProps = wrapper.getServerSideProps(
//   (store) =>
//     async ({ params }) => {
//       await store.dispatch(getEmployeeDetailAction(params.id));
//       return {
//         props: {},
//       };
//     }
// );