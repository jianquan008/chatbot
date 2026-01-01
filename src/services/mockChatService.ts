import type { Message } from '../types';
import { mockReplies, serviceReplies } from '../data/mockData';

export class MockChatService {
  // 模拟网络延迟
  private delay(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  // 生成消息ID
  private generateId(): string {
    return Date.now().toString() + Math.random().toString(36).substr(2, 9);
  }

  // 发送消息并获取回复
  async sendMessage(text: string): Promise<Message> {
    // 模拟网络延迟 800-1500ms
    await this.delay(800 + Math.random() * 700);

    // 查找匹配的回复
    const normalizedText = text.toLowerCase().trim();
    let reply = mockReplies.default;

    // 检查是否有精确匹配
    for (const [key, value] of Object.entries(mockReplies)) {
      if (normalizedText.includes(key.toLowerCase())) {
        reply = value;
        break;
      }
    }

    // 如果没有匹配，使用智能回复
    if (reply === mockReplies.default) {
      if (normalizedText.includes('小鹏') || normalizedText.includes('xpeng')) {
        reply = '小鹏汽车致力于通过数据驱动智能电动汽车的变革，为用户提供更智能的出行体验。有什么具体问题我可以为您解答？';
      } else if (normalizedText.includes('iron')) {
        reply = 'Iron是小鹏汽车的智能数字助手，我可以为您提供全方位的服务支持。请告诉我您需要什么帮助？';
      }
    }

    return {
      id: this.generateId(),
      type: 'assistant',
      content: reply,
      timestamp: new Date()
    };
  }

  // 获取快捷服务回复
  async getQuickReply(serviceId: string): Promise<Message> {
    // 模拟网络延迟
    await this.delay(500 + Math.random() * 500);

    const reply = serviceReplies[serviceId] || '抱歉，该服务暂时不可用，请稍后再试。';

    return {
      id: this.generateId(),
      type: 'assistant',
      content: reply,
      timestamp: new Date()
    };
  }
}

// 导出单例实例
export const mockChatService = new MockChatService();
