import React from "react";
import { useSelector } from "react-redux";
import { selectEmployeeDetailState } from "../../Store/EmployeesSlice";
import Card from "../../Components/Card";
import CustomImage from "../../Components/CustomImage";
import CardLabel from "../../Components/Card/CardLabel";
import Button from "../../Components/Button";
import { useRouter } from "next/router";
import styled from "styled-components";

type Props = {};

const ProfileCardStyle = styled.div`
  margin: auto;
  display: block;
`;

const Profile = (props: Props) => {
  const detailData = useSelector(selectEmployeeDetailState);
  const router = useRouter();

  console.log(detailData, detailData?.telephone, "Employees");

  const handleGoBack = () => {
    router.back();
  };

  return (
    detailData && (
      <>
        <Button onClick={handleGoBack}>Ana sayfaya geri dön</Button>
        <ProfileCardStyle>
          <Card profileCard>
            <div>
              <CustomImage src={detailData.avatar} alt={detailData.fullname} />
              <CardLabel textTitle={"İsim"} text={detailData.fullname} />
              <CardLabel textTitle={"Yaş"} text={detailData.age} />
              <CardLabel textTitle={"Departman"} text={detailData.department} />
              <CardLabel textTitle={"Oy Sayısı"} text={detailData.vote} />
              <CardLabel textTitle={"Address"} text={detailData.address} />
              <CardLabel textTitle={"Doğum Günü"} text={detailData.birthday} />
              <CardLabel
                textTitle={"Telefon Numarası"}
                text={detailData.telephone}
              />
              <CardLabel textTitle={"Mail Adresi"} text={detailData.email} />
            </div>
          </Card>
        </ProfileCardStyle>
      </>
    )
  );
};

export default Profile;
