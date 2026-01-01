# 脚手架索引

供 Agent 查找和使用的脚手架代码模板。

> **注意**：脚手架是参考示例，Agent 应根据项目技术栈和具体需求进行适配，而非直接复制。

---

## 可用脚手架

| ID | 名称 | 描述 | 技术栈 | 目录 |
|----|------|------|--------|------|
| `yihu-login` | 翼虎登录页 | 企业级登录页面，含表单验证、记住我、SSO | HTML + CSS + JS | `yihu-login/` |

---

## 使用方式

### 1. 项目初始化时使用

当用户需求匹配某个脚手架时，直接复制脚手架代码作为起点：

```bash
# 复制脚手架到项目
cp -r .kiro/templates/scaffolds/yihu-login/* ./
```

### 2. 开发过程中参考

当实现类似功能时，参考脚手架代码的：
- 文件结构
- 样式规范
- 交互逻辑
- 最佳实践

---

## 脚手架详情

### yihu-login - 翼虎登录页

**适用场景：**
- 企业内部系统登录
- 需要单点登录（SSO）集成
- 需要记住我功能

**文件结构：**
```
yihu-login/
├── index.html      # 登录页 HTML
├── styles.css      # 样式（响应式、动画）
└── script.js       # 交互逻辑（表单验证、SSO）
```

**功能特性：**
- ✅ 响应式布局
- ✅ 表单验证
- ✅ 密码显示/隐藏
- ✅ 记住我（localStorage）
- ✅ SSO 单点登录支持
- ✅ 加载动画
- ✅ 错误提示

**SSO 集成点：**
```javascript
// script.js 中的 SSO 配置
const SSO_CONFIG = {
    enabled: true,
    authUrl: '/api/sso/auth',
    callbackUrl: '/api/sso/callback'
};
```

**样式变量：**
```css
/* styles.css 中的主题变量 */
:root {
    --primary-color: #1890ff;
    --success-color: #52c41a;
    --error-color: #ff4d4f;
}
```

---

## Agent 使用指南

### 匹配规则

当用户需求包含以下关键词时，考虑使用对应脚手架：

| 关键词 | 推荐脚手架 |
|--------|-----------|
| 登录、登录页、Login | `yihu-login` |
| 单点登录、SSO | `yihu-login` |
| 企业登录、内部系统 | `yihu-login` |

### 使用步骤

1. **检查脚手架索引** - 读取 `.kiro/templates/scaffolds/index.md`
2. **匹配用户需求** - 根据关键词找到合适的脚手架
3. **读取脚手架代码** - 读取对应目录下的文件
4. **适配项目需求** - 根据具体需求修改代码
5. **集成到项目** - 将代码放入正确的目录结构

### 注意事项

- 脚手架是起点，需要根据项目需求调整
- 保留脚手架的最佳实践（验证、安全、响应式）
- 更新配置项（API 地址、主题色等）
- 如果项目使用 React/Vue，需要转换为组件形式
