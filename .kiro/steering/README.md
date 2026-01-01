# Steering 模板

项目上下文和约束规则模板，为 Agent 提供项目背景信息。

---

## 模板文件

| 文件 | 用途 | 使用者 |
|------|------|--------|
| `product.md` | 产品概述、目标用户、核心功能 | 所有 Agent |
| `tech.md` | 技术栈、架构约定、编码规范 | development-agent |
| `structure.md` | 项目结构、目录约定、命名规范 | 所有 Agent |
| `context.md` | 工作流上下文（动态生成） | 所有 Agent |

---

## 使用方式

1. **工作流启动时**：复制 `product.md`、`tech.md`、`structure.md` 到项目 `.kiro/steering/`
2. **动态生成**：`context.md` 由工作流服务动态生成，包含路径配置
3. **Agent 读取**：所有 Agent 首先读取 `context.md` 获取路径配置

---

## context.md 内容

```markdown
# 工作流上下文

## 目录配置
| 目录 | 路径 |
|------|------|
| 工作目录 | `/absolute/path/to/project` |
| Spec目录 | `/absolute/path/.kiro/specs/功能名称` |
| 测试目录 | `/absolute/path/.kiro/tests/功能名称` |
| 日志目录 | `/absolute/path/.kiro/logs/功能名称` |
| 参考文档 | `/absolute/path/.kiro/specs/功能名称/refs` |

## 项目信息
- project_type: new/existing
- tech_stack: React/Vue/...
- feature_name: 功能名称

## 代码分析工具（仅 existing 项目）
**注意**：LSP（/code 命令）在非交互模式下不可用，使用以下工具：
- Knowledge 索引: `knowledge add --name "{org_id}-{project_id}-{user_id}" --value "{working_dir}"`
- Knowledge 搜索: `knowledge search --query "关键词"`
- 文本搜索: `grep "pattern" --include "*.tsx"`
- 文件发现: `glob "src/**/*.ts"`
```

---

## 自定义

用户可以修改项目中的 Steering 文件来定制 Agent 行为：
- 添加项目特定的技术约束
- 定义代码风格规范
- 指定目录结构要求

---

## 注意事项

- `context.md` 是动态生成的，不要手动修改
- 其他 Steering 文件可以根据项目需求自定义
- Agent 必须首先读取 `context.md` 获取路径配置
