# 前端安全检查清单

供 Review Agent 审查代码时使用的安全检查清单。

---

## 1. XSS（跨站脚本攻击）防护

### 1.1 输出编码
- [ ] 使用框架自带的转义机制（React JSX、Vue 模板）
- [ ] 避免使用 `dangerouslySetInnerHTML`（React）或 `v-html`（Vue）
- [ ] 如必须使用，确保内容经过 DOMPurify 等库净化

### 1.2 用户输入处理
- [ ] 所有用户输入在显示前进行转义
- [ ] URL 参数在使用前进行验证和编码
- [ ] 富文本编辑器输出经过白名单过滤

### 1.3 DOM 操作
- [ ] 避免直接使用 `innerHTML`、`outerHTML`
- [ ] 使用 `textContent` 替代 `innerHTML` 显示纯文本
- [ ] 动态创建元素使用 `createElement` + `textContent`

---

## 2. CSRF（跨站请求伪造）防护

- [ ] 所有状态修改请求使用 POST/PUT/DELETE
- [ ] 请求携带 CSRF Token（Cookie 或 Header）
- [ ] 验证 `Origin` 或 `Referer` 头
- [ ] 敏感操作使用二次确认

---

## 3. 敏感数据处理

### 3.1 存储安全
- [ ] 敏感数据不存储在 `localStorage`/`sessionStorage`
- [ ] 密码、Token 等不在前端明文存储
- [ ] 使用 `httpOnly` Cookie 存储认证信息

### 3.2 传输安全
- [ ] 所有 API 请求使用 HTTPS
- [ ] 敏感数据不通过 URL 参数传递
- [ ] 文件上传验证类型和大小

### 3.3 日志安全
- [ ] `console.log` 不输出敏感信息
- [ ] 生产环境移除调试日志
- [ ] 错误信息不暴露系统细节

---

## 4. 认证与授权

### 4.1 认证安全
- [ ] 登录失败有频率限制提示
- [ ] 密码输入框使用 `type="password"`
- [ ] 支持密码强度检测
- [ ] 登出时清除所有本地状态

### 4.2 会话管理
- [ ] Token 过期有刷新机制
- [ ] 检测到异常时强制重新登录
- [ ] 多标签页会话状态同步

### 4.3 权限控制
- [ ] 前端路由有权限守卫
- [ ] UI 元素根据权限显示/隐藏
- [ ] 不依赖前端权限控制（后端必须验证）

---

## 5. 第三方依赖安全

- [ ] 定期运行 `npm audit` / `pnpm audit`
- [ ] 不使用已知有漏洞的依赖版本
- [ ] CDN 资源使用 SRI（Subresource Integrity）
- [ ] 第三方脚本使用 `sandbox` 隔离

---

## 6. 安全 HTTP 头

检查是否配置以下响应头（通常在服务端配置）：

| Header | 推荐值 | 作用 |
|--------|--------|------|
| `Content-Security-Policy` | 限制资源来源 | 防止 XSS |
| `X-Content-Type-Options` | `nosniff` | 防止 MIME 嗅探 |
| `X-Frame-Options` | `DENY` 或 `SAMEORIGIN` | 防止点击劫持 |
| `Strict-Transport-Security` | `max-age=31536000` | 强制 HTTPS |
| `X-XSS-Protection` | `1; mode=block` | 浏览器 XSS 过滤 |

---

## 7. 常见安全反模式

### ❌ 避免
```javascript
// 危险：直接拼接 HTML
element.innerHTML = '<div>' + userInput + '</div>';

// 危险：eval 执行用户输入
eval(userInput);

// 危险：URL 跳转未验证
window.location.href = userInput;

// 危险：敏感信息存储
localStorage.setItem('token', accessToken);
```

### ✅ 推荐
```javascript
// 安全：使用 textContent
element.textContent = userInput;

// 安全：使用 JSON.parse 替代 eval
const data = JSON.parse(jsonString);

// 安全：验证 URL 白名单
if (allowedUrls.includes(url)) {
  window.location.href = url;
}

// 安全：使用 httpOnly Cookie（服务端设置）
// 前端不直接处理 Token 存储
```

---

## 8. 审查检查项汇总

| 类别 | 检查项 | 严重程度 |
|------|--------|----------|
| XSS | 使用 `dangerouslySetInnerHTML` 或 `v-html` | 🔴 高 |
| XSS | 直接使用 `innerHTML` | 🔴 高 |
| XSS | `eval()` 或 `new Function()` | 🔴 高 |
| 数据泄露 | `console.log` 输出敏感信息 | 🟡 中 |
| 数据泄露 | `localStorage` 存储 Token | 🟡 中 |
| 认证 | 密码明文传输或存储 | 🔴 高 |
| 依赖 | 使用有已知漏洞的依赖 | 🟡 中 |
| 配置 | 未配置 CSP 头 | 🟡 中 |

---

## 使用说明

Review Agent 在审查代码时：
1. 对照此清单检查代码
2. 在 summary.md 中报告发现的安全问题
3. 按严重程度分类：🔴 高 / 🟡 中 / 🟢 低
4. 提供修复建议
