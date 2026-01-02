# 工作流上下文

**重要：所有 Agent 必须使用以下路径，不要自行决定输出位置。**

## 目录配置

| 目录 | 路径 | 用途 |
|------|------|------|
| 工作目录 | `/Users/kb/devgenie-data/organizations/default_org/projects/chatbot/generated/admin` | 项目根目录 |
| Spec目录 | `(不适用)` | requirements.md, design.md, tasks.md |
| 参考文档 | `(不适用)` | 用户上传的参考文档（UI设计图、PRD等） |
| 测试目录 | `(不适用)` | test-cases.md, test-report.md |
| 日志目录 | `(不适用)` | workflow.log, summary.md |

## 当前 Feature

- **Feature 名称**: 把项目启动
- **项目类型**: existing
- **工作流模式**: quick
- **执行模式**: auto

**注意**：参考文档在当前 Feature 的 refs 目录下，不要读取其他 Feature 的文档。

## 代码分析工具（重要）

这是一个已有项目。**使用以下工具理解代码**：

### LSP 代码智能（推荐）
LSP 已初始化，可使用 `code` 工具进行精确代码分析：
- `code search_symbols "函数名"` - 搜索符号定义
- `code goto_definition` - 跳转到定义
- `code find_references` - 查找所有引用
- `code diagnostics` - 获取编译错误

**优先使用 code 工具**，它比 grep 更精确。

### Knowledge 索引（语义搜索）
索引名称: `default_org-chatbot-admin`
索引路径: `/Users/kb/devgenie-data/organizations/default_org/projects/chatbot/generated/admin`

使用 `knowledge` 工具：
1. 先用 `knowledge show` 检查索引是否存在
2. 如果没有 "default_org-chatbot-admin"，用 `knowledge add` 建立索引
3. 用 `knowledge search` 进行语义搜索

### 代码探索工具
- `grep` - 文本模式搜索（快速定位）
- `glob` - 文件发现（了解项目结构）
- `fs_read` - 读取文件内容

### 使用示例
```
# 语义搜索
knowledge search --query "用户认证逻辑"

# 文本搜索
grep "useState" --include "*.tsx"

# 文件发现
glob "src/**/*.ts"
```
