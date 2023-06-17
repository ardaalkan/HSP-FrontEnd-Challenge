import React from 'react';
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';

interface CardComponentProps {
  title: string;
  description: string;
}

const CardComponent: React.FC<CardComponentProps> = ({
  title,
  description,
}) => {
  return (
    <div className="w-full h-60 bg-gradient-to-b from-gray-50 to-gray-200 flex flex-col rounded-md shadow-md ring-2 ring-gray-200 hover:scale-102 hover:duration-300 transition-all">
      <div className="flex flex-with-border">
        <span className="pl-6 pt-5">
          <Avatar icon={<UserOutlined />} />
        </span>
        <h2 className="pl-6 text-bold text-black text-2xl tracking-tight">
          {title}
        </h2>
      </div>
      <div className="pl-6 mt-6 font-normal text-base">{description}</div>
    </div>
  );
};

export default CardComponent;
