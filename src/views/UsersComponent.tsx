import React, { useState, useEffect } from "react";
import { Row, Col, Table, Modal } from "antd";
import { useQuery } from "react-query";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";

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
    data: fetchedData,
    isLoading,
    error,
  } = useQuery<UserData[]>("userData", fetchUsers, { staleTime: 50000 });

  const [userData, setUserData] = useState<UserData[]>([]);

  useEffect(() => {
    if (fetchedData) {
      setUserData(fetchedData);
    }
  }, [fetchedData]);

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
    {
      title: "Action",
      dataIndex: "action",
      render: (_, record: UserData) => {
        return (
          <>
            <DeleteOutlined
              style={{ color: "red", margin: "5px" }}
              onClick={() => Delete(record)}
            />
            {/* <EditOutlined
              style={{ color: "blue", margin: "5px" }}
              onClick={() => {}}
            /> */}
          </>
        );
      },
    },
  ];

  const Delete = (record: UserData) => {
    console.log("delete funcs")
    Modal.confirm({
      title: "Are you sure you want to delete this?",
      onOk: () => {
        setUserData((data) => {
          return data.filter((person) => person.id !== record.id);
        });
      },
    });
  };

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
            pagination={{ pageSize: 10 }}
          ></Table>
        </Col>
      </Row>
    </div>
  );
};

export default UsersComponent;
