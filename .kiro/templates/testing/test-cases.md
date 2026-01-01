# Test Cases

<!-- 
模板说明：
- 此文件由 testing-agent 生成
- 基于 requirements.md 的验收标准
- 每个用例对应一个或多个验收标准
-->

## Test Scope

**Feature**: [功能名称]
**Requirements**: requirements.md
**Date**: [日期]

**In Scope**:
- [测试范围1 - 对应 REQ-001]
- [测试范围2 - 对应 REQ-002]

**Out of Scope**:
- [不测试的功能]

## Test Environment

<!-- 
⚠️ 重要：如果需要测试已部署的应用，在此配置测试环境信息
testing-agent 会读取此配置进行测试
-->

| 配置项 | 值 | 说明 |
|--------|-----|------|
| 测试地址 | http://localhost:5173 | 应用访问地址 |
| 用户名 | | 登录用户名（如需要） |
| 密码 | | 登录密码（如需要） |
| API 地址 | | 后端 API 地址（如需要） |

<!-- 
示例 - 测试已部署的应用：
| 测试地址 | https://staging.example.com |
| 用户名 | test_user |
| 密码 | test_pass |

示例 - 本地开发测试：
| 测试地址 | http://localhost:5173 |
| 用户名 | |
| 密码 | |
-->

## Application Info

| Item | Value |
|------|-------|
| Project Directory | [路径] |
| Start Command | nohup pnpm run dev > /tmp/dev-server.log 2>&1 & |
| Default Port | 5173 |
| Expected URL | http://localhost:5173 |
| Tech Stack | [Vue/React/etc] |

## Startup Steps

```bash
cd [project_directory]
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

## Test Cases

### TC-001: Initial Page Load

- **Precondition**: Application started
- **Acceptance Criteria**: AC1.1
- **Steps**:
  1. Navigate to application URL
  2. Wait for page to load
- **Expected Result**: Page displays correctly with initial state
- **Screenshot**: 01-initial.png

### TC-002: [Test Case Name]

- **Precondition**: TC-001 passed
- **Acceptance Criteria**: AC1.2
- **Steps**:
  1. [Step 1]
  2. [Step 2]
- **Expected Result**: [Expected result]
- **Screenshot**: 02-xxx.png

### TC-003: [Test Case Name]

- **Precondition**: [Precondition]
- **Acceptance Criteria**: AC2.1
- **Steps**:
  1. [Step 1]
  2. [Step 2]
- **Expected Result**: [Expected result]
- **Screenshot**: 03-xxx.png

## Notes

- 测试用例数量通常 3-8 个
- 每个用例必须对应验收标准
- 必须有截图验证
