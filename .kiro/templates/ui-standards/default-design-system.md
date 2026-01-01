# 默认设计系统

**当没有提供 UI 设计图时，使用此设计系统确保界面美观一致。**

---

## 1. 颜色系统

### 主色调
```css
:root {
    /* 主色 - 蓝色系 */
    --primary-50: #eff6ff;
    --primary-100: #dbeafe;
    --primary-200: #bfdbfe;
    --primary-300: #93c5fd;
    --primary-400: #60a5fa;
    --primary-500: #3b82f6;  /* 主色 */
    --primary-600: #2563eb;
    --primary-700: #1d4ed8;
    --primary-800: #1e40af;
    --primary-900: #1e3a8a;
    
    /* 成功色 - 绿色 */
    --success-500: #22c55e;
    --success-600: #16a34a;
    
    /* 警告色 - 橙色 */
    --warning-500: #f59e0b;
    --warning-600: #d97706;
    
    /* 错误色 - 红色 */
    --error-500: #ef4444;
    --error-600: #dc2626;
    
    /* 中性色 - 灰色 */
    --gray-50: #f9fafb;
    --gray-100: #f3f4f6;
    --gray-200: #e5e7eb;
    --gray-300: #d1d5db;
    --gray-400: #9ca3af;
    --gray-500: #6b7280;
    --gray-600: #4b5563;
    --gray-700: #374151;
    --gray-800: #1f2937;
    --gray-900: #111827;
}
```

### 语义化颜色
```css
:root {
    /* 背景 */
    --bg-primary: #ffffff;
    --bg-secondary: var(--gray-50);
    --bg-tertiary: var(--gray-100);
    
    /* 文字 */
    --text-primary: var(--gray-900);
    --text-secondary: var(--gray-600);
    --text-tertiary: var(--gray-400);
    --text-inverse: #ffffff;
    
    /* 边框 */
    --border-default: var(--gray-200);
    --border-hover: var(--gray-300);
    --border-focus: var(--primary-500);
    
    /* 阴影 */
    --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
    --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
    --shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
}
```

---

## 2. 间距系统

```css
:root {
    --spacing-0: 0;
    --spacing-1: 4px;
    --spacing-2: 8px;
    --spacing-3: 12px;
    --spacing-4: 16px;
    --spacing-5: 20px;
    --spacing-6: 24px;
    --spacing-8: 32px;
    --spacing-10: 40px;
    --spacing-12: 48px;
    --spacing-16: 64px;
}
```

---

## 3. 字体系统

```css
:root {
    /* 字体族 */
    --font-sans: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
    --font-mono: 'SF Mono', Monaco, Consolas, 'Liberation Mono', monospace;
    
    /* 字号 */
    --text-xs: 12px;
    --text-sm: 14px;
    --text-base: 16px;
    --text-lg: 18px;
    --text-xl: 20px;
    --text-2xl: 24px;
    --text-3xl: 30px;
    --text-4xl: 36px;
    
    /* 行高 */
    --leading-tight: 1.25;
    --leading-normal: 1.5;
    --leading-relaxed: 1.75;
    
    /* 字重 */
    --font-normal: 400;
    --font-medium: 500;
    --font-semibold: 600;
    --font-bold: 700;
}
```

---

## 4. 圆角系统

```css
:root {
    --radius-none: 0;
    --radius-sm: 4px;
    --radius-md: 6px;
    --radius-lg: 8px;
    --radius-xl: 12px;
    --radius-2xl: 16px;
    --radius-full: 9999px;
}
```

---

## 5. 常用组件规范

### 5.1 按钮

```css
/* 主按钮 */
.btn-primary {
    height: 40px;
    padding: 0 16px;
    font-size: 14px;
    font-weight: 500;
    color: white;
    background: var(--primary-500);
    border: none;
    border-radius: var(--radius-md);
    cursor: pointer;
    transition: background 0.2s;
}
.btn-primary:hover {
    background: var(--primary-600);
}
.btn-primary:disabled {
    background: var(--gray-300);
    cursor: not-allowed;
}

/* 次要按钮 */
.btn-secondary {
    height: 40px;
    padding: 0 16px;
    font-size: 14px;
    font-weight: 500;
    color: var(--gray-700);
    background: white;
    border: 1px solid var(--border-default);
    border-radius: var(--radius-md);
    cursor: pointer;
}
.btn-secondary:hover {
    background: var(--gray-50);
    border-color: var(--border-hover);
}

/* 按钮尺寸 */
.btn-sm { height: 32px; padding: 0 12px; font-size: 13px; }
.btn-lg { height: 48px; padding: 0 24px; font-size: 16px; }
```

### 5.2 输入框

```css
.input {
    width: 100%;
    height: 40px;
    padding: 0 12px;
    font-size: 14px;
    color: var(--text-primary);
    background: white;
    border: 1px solid var(--border-default);
    border-radius: var(--radius-md);
    outline: none;
    transition: border-color 0.2s, box-shadow 0.2s;
}
.input::placeholder {
    color: var(--text-tertiary);
}
.input:hover {
    border-color: var(--border-hover);
}
.input:focus {
    border-color: var(--border-focus);
    box-shadow: 0 0 0 3px var(--primary-100);
}
.input:disabled {
    background: var(--gray-100);
    cursor: not-allowed;
}

/* 带图标的输入框 */
.input-with-icon {
    position: relative;
}
.input-with-icon .input {
    padding-left: 40px;
}
.input-with-icon .icon {
    position: absolute;
    left: 12px;
    top: 50%;
    transform: translateY(-50%);
    color: var(--text-tertiary);
}
```

### 5.3 卡片

```css
.card {
    background: white;
    border-radius: var(--radius-lg);
    box-shadow: var(--shadow-md);
    padding: var(--spacing-6);
}

.card-header {
    padding-bottom: var(--spacing-4);
    border-bottom: 1px solid var(--border-default);
    margin-bottom: var(--spacing-4);
}

.card-title {
    font-size: var(--text-lg);
    font-weight: var(--font-semibold);
    color: var(--text-primary);
}
```

### 5.4 表单组

```css
.form-group {
    margin-bottom: var(--spacing-4);
}

.form-label {
    display: block;
    margin-bottom: var(--spacing-2);
    font-size: var(--text-sm);
    font-weight: var(--font-medium);
    color: var(--text-secondary);
}

.form-hint {
    margin-top: var(--spacing-1);
    font-size: var(--text-xs);
    color: var(--text-tertiary);
}

.form-error {
    margin-top: var(--spacing-1);
    font-size: var(--text-xs);
    color: var(--error-500);
}
```

---

## 6. 常用布局模式

### 6.1 居中登录页

```css
/* 全屏居中布局 */
.login-page {
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(135deg, var(--primary-500) 0%, var(--primary-700) 100%);
    padding: var(--spacing-4);
}

.login-card {
    width: 100%;
    max-width: 400px;
    background: white;
    border-radius: var(--radius-xl);
    box-shadow: var(--shadow-xl);
    padding: var(--spacing-8);
}

.login-title {
    font-size: var(--text-2xl);
    font-weight: var(--font-bold);
    color: var(--text-primary);
    text-align: center;
    margin-bottom: var(--spacing-2);
}

.login-subtitle {
    font-size: var(--text-sm);
    color: var(--text-secondary);
    text-align: center;
    margin-bottom: var(--spacing-6);
}
```

### 6.2 后台管理布局

```css
/* 侧边栏 + 主内容区 */
.admin-layout {
    display: flex;
    min-height: 100vh;
}

.sidebar {
    width: 240px;
    background: var(--gray-900);
    color: white;
    flex-shrink: 0;
}

.main-content {
    flex: 1;
    background: var(--bg-secondary);
    padding: var(--spacing-6);
}

.page-header {
    margin-bottom: var(--spacing-6);
}

.page-title {
    font-size: var(--text-2xl);
    font-weight: var(--font-bold);
    color: var(--text-primary);
}
```

### 6.3 列表页

```css
.list-container {
    background: white;
    border-radius: var(--radius-lg);
    box-shadow: var(--shadow-sm);
}

.list-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: var(--spacing-4) var(--spacing-6);
    border-bottom: 1px solid var(--border-default);
}

.list-item {
    display: flex;
    align-items: center;
    padding: var(--spacing-4) var(--spacing-6);
    border-bottom: 1px solid var(--border-default);
    transition: background 0.2s;
}

.list-item:hover {
    background: var(--bg-secondary);
}

.list-item:last-child {
    border-bottom: none;
}
```

---

## 7. 响应式断点

```css
/* 移动端优先 */
/* 手机: 默认 */
/* 平板: 768px+ */
/* 桌面: 1024px+ */
/* 大屏: 1280px+ */

@media (min-width: 768px) {
    /* 平板样式 */
}

@media (min-width: 1024px) {
    /* 桌面样式 */
}

@media (min-width: 1280px) {
    /* 大屏样式 */
}
```

---

## 8. 使用示例

### 登录页完整示例

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>登录</title>
    <style>
        /* 引入设计系统变量 */
        :root {
            --primary-500: #3b82f6;
            --primary-600: #2563eb;
            --primary-700: #1d4ed8;
            --primary-100: #dbeafe;
            --gray-50: #f9fafb;
            --gray-200: #e5e7eb;
            --gray-300: #d1d5db;
            --gray-400: #9ca3af;
            --gray-600: #4b5563;
            --gray-900: #111827;
            --error-500: #ef4444;
            --radius-md: 6px;
            --radius-xl: 12px;
            --shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
        }
        
        * { box-sizing: border-box; margin: 0; padding: 0; }
        
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }
        
        .login-page {
            min-height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            background: linear-gradient(135deg, var(--primary-500) 0%, var(--primary-700) 100%);
            padding: 16px;
        }
        
        .login-card {
            width: 100%;
            max-width: 400px;
            background: white;
            border-radius: var(--radius-xl);
            box-shadow: var(--shadow-xl);
            padding: 32px;
        }
        
        .login-title {
            font-size: 24px;
            font-weight: 700;
            color: var(--gray-900);
            text-align: center;
            margin-bottom: 8px;
        }
        
        .login-subtitle {
            font-size: 14px;
            color: var(--gray-600);
            text-align: center;
            margin-bottom: 24px;
        }
        
        .form-group {
            margin-bottom: 16px;
        }
        
        .form-label {
            display: block;
            margin-bottom: 8px;
            font-size: 14px;
            font-weight: 500;
            color: var(--gray-600);
        }
        
        .input {
            width: 100%;
            height: 40px;
            padding: 0 12px;
            font-size: 14px;
            border: 1px solid var(--gray-200);
            border-radius: var(--radius-md);
            outline: none;
        }
        
        .input:focus {
            border-color: var(--primary-500);
            box-shadow: 0 0 0 3px var(--primary-100);
        }
        
        .btn-primary {
            width: 100%;
            height: 40px;
            font-size: 14px;
            font-weight: 500;
            color: white;
            background: var(--primary-500);
            border: none;
            border-radius: var(--radius-md);
            cursor: pointer;
            margin-top: 8px;
        }
        
        .btn-primary:hover {
            background: var(--primary-600);
        }
    </style>
</head>
<body>
    <div class="login-page">
        <div class="login-card">
            <h1 class="login-title">欢迎登录</h1>
            <p class="login-subtitle">请输入您的账号信息</p>
            
            <form>
                <div class="form-group">
                    <label class="form-label">用户名</label>
                    <input type="text" class="input" placeholder="请输入用户名">
                </div>
                
                <div class="form-group">
                    <label class="form-label">密码</label>
                    <input type="password" class="input" placeholder="请输入密码">
                </div>
                
                <button type="submit" class="btn-primary">登录</button>
            </form>
        </div>
    </div>
</body>
</html>
```

---

## 9. 设计原则

1. **一致性** - 使用统一的颜色、间距、圆角
2. **简洁性** - 避免过度装饰，保持界面清爽
3. **可访问性** - 确保足够的颜色对比度
4. **响应式** - 适配不同屏幕尺寸
5. **反馈性** - 提供清晰的交互反馈（hover、focus、disabled）
