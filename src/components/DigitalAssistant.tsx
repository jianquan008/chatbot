import React from 'react';
import { Avatar, Card, Typography } from 'antd';
import { RobotOutlined, SoundOutlined, AudioOutlined } from '@ant-design/icons';
import type { DigitalAssistantProps } from '../types';

const { Title, Text } = Typography;

const DigitalAssistant: React.FC<DigitalAssistantProps> = ({ 
  status = 'idle', 
  avatar 
}) => {
  // 根据状态获取图标和颜色
  const getStatusConfig = () => {
    switch (status) {
      case 'speaking':
        return {
          icon: <SoundOutlined />,
          color: '#52c41a',
          text: '正在回复...',
          pulse: true
        };
      case 'listening':
        return {
          icon: <AudioOutlined />,
          color: '#1890ff',
          text: '正在聆听...',
          pulse: true
        };
      default:
        return {
          icon: <RobotOutlined />,
          color: '#666',
          text: '待机中',
          pulse: false
        };
    }
  };

  const statusConfig = getStatusConfig();

  return (
    <Card 
      className="digital-assistant-card"
      style={{
        textAlign: 'center',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        border: 'none',
        borderRadius: '16px',
        color: 'white'
      }}
    >
      <div style={{ marginBottom: '16px' }}>
        <div 
          style={{
            position: 'relative',
            display: 'inline-block',
            marginBottom: '16px'
          }}
        >
          <Avatar
            size={120}
            src={avatar}
            icon={!avatar && <RobotOutlined />}
            style={{
              backgroundColor: statusConfig.color,
              border: `3px solid ${statusConfig.color}`,
              animation: statusConfig.pulse ? 'pulse 2s infinite' : 'none'
            }}
          />
          
          {/* 状态指示器 */}
          <div
            style={{
              position: 'absolute',
              bottom: '8px',
              right: '8px',
              width: '24px',
              height: '24px',
              borderRadius: '50%',
              backgroundColor: statusConfig.color,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontSize: '12px',
              border: '2px solid white',
              animation: statusConfig.pulse ? 'pulse 2s infinite' : 'none'
            }}
          >
            {statusConfig.icon}
          </div>
        </div>
      </div>

      <Title level={3} style={{ color: 'white', marginBottom: '8px' }}>
        小鹏Iron
      </Title>
      
      <Text style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '16px' }}>
        数字人员工
      </Text>
      
      <div style={{ marginTop: '16px' }}>
        <Text 
          style={{ 
            color: statusConfig.color === '#666' ? 'rgba(255, 255, 255, 0.6)' : statusConfig.color,
            fontSize: '14px',
            fontWeight: 500
          }}
        >
          {statusConfig.text}
        </Text>
      </div>

      <style>
        {`
          @keyframes pulse {
            0% {
              transform: scale(1);
              opacity: 1;
            }
            50% {
              transform: scale(1.05);
              opacity: 0.8;
            }
            100% {
              transform: scale(1);
              opacity: 1;
            }
          }
        `}
      </style>
    </Card>
  );
};

export default DigitalAssistant;
