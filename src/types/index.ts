// 消息类型
export interface Message {
  id: string;
  type: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

// 企业服务类型
export interface Service {
  id: string;
  name: string;
  icon: string;
  description: string;
}

// 数字人状态类型
export type AssistantStatus = 'idle' | 'speaking' | 'listening';

// 应用状态类型
export interface AppState {
  messages: Message[];
  assistantStatus: AssistantStatus;
  loading: boolean;
}

// 聊天Hook返回类型
export interface UseChatReturn {
  messages: Message[];
  sendMessage: (text: string) => Promise<void>;
  loading: boolean;
}

// 组件Props类型
export interface DigitalAssistantProps {
  status: AssistantStatus;
  avatar?: string;
}

export interface ChatPanelProps {
  messages: Message[];
  onSendMessage: (text: string) => void;
  loading?: boolean;
}

export interface QuickServicesProps {
  onServiceClick: (serviceId: string) => void;
}
