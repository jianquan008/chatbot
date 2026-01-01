import React, { useState, useRef, useEffect } from 'react';
import { Card, Input, Button, List, Avatar, Typography, Space, Spin } from 'antd';
import { SendOutlined, UserOutlined, RobotOutlined } from '@ant-design/icons';
import type { ChatPanelProps } from '../types';

const { Text } = Typography;
const { TextArea } = Input;

const ChatPanel: React.FC<ChatPanelProps> = ({ 
  messages, 
  onSendMessage, 
  loading = false 
}) => {
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // 自动滚动到底部
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // 发送消息
  const handleSend = () => {
    if (inputValue.trim() && !loading) {
      onSendMessage(inputValue.trim());
      setInputValue('');
    }
  };

  // 处理回车发送
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  // 格式化时间
  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('zh-CN', { 
      hour: '2-digit', 
      minute: '2-digit' 
    });
  };

  return (
    <Card 
      title="与Iron对话" 
      style={{ height: '100%', display: 'flex', flexDirection: 'column' }}
      bodyStyle={{ flex: 1, display: 'flex', flexDirection: 'column', padding: 0 }}
    >
      {/* 消息列表 */}
      <div 
        style={{ 
          flex: 1, 
          overflowY: 'auto', 
          padding: '16px',
          maxHeight: '400px'
        }}
      >
        <List
          dataSource={messages}
          renderItem={(message) => (
            <List.Item
              style={{
                border: 'none',
                padding: '8px 0',
                justifyContent: message.type === 'user' ? 'flex-end' : 'flex-start'
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  flexDirection: message.type === 'user' ? 'row-reverse' : 'row',
                  maxWidth: '80%'
                }}
              >
                <Avatar
                  size="small"
                  icon={message.type === 'user' ? <UserOutlined /> : <RobotOutlined />}
                  style={{
                    backgroundColor: message.type === 'user' ? '#1890ff' : '#52c41a',
                    margin: message.type === 'user' ? '0 0 0 8px' : '0 8px 0 0'
                  }}
                />
                
                <div
                  style={{
                    backgroundColor: message.type === 'user' ? '#1890ff' : '#f6f6f6',
                    color: message.type === 'user' ? 'white' : '#333',
                    padding: '8px 12px',
                    borderRadius: '12px',
                    maxWidth: '100%',
                    wordBreak: 'break-word'
                  }}
                >
                  <div style={{ whiteSpace: 'pre-wrap', fontWeight: 'bold', color: 'red' }}>
                    {message.content}
                  </div>
                  <div 
                    style={{ 
                      fontSize: '11px', 
                      opacity: 0.7, 
                      marginTop: '4px',
                      textAlign: message.type === 'user' ? 'right' : 'left'
                    }}
                  >
                    {formatTime(message.timestamp)}
                  </div>
                </div>
              </div>
            </List.Item>
          )}
        />
        
        {/* 加载指示器 */}
        {loading && (
          <div style={{ textAlign: 'center', padding: '16px' }}>
            <Space>
              <Spin size="small" />
              <Text type="secondary">Iron正在思考...</Text>
            </Space>
          </div>
        )}
        
        <div ref={messagesEndRef} />
      </div>

      {/* 输入区域 */}
      <div style={{ padding: '16px', borderTop: '1px solid #f0f0f0' }}>
        <Space.Compact style={{ width: '100%' }}>
          <TextArea
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="输入您的问题..."
            disabled={loading}
            style={{ resize: 'none', height: '40px' }}
          />
          <Button
            type="primary"
            icon={<SendOutlined />}
            onClick={handleSend}
            disabled={!inputValue.trim() || loading}
            style={{ height: 'auto' }}
          >
            发送
          </Button>
        </Space.Compact>
      </div>
    </Card>
  );
};

export default ChatPanel;
