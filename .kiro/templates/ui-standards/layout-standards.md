# 布局规范

前端应用的默认布局规范，确保界面在各种屏幕尺寸下正确显示。

---

## 核心原则

1. **居中布局** - 主要内容区域默认居中显示
2. **响应式设计** - 适配不同屏幕尺寸
3. **最小高度** - 确保内容区域占满视口
4. **合理间距** - 使用一致的间距系统

---

## 根容器布局

### App 根组件（必须）

```tsx
// App.tsx 或 main.tsx
function App() {
  return (
    <div className="app-container">
      {/* 应用内容 */}
    </div>
  );
}
```

### 根容器样式（必须）

```css
/* 方式一：Flexbox 居中（推荐） */
.app-container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 16px;
  box-sizing: border-box;
}

/* 方式二：Grid 居中 */
.app-container {
  min-height: 100vh;
  display: grid;
  place-items: center;
  padding: 16px;
  box-sizing: border-box;
}
```

### 全局样式重置（必须）

```css
/* index.css 或 global.css */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html, body {
  width: 100%;
  min-height: 100vh;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

#root {
  width: 100%;
  min-height: 100vh;
}
```

---

## 页面布局模式

### 1. 单页应用（游戏、工具类）

内容居中，适合游戏、计算器等单一功能应用。

```css
.game-container,
.tool-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 24px;
  gap: 16px;
}
```

### 2. 仪表盘布局

顶部导航 + 侧边栏 + 主内容区。

```css
.dashboard-layout {
  display: grid;
  grid-template-rows: auto 1fr;
  grid-template-columns: 240px 1fr;
  min-height: 100vh;
}

.dashboard-header {
  grid-column: 1 / -1;
}

.dashboard-sidebar {
  grid-row: 2;
}

.dashboard-main {
  grid-row: 2;
  padding: 24px;
  overflow-y: auto;
}
```

### 3. 表单/登录页面

内容居中，带卡片容器。

```css
.auth-page {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
  background: #f5f5f5;
}

.auth-card {
  width: 100%;
  max-width: 400px;
  padding: 32px;
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
```

---

## 响应式断点

| 断点名称 | 宽度 | 用途 |
|----------|------|------|
| xs | < 480px | 手机竖屏 |
| sm | 480px - 768px | 手机横屏、小平板 |
| md | 768px - 1024px | 平板 |
| lg | 1024px - 1280px | 小桌面 |
| xl | > 1280px | 大桌面 |

### 响应式示例

```css
.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 16px;
}

@media (max-width: 768px) {
  .container {
    padding: 12px;
  }
}

@media (max-width: 480px) {
  .container {
    padding: 8px;
  }
}
```

---

## 内容尺寸规范

### 最大宽度

| 内容类型 | 最大宽度 | 说明 |
|----------|----------|------|
| 文章/博客 | 720px | 阅读舒适度 |
| 表单 | 480px | 输入便捷 |
| 卡片列表 | 1200px | 展示效率 |
| 全宽内容 | 100% | 仪表盘等 |

### 游戏/画布尺寸

```css
.game-board {
  /* 固定尺寸 */
  width: 400px;
  height: 400px;
  
  /* 或响应式 */
  width: min(400px, 90vw);
  height: min(400px, 90vw);
  aspect-ratio: 1;
}
```

---

## Tailwind CSS 布局类

如果项目使用 Tailwind CSS：

```html
<!-- 居中容器 -->
<div class="min-h-screen flex flex-col items-center justify-center p-4">
  <!-- 内容 -->
</div>

<!-- 响应式最大宽度 -->
<div class="w-full max-w-4xl mx-auto px-4">
  <!-- 内容 -->
</div>

<!-- 游戏容器 -->
<div class="min-h-screen flex items-center justify-center bg-gray-100">
  <div class="w-[400px] max-w-[90vw] aspect-square">
    <!-- 游戏内容 -->
  </div>
</div>
```

---

## 检查清单

开发完成后，确保以下布局要求：

- [ ] 根容器设置 `min-height: 100vh`
- [ ] 主要内容区域居中显示
- [ ] 全局样式重置（margin、padding、box-sizing）
- [ ] 响应式适配（至少支持手机和桌面）
- [ ] 内容区域有合适的 padding
- [ ] 游戏/画布有明确的尺寸定义

---

## 常见问题

### 内容靠左上角

**原因**：缺少居中样式
**解决**：添加 `display: flex; align-items: center; justify-content: center;`

### 内容超出视口

**原因**：缺少 `min-height: 100vh`
**解决**：根容器添加 `min-height: 100vh`

### 移动端显示异常

**原因**：缺少响应式设计
**解决**：使用相对单位和媒体查询
