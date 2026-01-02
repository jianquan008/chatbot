import React, { useState, useEffect } from 'react';
import { Layout, Row, Col, Typography } from 'antd';
import ChatPanel from './ChatPanel';
import QuickServices from './QuickServices';
import { useChat } from '../hooks/useChat';
import type { AssistantStatus } from '../types';

const { Header, Content } = Layout;
const { Title } = Typography;

const MainLayout: React.FC = () => {
  const { messages, sendMessage, loading } = useChat();
  const [, setAssistantStatus] = useState<AssistantStatus>('idle');

  // 根据loading状态更新数字人状态
  useEffect(() => {
    if (loading) {
      // 使用setTimeout避免同步setState
      const listenTimer = setTimeout(() => {
        setAssistantStatus('listening');
      }, 0);
      
      // 模拟思考过程
      const speakTimer = setTimeout(() => {
        setAssistantStatus('speaking');
      }, 1000);

      return () => {
        clearTimeout(listenTimer);
        clearTimeout(speakTimer);
      };
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
    <Layout style={{ 
      width: '100%',
      maxWidth: '1280px',
      minHeight: '100vh', 
      background: 'var(--bg-secondary)',
      margin: '0 auto'
    }}>
      <Header style={{ 
        background: 'linear-gradient(135deg, var(--primary-500) 0%, var(--primary-600) 100%)',
        padding: '0 var(--spacing-6)',
        display: 'flex',
        alignItems: 'center',
        height: '64px',
        boxShadow: 'var(--shadow-sm)'
      }}>
        <Title 
          level={2} 
          style={{ 
            color: 'var(--text-inverse)', 
            margin: 0,
            fontWeight: 'var(--font-bold)',
            fontSize: 'var(--text-2xl)'
          }}
        >
          小鹏Iron数字助手平台
        </Title>
      </Header>

      <Content style={{ padding: 'var(--spacing-6)' }}>
        <Row gutter={[24, 24]} style={{ height: 'calc(100vh - 112px)' }}>
          <Col span={8}>
            <div style={{ 
              height: '100%',
              display: 'flex',
              flexDirection: 'column'
            }}>
              <div style={{ 
                flex: '1 1 auto', 
                display: 'flex',
                flexDirection: 'column'
              }}>
                <QuickServices onServiceClick={handleServiceClick} />
              </div>

              {/* XPeng Logo */}
              <div style={{ 
                flex: '0 0 auto',
                marginTop: 'var(--spacing-4)',
                padding: 'var(--spacing-4)',
                textAlign: 'center',
                backgroundColor: 'var(--bg-primary)',
                borderRadius: 'var(--radius-lg)',
                border: '1px solid var(--border-default)',
                boxShadow: 'var(--shadow-sm)'
              }}>
                <img 
                  src="/xpeng-logo.png" 
                  alt="XPeng" 
                  style={{ 
                    height: '40px',
                    maxWidth: '120px',
                    objectFit: 'contain'
                  }} 
                />
              </div>
            </div>
          </Col>

          <Col span={16}>
            <div style={{ 
              height: '100%', 
              display: 'flex', 
              flexDirection: 'column'
            }}>
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
