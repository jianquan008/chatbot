# 测试模板

测试用例和测试报告的格式模板，供 testing-agent 生成文档时参考。

---

## 模板文件

| 文件 | 用途 | 生成者 |
|------|------|--------|
| `test-cases.md` | 测试用例文档 | testing-agent |
| `test-report.md` | 测试报告文档 | testing-agent |

---

## 使用方式

1. **工作流启动时**：复制到项目 `.kiro/templates/testing/`
2. **Agent 参考**：testing-agent 生成文档时参考模板格式
3. **输出位置**：生成的文档保存到 `.kiro/tests/{feature}/`

---

## 测试用例格式

```markdown
# Test Cases: [功能名称]

## Test Environment
| Item | Value |
|------|-------|
| Project Directory | [路径] |
| Start Command | nohup pnpm run dev > /tmp/dev-server.log 2>&1 & |
| Default Port | 5173 |
| Expected URL | http://localhost:5173 |

## Test Cases

### TC-001: [测试用例名称]
- **Precondition**: 前置条件
- **Acceptance Criteria**: AC1.1
- **Steps**:
  1. 步骤 1
  2. 步骤 2
- **Expected Result**: 预期结果
```

---

## 测试报告格式

```markdown
# Test Report: [功能名称]

## Summary
| Metric | Value |
|--------|-------|
| Total Tests | X |
| Passed | X |
| Failed | X |
| Pass Rate | XX% |

## Test Results

### TC-001: [测试用例名称]
- **Status**: ✅ PASS / ❌ FAIL
- **Actual Result**: 实际结果
- **Screenshot**: [截图路径]
- **Notes**: 备注
```

---

## 截图保存

测试截图保存到 `.kiro/tests/{feature}/screenshots/` 目录：
- 命名格式：`TC-001-step1.png`
- 在报告中引用：`![TC-001](screenshots/TC-001-step1.png)`

---

## 注意事项

- 每个测试用例必须对应 requirements.md 中的验收标准
- 测试报告必须包含所有测试用例的执行结果
- 失败的测试用例必须附带截图和错误信息
