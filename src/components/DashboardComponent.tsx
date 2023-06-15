import React from "react";
import { Row, Col, Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";

const DashboardComponent: React.FC = () => {
  return (
    <div className="p-6">
      <Row gutter={[16, 16]}>
        <Col span={8}>
          <div className="w-full h-60 bg-gradient-to-b from-gray-100 to-gray-200 flex flex-col rounded-md shadow-xl ring-2 ring-gray-200 hover:scale-102 hover:duration-300 transition-all">
            <div className="flex flex-with-border">
              <span className="pl-6 pt-5">
                <Avatar icon={<UserOutlined />} />
              </span>
              <h2 className="pl-6 text-bold text-black text-2xl tracking-tight">
                Kullanici Sayisi
              </h2>
            </div>
            <div className="pl-6 mt-6 font-normal text-base">
              Toplam Kullanici Sayisi Verileri
            </div>
          </div>
        </Col>
        <Col span={8}>
          <div className="w-full h-60 bg-gradient-to-b from-gray-100 to-gray-200 flex flex-col rounded-md shadow-xl ring-2 ring-gray-200 hover:scale-102 hover:duration-300 transition-all">
            <div className="flex flex-with-border">
              <span className="pl-6 pt-5">
                <Avatar icon={<UserOutlined />} />
              </span>
              <h2 className="pl-6 text-bold text-black text-2xl tracking-tight">
                Kullanici Sayisi
              </h2>
            </div>
            <div className="pl-6 mt-6 font-normal text-base">
              Toplam Kullanici Sayisi Verileri
            </div>
          </div>
        </Col>
        <Col span={8}>
          <div className="w-full h-60 bg-gradient-to-b from-gray-100 to-gray-200 flex flex-col rounded-md shadow-xl ring-2 ring-gray-200 hover:scale-102 hover:duration-300 transition-all">
            <div className="flex flex-with-border">
              <span className="pl-6 pt-5">
                <Avatar icon={<UserOutlined />} />
              </span>
              <h2 className="pl-6 text-bold text-black text-2xl tracking-tight">
                Kullanici Sayisi
              </h2>
            </div>
            <div className="pl-6 mt-6 font-normal text-base">
              Toplam Kullanici Sayisi Verileri
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default DashboardComponent;
