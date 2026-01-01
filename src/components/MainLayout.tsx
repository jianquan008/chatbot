import React, { useState, useEffect } from 'react';
import { Layout, Row, Col, Typography } from 'antd';
import DigitalAssistant from './DigitalAssistant';
import ChatPanel from './ChatPanel';
import QuickServices from './QuickServices';
import { useChat } from '../hooks/useChat';
import type { AssistantStatus } from '../types';

const { Header, Content } = Layout;
const { Title } = Typography;

const MainLayout: React.FC = () => {
  const { messages, sendMessage, loading } = useChat();
  const [assistantStatus, setAssistantStatus] = useState<AssistantStatus>('idle');

  // 根据loading状态更新数字人状态
  useEffect(() => {
    if (loading) {
      setAssistantStatus('listening');
      
      // 模拟思考过程
      const timer = setTimeout(() => {
        setAssistantStatus('speaking');
      }, 1000);

      return () => clearTimeout(timer);
    } else {
      // 延迟回到idle状态，让用户看到speaking状态
      const timer = setTimeout(() => {
        setAssistantStatus('idle');
      }, 500);

      return () => clearTimeout(timer);
    }
  }, [loading]);

  // 处理快捷服务点击
  const handleServiceClick = async (serviceId: string) => {
    try {
      setAssistantStatus('listening');
      
      // 服务名称映射
      const serviceNames: Record<string, string> = {
        query: '信息查询',
        consult: '产品咨询', 
        support: '技术支持',
        appointment: '预约服务',
        feedback: '意见反馈',
        contact: '联系我们'
      };
      
      await sendMessage(serviceNames[serviceId] || serviceId);
    } catch (error) {
      console.error('处理服务点击失败:', error);
      setAssistantStatus('idle');
    }
  };

  return (
    <Layout style={{ minHeight: '100vh', background: '#f5f5f5' }}>
      <Header style={{ 
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        padding: '0 24px',
        display: 'flex',
        alignItems: 'center'
      }}>
        <Title 
          level={2} 
          style={{ 
            color: 'white', 
            margin: 0,
            fontWeight: 'bold'
          }}
        >
          小鹏Iron数字助手平台
        </Title>
      </Header>

      <Content style={{ padding: '24px' }}>
        <Row gutter={[24, 24]} style={{ height: '100%' }}>
          {/* 桌面端：左侧数字人，右侧聊天 */}
          <Col xs={24} lg={8}>
            <div style={{ position: 'sticky', top: '24px' }}>
              <DigitalAssistant 
                status={assistantStatus}
              />
              
              {/* 快捷服务在桌面端显示在数字人下方 */}
              <div style={{ marginTop: '24px', display: window.innerWidth >= 992 ? 'block' : 'none' }}>
                <QuickServices onServiceClick={handleServiceClick} />
              </div>
            </div>
          </Col>

          <Col xs={24} lg={16}>
            <div style={{ height: '600px', display: 'flex', flexDirection: 'column' }}>
              {/* 移动端：快捷服务显示在聊天面板上方 */}
              <div style={{ display: window.innerWidth < 992 ? 'block' : 'none', marginBottom: '16px' }}>
                <QuickServices onServiceClick={handleServiceClick} />
              </div>
              
              <div style={{ flex: 1 }}>
                <ChatPanel
                  messages={messages}
                  onSendMessage={sendMessage}
                  loading={loading}
                />
              </div>
            </div>
          </Col>
        </Row>
      </Content>
    </Layout>
  );
};

export default MainLayout;
