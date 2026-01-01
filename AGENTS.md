# AGENTS.md

项目的 AI Agent 指导规则。

## 项目概述

[项目名称] - [项目简介]

## Agent 配置

本项目使用 DevGenie 的 6-Agent 架构：

| Agent | 职责 | 输出文件 |
|-------|------|----------|
| requirements-agent | 需求分析 | requirements.md |
| design-agent | 技术设计 | design.md |
| tasks-agent | 任务分解 | tasks.md |
| development-agent | 代码开发 | 源代码文件 |
| testing-agent | 测试验证 | test-report.md |
| review-agent | 审查总结 | summary.md |

## 技术栈

- 前端框架：[React/Vue/...]
- 构建工具：[Vite/Webpack/...]
- 语言：[TypeScript/JavaScript]

## 代码规范

- 遵循项目现有代码风格
- 使用 TypeScript 类型注解
- 组件使用函数式写法
- 样式使用 [CSS Modules/Tailwind/...]

## 目录结构

```
src/
├── components/    # 组件
├── pages/         # 页面
├── services/      # 服务层
├── utils/         # 工具函数
└── types/         # 类型定义
```

## 禁止事项

- 不要在代码中硬编码密钥
- 不要执行阻塞命令 (pnpm run dev, pnpm start)
- 不要停止 8000 端口（DevGenie 服务）
