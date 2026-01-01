# Project Structure

<!-- 
模板说明：
- 此文件定义项目的目录结构
- Agent 会根据此文件创建和组织文件
- 根据实际项目填写以下内容
-->

## Directory Layout

```
project/
├── src/                    # 源代码
│   ├── components/         # 可复用组件
│   ├── pages/              # 页面组件
│   ├── hooks/              # 自定义 Hooks
│   ├── utils/              # 工具函数
│   ├── types/              # 类型定义
│   ├── styles/             # 样式文件
│   └── main.tsx            # 入口文件
├── public/                 # 静态资源
├── tests/                  # 测试文件
├── .kiro/                  # Kiro 配置
│   ├── steering/           # Steering 文件
│   ├── specs/              # Spec 文档
│   └── tests/              # 测试报告
├── package.json
└── README.md
```

## Module Organization

### Components (`src/components/`)

```
components/
├── Button/
│   ├── index.tsx           # 组件实现
│   ├── Button.test.tsx     # 单元测试
│   └── Button.module.css   # 样式
└── ...
```

### Pages (`src/pages/`)

每个页面一个目录，包含页面组件和相关逻辑。

## File Naming

| 类型 | 命名规范 | 示例 |
|------|----------|------|
| 组件 | PascalCase | `UserProfile.tsx` |
| 工具 | camelCase | `formatDate.ts` |
| 样式 | kebab-case | `user-profile.module.css` |
| 测试 | *.test.ts | `UserProfile.test.tsx` |

## Import Order

1. React/框架导入
2. 第三方库
3. 本地组件
4. 工具函数
5. 类型定义
6. 样式文件
