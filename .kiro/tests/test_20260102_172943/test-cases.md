# 测试用例 - 小鹏Iron数字助手平台

## 测试环境

| 配置项 | 值 | 说明 |
|--------|-----|------|
| 测试地址 | http://localhost:5173 | 应用访问地址 |
| 用户名 | | 无需登录 |
| 密码 | | 无需登录 |
| API 地址 | | 使用本地Mock |

## 应用信息

| Item | Value |
|------|-------|
| Project Directory | /Users/kb/devgenie-data/organizations/default_org/projects/chatbot/generated/admin |
| Start Command | nohup pnpm run dev > /tmp/dev-server.log 2>&1 & |
| Default Port | 5173 |
| Expected URL | http://localhost:5173 |
| Tech Stack | React + TypeScript + Vite + Ant Design |

## 启动步骤

```bash
cd /Users/kb/devgenie-data/organizations/default_org/projects/chatbot/generated/admin
# 智能检测 pnpm/npm
if command -v pnpm &> /dev/null; then
    pnpm install 2>&1 | tail -20
    nohup pnpm run dev > /tmp/dev-server.log 2>&1 &
else
    npm install 2>&1 | tail -20
    nohup npm run dev > /tmp/dev-server.log 2>&1 &
fi
sleep 8
cat /tmp/dev-server.log | grep -oE "http://[^[:space:]]+" | head -1
```

## 测试用例

### TC-001: 数字人界面展示

- **前置条件**: 应用已启动
- **验收标准**: AC1.1, AC1.2, AC1.3
- **步骤**:
  1. 访问应用URL
  2. 等待页面完全加载
  3. 验证页面标题显示"小鹏Iron数字助手平台"
  4. 验证界面使用Ant Design组件
  5. 验证布局清晰，符合企业级标准
- **预期结果**: 页面正确显示数字助手界面，布局清晰美观
- **截图**: TC001-01-initial.png

### TC-002: 基础交互功能 - 文本输入

- **前置条件**: TC-001通过
- **验收标准**: AC2.1
- **步骤**:
  1. 定位聊天输入框
  2. 输入测试消息"你好"
  3. 点击发送按钮或按Enter键
  4. 验证消息成功发送
- **预期结果**: 用户消息正确显示在聊天面板中
- **截图**: TC002-01-input.png, TC002-02-sent.png

### TC-003: 基础交互功能 - 数字人回复

- **前置条件**: TC-002通过
- **验收标准**: AC2.2, AC2.3
- **步骤**:
  1. 等待数字人回复
  2. 验证回复消息显示
  3. 检查对话历史记录
  4. 验证消息时间戳
- **预期结果**: 数字人使用Mock数据回复，对话历史正确显示
- **截图**: TC003-01-reply.png, TC003-02-history.png

### TC-004: 企业助手功能 - 快捷服务

- **前置条件**: TC-001通过
- **验收标准**: AC3.1, AC3.2, AC3.3
- **步骤**:
  1. 查看快捷服务选项
  2. 验证6个服务选项存在：信息查询、产品咨询、技术支持、预约服务、意见反馈、联系我们
  3. 点击"信息查询"服务
  4. 验证自动发送对应消息
  5. 验证Mock响应返回
- **预期结果**: 快捷服务正常工作，点击后触发对应对话流程
- **截图**: TC004-01-services.png, TC004-02-click.png, TC004-03-response.png

### TC-005: 响应式界面设计

- **前置条件**: TC-001通过
- **验收标准**: AC4.1, AC4.2, AC4.3
- **步骤**:
  1. 在桌面端浏览器中验证界面
  2. 调整浏览器窗口大小模拟不同屏幕
  3. 验证界面元素自适应
  4. 测试交互功能在小屏幕下的可用性
- **预期结果**: 界面在不同屏幕尺寸下正常显示和交互
- **截图**: TC005-01-desktop.png, TC005-02-mobile.png

### TC-006: Mock服务验证

- **前置条件**: TC-001通过
- **验收标准**: AC5.1, AC5.2, AC5.3
- **步骤**:
  1. 发送多条不同消息
  2. 验证回复使用预设Mock数据
  3. 测试企业服务查询
  4. 验证所有API调用使用本地Mock
- **预期结果**: 所有数据交互使用Mock实现，无真实后端调用
- **截图**: TC006-01-mock-data.png, TC006-02-service-mock.png

## 注意事项

- 测试用例数量：6个
- 每个用例必须对应验收标准
- 必须有截图验证
- 重点测试核心交互功能和Mock数据服务
