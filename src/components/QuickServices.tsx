import React from 'react';
import { Card, Button, Dropdown, Space } from 'antd';
import { 
  SearchOutlined, 
  MessageOutlined, 
  ToolOutlined, 
  CalendarOutlined,
  DownOutlined
} from '@ant-design/icons';
import type { QuickServicesProps } from '../types';
import { mockServices } from '../data/mockData';

// 图标映射
const iconMap = {
  SearchOutlined: <SearchOutlined />,
  MessageOutlined: <MessageOutlined />,
  ToolOutlined: <ToolOutlined />,
  CalendarOutlined: <CalendarOutlined />
};

const QuickServices: React.FC<QuickServicesProps> = ({ onServiceClick }) => {
  const menuItems = mockServices.map((service) => ({
    key: service.id,
    label: (
      <Space>
        <span style={{ fontSize: '16px', color: '#1890ff' }}>
          {iconMap[service.icon as keyof typeof iconMap]}
        </span>
        <div>
          <div style={{ fontWeight: 500 }}>{service.name}</div>
          <div style={{ fontSize: '12px', color: '#666' }}>{service.description}</div>
        </div>
      </Space>
    ),
    onClick: () => onServiceClick(service.id)
  }));

  return (
    <Card 
      title="快捷服务" 
      style={{ 
        height: '100%',
        display: 'flex',
        flexDirection: 'column'
      }}
      bodyStyle={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        padding: '16px'
      }}
    >
      <Dropdown
        menu={{ items: menuItems }}
        placement="bottomLeft"
        trigger={['click']}
      >
        <Button 
          type="primary" 
          size="large"
          style={{
            width: '100%',
            height: '48px',
            fontSize: '16px'
          }}
        >
          <Space>
            选择服务
            <DownOutlined />
          </Space>
        </Button>
      </Dropdown>
    </Card>
  );
};

export default QuickServices;
