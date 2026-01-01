import { useState, useEffect, useCallback } from 'react';
import type { Message, UseChatReturn } from '../types';
import { mockChatService } from '../services/mockChatService';

const STORAGE_KEY = 'xpeng-iron-chat-history';

export const useChat = (): UseChatReturn => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);

  // 从localStorage加载历史消息
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsedMessages = JSON.parse(saved).map((msg: Partial<Message>) => ({
          ...msg,
          timestamp: new Date(msg.timestamp || Date.now())
        })) as Message[];
        setMessages(parsedMessages);
      } else {
        // 初始欢迎消息
        const welcomeMessage: Message = {
          id: 'welcome',
          type: 'assistant',
          content: '您好！我是小鹏Iron数字人员工，很高兴为您服务！请问有什么可以帮助您的吗？',
          timestamp: new Date()
        };
        setMessages([welcomeMessage]);
      }
    } catch (error) {
      console.error('加载聊天历史失败:', error);
      // 如果加载失败，显示欢迎消息
      const welcomeMessage: Message = {
        id: 'welcome',
        type: 'assistant',
        content: '您好！我是小鹏Iron数字人员工，很高兴为您服务！请问有什么可以帮助您的吗？',
        timestamp: new Date()
      };
      setMessages([welcomeMessage]);
    }
  }, []);

  // 保存消息到localStorage
  const saveMessages = useCallback((newMessages: Message[]) => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(newMessages));
    } catch (error) {
      console.error('保存聊天历史失败:', error);
    }
  }, []);

  // 发送消息
  const sendMessage = useCallback(async (text: string) => {
    if (!text.trim() || loading) return;

    setLoading(true);

    // 创建用户消息
    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: text.trim(),
      timestamp: new Date()
    };

    // 立即添加用户消息
    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);
    saveMessages(updatedMessages);

    try {
      // 获取AI回复
      const assistantMessage = await mockChatService.sendMessage(text);
      
      // 添加AI回复
      const finalMessages = [...updatedMessages, assistantMessage];
      setMessages(finalMessages);
      saveMessages(finalMessages);
    } catch (error) {
      console.error('发送消息失败:', error);
      
      // 添加错误消息
      const errorMessage: Message = {
        id: Date.now().toString() + '_error',
        type: 'assistant',
        content: '抱歉，我暂时无法回复您的消息，请稍后再试。',
        timestamp: new Date()
      };
      
      const errorMessages = [...updatedMessages, errorMessage];
      setMessages(errorMessages);
      saveMessages(errorMessages);
    } finally {
      setLoading(false);
    }
  }, [messages, loading, saveMessages]);

  return {
    messages,
    sendMessage,
    loading
  };
};
