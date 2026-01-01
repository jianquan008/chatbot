import React from 'react';
import { Card, Row, Col, Button, Typography } from 'antd';
import { 
  SearchOutlined, 
  MessageOutlined, 
  ToolOutlined, 
  CalendarOutlined,
  CommentOutlined,
  PhoneOutlined
} from '@ant-design/icons';
import type { QuickServicesProps } from '../types';
import { mockServices } from '../data/mockData';

const { Title, Text } = Typography;

// 图标映射
const iconMap = {
  SearchOutlined: <SearchOutlined />,
  MessageOutlined: <MessageOutlined />,
  ToolOutlined: <ToolOutlined />,
  CalendarOutlined: <CalendarOutlined />,
  CommentOutlined: <CommentOutlined />,
  PhoneOutlined: <PhoneOutlined />
};

const QuickServices: React.FC<QuickServicesProps> = ({ onServiceClick }) => {
  return (
    <Card title="快捷服务" style={{ marginBottom: '16px' }}>
      <Row gutter={[12, 12]}>
        {mockServices.map((service) => (
          <Col xs={12} sm={8} md={6} key={service.id}>
            <Button
              type="default"
              size="large"
              onClick={() => onServiceClick(service.id)}
              style={{
                width: '100%',
                height: 'auto',
                padding: '12px 8px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                border: '1px solid #d9d9d9',
                borderRadius: '8px',
                transition: 'all 0.3s ease'
              }}
              className="service-button"
            >
              <div 
                style={{ 
                  fontSize: '24px', 
                  color: '#1890ff', 
                  marginBottom: '8px' 
                }}
              >
                {iconMap[service.icon as keyof typeof iconMap]}
              </div>
              
              <Title 
                level={5} 
                style={{ 
                  margin: 0, 
                  fontSize: '14px',
                  textAlign: 'center',
                  lineHeight: '1.2'
                }}
              >
                {service.name}
              </Title>
              
              <Text 
                type="secondary" 
                style={{ 
                  fontSize: '12px',
                  textAlign: 'center',
                  marginTop: '4px',
                  lineHeight: '1.2'
                }}
              >
                {service.description}
              </Text>
            </Button>
          </Col>
        ))}
      </Row>

      <style>
        {`
          .service-button:hover {
            border-color: #1890ff !important;
            box-shadow: 0 2px 8px rgba(24, 144, 255, 0.2) !important;
            transform: translateY(-2px);
          }
          
          .service-button:active {
            transform: translateY(0);
          }
        `}
      </style>
    </Card>
  );
};

export default QuickServices;
