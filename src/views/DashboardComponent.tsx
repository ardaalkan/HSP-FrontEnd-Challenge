import React from "react";
import { Row, Col } from "antd";
import CardComponent from "../components/CardComponent";
import { useQuery } from "react-query";

interface UserData {
  id: number;
  name: string;
  username: string;
}

const fetchUsers = async (): Promise<UserData[]> => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  if (!res.ok) {
    throw new Error("Failed to fetch user data");
  }
  return res.json();
};

const DashboardComponent: React.FC = () => {
  const {
    data: userData,
    isLoading,
    error,
  } = useQuery<UserData[]>("userData", fetchUsers, { staleTime: 10000 });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error</div>;
  }

  if (userData) {
    console.log(userData);
  }

  const lastUser: UserData | undefined = userData?.[userData.length - 1];

  return (
    <div className="p-6">
      <Row gutter={[16, 16]}>
        <Col span={8}>
          <CardComponent
            title="Kullanici Verisi"
            description={`Toplam Kullanici Sayisi : ${userData?.length}`}
          />
        </Col>
        <Col span={8}>
          <CardComponent
            title="Son Kayit Olan Kullanicilar"
            description={`Son Kayit Olan Kullanici : ${lastUser?.name}`}
          />
        </Col>
        <Col span={8}>
          <CardComponent
            title="En Aktif Kullanicilar"
            description="En Aktif Kullanici Sayisi"
          />
        </Col>
      </Row>
    </div>
  );
};

export default DashboardComponent;
