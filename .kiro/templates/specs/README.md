# Spec 文档模板

需求、设计、任务文档的格式模板，供 Agent 生成文档时参考。

---

## 模板文件

| 文件 | 用途 | 生成者 | 格式 |
|------|------|--------|------|
| `requirements.md` | 需求规格文档 | requirements-agent | EARS 格式 |
| `design.md` | 技术设计文档 | design-agent | 架构设计 |
| `tasks.md` | 开发任务清单 | tasks-agent | 任务列表 |

---

## 使用方式

1. **工作流启动时**：复制到项目 `.kiro/templates/specs/`
2. **Agent 参考**：生成文档时参考模板格式
3. **输出位置**：生成的文档保存到 `.kiro/specs/{feature}/`

---

## EARS 需求格式

```markdown
## 功能需求

### FR-001: [需求标题]
- **类型**: 功能需求
- **优先级**: P0/P1/P2
- **描述**: When [触发条件], the system shall [系统行为]
- **验收标准**:
  - [ ] AC1.1: 标准描述
  - [ ] AC1.2: 标准描述
```

---

## 设计文档格式

```markdown
## 技术设计

### 架构概述
[系统架构描述]

### 组件设计
| 组件 | 职责 | 文件路径 |
|------|------|----------|
| ComponentA | 功能描述 | src/components/A.tsx |

### 数据模型
[TypeScript 接口定义]

### API 设计
| 方法 | 路径 | 描述 |
|------|------|------|
| GET | /api/xxx | 获取数据 |
```

---

## 任务清单格式

```markdown
## 开发任务

### Task 1: [任务名称]
- **对应需求**: FR-001
- **文件**: src/xxx.tsx
- **描述**: 任务详细描述
- **验收标准**: 
  - [ ] 标准 1
  - [ ] 标准 2
```

---

## 注意事项

- 模板定义格式规范，Agent 必须遵循
- 每个 Feature 的文档保存在独立目录
- 文档之间有依赖关系：requirements → design → tasks
