import React from "react";
import { Row, Col, Table } from "antd";
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

const UsersComponent: React.FC = () => {
  const {
    data: userData,
    isLoading,
    error,
  } = useQuery<UserData[]>("userData", fetchUsers, { staleTime: 10000 });

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
    },
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Username",
      dataIndex: "username",
    },
  ];

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error</div>;
  }

  if (userData) {
    console.log(userData);
  }
  return (
    <div className="p-6">
      <Row gutter={1} style={{ marginTop: 10 }}>
        <Col span={18}>
          <Table
            bordered
            dataSource={userData}
            columns={columns}
            pagination={{ pageSize: 5 }}
          ></Table>
        </Col>
      </Row>
    </div>
  );
};

export default UsersComponent;
