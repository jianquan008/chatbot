import type { Service } from '../types';

// 预设对话回复
export const mockReplies: Record<string, string> = {
  '你好': '您好！我是小鹏Iron数字人员工，很高兴为您服务！',
  'hello': 'Hello! I am XPeng Iron digital assistant, how can I help you?',
  '帮助': '我可以为您提供以下服务：\n• 企业信息查询\n• 产品咨询\n• 技术支持\n• 预约服务',
  '查询': '请问您需要查询什么信息？我可以帮您查询产品信息、订单状态、服务网点等。',
  '咨询': '我很乐意为您提供咨询服务，请告诉我您的具体需求。',
  '预约': '请选择您需要预约的服务类型，我会为您安排合适的时间。',
  default: '感谢您的咨询，我正在为您查询相关信息，请稍候...'
};

// 企业服务列表
export const mockServices: Service[] = [
  {
    id: 'query',
    name: '信息查询',
    icon: 'SearchOutlined',
    description: '查询产品信息、订单状态等'
  },
  {
    id: 'consult',
    name: '产品咨询',
    icon: 'MessageOutlined',
    description: '获取专业的产品咨询服务'
  },
  {
    id: 'support',
    name: '技术支持',
    icon: 'ToolOutlined',
    description: '获取技术支持和解决方案'
  },
  {
    id: 'appointment',
    name: '预约服务',
    icon: 'CalendarOutlined',
    description: '预约线下服务或会议'
  },
  {
    id: 'feedback',
    name: '意见反馈',
    icon: 'CommentOutlined',
    description: '提交您的宝贵意见和建议'
  },
  {
    id: 'contact',
    name: '联系我们',
    icon: 'PhoneOutlined',
    description: '获取联系方式和客服支持'
  }
];

// 服务快捷回复
export const serviceReplies: Record<string, string> = {
  query: '我可以为您查询以下信息：\n• 产品规格和价格\n• 订单状态和物流\n• 服务网点分布\n• 保修政策详情\n\n请告诉我您具体需要查询什么？',
  consult: '欢迎咨询小鹏Iron相关产品！\n• 车型配置对比\n• 购车优惠政策\n• 金融方案介绍\n• 试驾预约\n\n请问您对哪方面比较感兴趣？',
  support: '技术支持团队为您服务：\n• 软件使用指导\n• 硬件故障排查\n• 系统升级协助\n• 远程诊断服务\n\n请描述您遇到的具体问题。',
  appointment: '预约服务已为您开启：\n• 试驾体验预约\n• 维保服务预约\n• 销售顾问会面\n• 技术培训预约\n\n请选择您需要的服务类型和时间。',
  feedback: '感谢您的反馈！\n• 产品使用体验\n• 服务质量评价\n• 功能改进建议\n• 其他意见建议\n\n您的每一条反馈都很重要，请详细描述。',
  contact: '联系方式如下：\n• 客服热线：400-819-3388\n• 官方网站：www.xiaopeng.com\n• 微信公众号：小鹏汽车\n• 官方邮箱：service@xiaopeng.com\n\n工作时间：9:00-18:00（周一至周日）'
};
