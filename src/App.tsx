import { Layout, Typography, Space, Menu, Avatar } from "antd";
import { DashboardOutlined, UserOutlined } from "@ant-design/icons";
const { Header, Footer, Sider, Content } = Layout;
import { Routes, Route, Link } from "react-router-dom";
import DashboardComponent from "./components/DashboardComponent";
import UsersComponent from "./components/UsersComponent";

const url =
  "https://cdn.iconscout.com/icon/free/png-256/free-data-science-46-1170621.png";

interface MenuItem {
  key: string;
  text: string;
  icon: React.ReactNode;
  link: string;
}

const menuItems: MenuItem[] = [
  {
    key: "1",
    text: "Dashboard",
    icon: <DashboardOutlined style={{ fontSize: "20px" }} />,
    link: "/",
  },
  {
    key: "2",
    text: "Users",
    icon: <UserOutlined style={{ fontSize: "20px" }} />,
    link: "/users",
  },
];

const App: React.FC = () => {
  return (
    <Layout style={{ height: "100vh" }}>
      <Sider style={{ background: "white", borderRight: "1px solid #e8e8e8" }}>
        <div style={{ textAlign: "center", padding: "16px" }}>
          <img src={url} alt="Logo" style={{ maxWidth: "75%" }} />
        </div>
        <Menu theme="light" mode="vertical">
          {menuItems.map((item) => (
            <Menu.Item
              key={item.key}
              style={{ fontSize: "18px", fontWeight: "600" }}
              icon={item.icon}
            >
              <Link to={item.link}>{item.text}</Link>
            </Menu.Item>
          ))}
        </Menu>
      </Sider>
      <Layout>
        <Header
          style={{
            backgroundColor: "black",
            boxShadow: "1px 5px 15px rgba(0, 0, 0, 0.2)",
            height: "55px",
            display: "flex",
            alignItems: "center",
            padding: "0 20px",
          }}
        >
          <Space>
            <Avatar src={url} />
            <Typography.Text
              strong
              style={{ color: "white", fontSize: "20px", marginLeft: "10px" }}
            >
              HSP Frontend Challenge
            </Typography.Text>
          </Space>
        </Header>
        <Content>
          <Routes>
            <Route path="/" Component={DashboardComponent} />
            <Route path="/users" Component={UsersComponent} />
          </Routes>
        </Content>
        <Footer
          style={{
            borderTop: "1px solid #e8e8e8",
            position: "fixed",
            left: 0,
            bottom: 0,
            width: "100%",
            backgroundColor: "white",
            textAlign: "center",
          }}
        >
          Footer
        </Footer>
      </Layout>
    </Layout>
  );
};

export default App;
