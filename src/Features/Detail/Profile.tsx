import React from "react";
import { useSelector } from "react-redux";
import { selectEmployeeDetailState } from "../../Store/EmployeesSlice";
import Card from "../../Components/Card";
import CustomImage from "../../Components/CustomImage";
import CardLabel from "../../Components/Card/CardLabel";
import Button from "../../Components/Button";
import { useRouter } from "next/router";
import styled from "styled-components";
import CardTitle from "../../Components/Card/CardTitle";

type Props = {};

const ProfileCardStyle = styled.div`
  margin: auto;
  display: block;
  margin-top: 10%;
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
        <ProfileCardStyle>
          <Card profileCard noClickable>
            <div>
              <CardTitle text={detailData.fullname} />
              <CardLabel textTitle={"Yaş"} text={detailData.age} />
              <CardLabel textTitle={"Departman"} text={detailData.department} />
              <CardLabel textTitle={"Oy Sayısı"} text={detailData.vote} />
              <CardLabel textTitle={"Yaşadığı Şehir"} text={detailData.city} />
              <CardLabel textTitle={"Adres"} text={detailData.address} />
              <CardLabel textTitle={"Doğum Günü"} text={detailData.birthday} />
              <CardLabel
                textTitle={"Telefon Numarası"}
                text={detailData.telephone}
              />
              <CardLabel textTitle={"Mail Adresi"} text={detailData.email} />
            </div>
            <Button onClick={handleGoBack}>
              <CardLabel
                icon="back"
                text={"Ana sayfaya geri dön"}
                buttonContent
              />
            </Button>
          </Card>
        </ProfileCardStyle>
      </>
    )
  );
};

export default Profile;
