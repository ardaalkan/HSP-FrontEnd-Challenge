import React, { useState, useEffect } from "react";
import { Row, Col, Table, Modal, Input, Button } from "antd";
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
  const [show, setShow] = useState<boolean>(false);
  const [editUser, setEditUser] = useState<UserData | null>(null);

  useEffect(() => {
    if (fetchedData) {
      setUserData(fetchedData);
    }
  }, [fetchedData]);

  const Delete = (record: UserData) => {
    console.log("delete funcs");
    Modal.confirm({
      title: "Are you sure you want to delete this?",
      onOk: () => {
        setUserData((data) => {
          return data.filter((person) => person.id !== record.id);
        });
      },
    });
  };

  const Edit = (record: UserData) => {
    console.log("edit funcs");
    setEditUser({ ...record });
    setShow(true);
  };

  const resetEditing = () => {
    setEditUser(null);
    setShow(false);
  };

  const columns = [
    {
      key: "id",
      title: "ID",
      dataIndex: "id",
    },
    {
      key: "name",
      title: "Name",
      dataIndex: "name",
    },
    {
      key: "username",
      title: "Username",
      dataIndex: "username",
    },
    {
      key: "action",
      title: "Action",
      dataIndex: "action",

      render: (_, record: UserData) => {
        return (
          <>
            <DeleteOutlined
              style={{ color: "red", margin: "5px" }}
              onClick={() => Delete(record)}
            />
            <EditOutlined
              style={{ color: "blue", margin: "5px" }}
              onClick={() => Edit(record)}
            />
          </>
        );
      },
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
          <Button type="primary">Add New User</Button>
          <Table
            bordered
            dataSource={userData}
            columns={columns}
            pagination={{ pageSize: 10 }}
            rowKey={(record) => record.id.toString()}
          ></Table>
          <Modal
            title="Edit User"
            visible={show}
            okText="Save"
            onCancel={() => {
              resetEditing();
            }}
            onOk={() => {
              setUserData((prevData: UserData[]) => {
                return prevData.map((user) => {
                  if (user.id === editUser?.id) {
                    return editUser;
                  } else {
                    return user;
                  }
                });
              });
              resetEditing();
            }}
          >
            <Input
              style={{ margin: "10px" }}
              value={editUser?.name}
              onChange={(e) => {
                setEditUser((prevUser) => {
                  if (prevUser) {
                    return { ...prevUser, name: e.target.value };
                  }
                  return prevUser;
                });
              }}
            />
            <Input
              style={{ margin: "10px" }}
              value={editUser?.username}
              onChange={(e) => {
                setEditUser((prevUser) => {
                  if (prevUser) {
                    return { ...prevUser, username: e.target.value };
                  }
                  return prevUser;
                });
              }}
            />
          </Modal>
        </Col>
      </Row>
    </div>
  );
};

export default UsersComponent;
