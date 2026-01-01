/**
 * 翼虎系统登录页脚本
 */

// 切换密码显示/隐藏
function togglePassword() {
    const passwordInput = document.getElementById('password');
    const toggleBtn = document.querySelector('.toggle-password');
    
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        toggleBtn.textContent = '🙈';
    } else {
        passwordInput.type = 'password';
        toggleBtn.textContent = '👁';
    }
}

// 表单验证
function validateForm(username, password) {
    const errors = [];
    
    if (!username || username.trim().length < 3) {
        errors.push({ field: 'username', message: '用户名至少3个字符' });
    }
    
    if (!password || password.length < 6) {
        errors.push({ field: 'password', message: '密码至少6个字符' });
    }
    
    return errors;
}

// 显示错误
function showError(field, message) {
    const wrapper = document.querySelector(`#${field}`).closest('.input-wrapper');
    wrapper.classList.add('error');
    
    // 移除已有的错误消息
    const existingError = wrapper.parentElement.querySelector('.error-message');
    if (existingError) {
        existingError.remove();
    }
    
    // 添加新的错误消息
    const errorEl = document.createElement('div');
    errorEl.className = 'error-message';
    errorEl.textContent = message;
    wrapper.parentElement.appendChild(errorEl);
}

// 清除错误
function clearErrors() {
    document.querySelectorAll('.input-wrapper.error').forEach(el => {
        el.classList.remove('error');
    });
    document.querySelectorAll('.error-message').forEach(el => {
        el.remove();
    });
}

// 设置按钮加载状态
function setLoading(loading) {
    const btn = document.querySelector('.login-btn');
    if (loading) {
        btn.classList.add('loading');
        btn.disabled = true;
    } else {
        btn.classList.remove('loading');
        btn.disabled = false;
    }
}

// 模拟登录请求
async function login(username, password, remember) {
    // 模拟 API 请求延迟
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // 模拟登录逻辑 - 实际项目中替换为真实 API 调用
    if (username === 'admin' && password === '123456') {
        return { success: true, token: 'mock-token-xxx', user: { name: '管理员' } };
    }
    
    return { success: false, message: '用户名或密码错误' };
}

// 表单提交处理
document.getElementById('loginForm').addEventListener('submit', async function(e) {
    e.preventDefault();
    
    clearErrors();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const remember = document.getElementById('remember').checked;
    
    // 验证
    const errors = validateForm(username, password);
    if (errors.length > 0) {
        errors.forEach(err => showError(err.field, err.message));
        return;
    }
    
    // 提交
    setLoading(true);
    
    try {
        const result = await login(username, password, remember);
        
        if (result.success) {
            // 登录成功
            if (remember) {
                localStorage.setItem('token', result.token);
            } else {
                sessionStorage.setItem('token', result.token);
            }
            
            alert(`欢迎回来，${result.user.name}！`);
            // window.location.href = '/dashboard';
        } else {
            // 登录失败
            alert(result.message);
        }
    } catch (error) {
        alert('登录失败，请稍后重试');
        console.error('Login error:', error);
    } finally {
        setLoading(false);
    }
});

// 输入时清除错误状态
document.querySelectorAll('.login-form input').forEach(input => {
    input.addEventListener('input', function() {
        const wrapper = this.closest('.input-wrapper');
        wrapper.classList.remove('error');
        const errorMsg = wrapper.parentElement.querySelector('.error-message');
        if (errorMsg) {
            errorMsg.remove();
        }
    });
});

// 页面加载完成
document.addEventListener('DOMContentLoaded', function() {
    // 自动聚焦用户名输入框
    document.getElementById('username').focus();
    
    // 检查是否有保存的 token
    const token = localStorage.getItem('token') || sessionStorage.getItem('token');
    if (token) {
        console.log('已检测到登录状态');
        // 可以在这里自动跳转到主页
    }
});
