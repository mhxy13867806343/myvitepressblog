# 🔌 联调工具

<div style="text-align: center; padding: 30px 20px; margin-bottom: 40px; background: linear-gradient(135deg, rgba(255, 107, 157, 0.1) 0%, rgba(155, 89, 182, 0.1) 100%); border-radius: 16px;">

## 🛠️ API 联调与接口管理

前后端协作的利器，提升开发效率

</div>

## 📦 常用工具

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 24px; margin: 24px 0;">

<a href="https://apifox.com/" target="_blank" style="display: block; padding: 28px; background: var(--vp-c-bg-soft); border-radius: 16px; text-decoration: none; border: 2px solid rgba(245, 108, 108, 0.3); transition: all 0.3s ease;">
  <div style="display: flex; align-items: center; gap: 16px; margin-bottom: 16px;">
    <div style="width: 60px; height: 60px; background: linear-gradient(135deg, #f56c6c, #e74c3c); border-radius: 12px; display: flex; align-items: center; justify-content: center; font-size: 28px;">🦊</div>
    <div>
      <h3 style="margin: 0; color: #f56c6c;">Apifox</h3>
      <p style="margin: 4px 0 0 0; font-size: 12px; color: var(--vp-c-text-2);">API 文档、调试、Mock、自动化测试</p>
    </div>
  </div>
  <p style="color: var(--vp-c-text-2); margin: 0 0 16px 0; font-size: 14px;">
    集 API 文档、调试、Mock、自动化测试于一体的协作平台。支持 Swagger 导入，团队协作更高效。
  </p>
  <div style="display: flex; flex-wrap: wrap; gap: 6px;">
    <span style="padding: 4px 10px; background: rgba(245, 108, 108, 0.1); color: #f56c6c; border-radius: 12px; font-size: 12px;">⭐ 强烈推荐</span>
    <span style="padding: 4px 10px; background: rgba(245, 108, 108, 0.1); color: #f56c6c; border-radius: 12px; font-size: 12px;">国产</span>
    <span style="padding: 4px 10px; background: rgba(245, 108, 108, 0.1); color: #f56c6c; border-radius: 12px; font-size: 12px;">免费</span>
  </div>
</a>

<a href="https://www.postman.com/" target="_blank" style="display: block; padding: 28px; background: var(--vp-c-bg-soft); border-radius: 16px; text-decoration: none; border: 2px solid rgba(255, 108, 55, 0.3); transition: all 0.3s ease;">
  <div style="display: flex; align-items: center; gap: 16px; margin-bottom: 16px;">
    <div style="width: 60px; height: 60px; background: linear-gradient(135deg, #ff6c37, #e65100); border-radius: 12px; display: flex; align-items: center; justify-content: center; font-size: 28px;">📮</div>
    <div>
      <h3 style="margin: 0; color: #ff6c37;">Postman</h3>
      <p style="margin: 4px 0 0 0; font-size: 12px; color: var(--vp-c-text-2);">API 开发协作平台</p>
    </div>
  </div>
  <p style="color: var(--vp-c-text-2); margin: 0 0 16px 0; font-size: 14px;">
    全球知名的 API 开发平台，功能强大，生态完善，团队协作能力强。
  </p>
  <div style="display: flex; flex-wrap: wrap; gap: 6px;">
    <span style="padding: 4px 10px; background: rgba(255, 108, 55, 0.1); color: #ff6c37; border-radius: 12px; font-size: 12px;">经典</span>
    <span style="padding: 4px 10px; background: rgba(255, 108, 55, 0.1); color: #ff6c37; border-radius: 12px; font-size: 12px;">国际</span>
  </div>
</a>

<a href="https://swagger.io/" target="_blank" style="display: block; padding: 28px; background: var(--vp-c-bg-soft); border-radius: 16px; text-decoration: none; border: 2px solid rgba(133, 234, 45, 0.3); transition: all 0.3s ease;">
  <div style="display: flex; align-items: center; gap: 16px; margin-bottom: 16px;">
    <div style="width: 60px; height: 60px; background: linear-gradient(135deg, #85ea2d, #4caf50); border-radius: 12px; display: flex; align-items: center; justify-content: center; font-size: 28px;">📄</div>
    <div>
      <h3 style="margin: 0; color: #85ea2d;">Swagger</h3>
      <p style="margin: 4px 0 0 0; font-size: 12px; color: var(--vp-c-text-2);">API 文档规范</p>
    </div>
  </div>
  <p style="color: var(--vp-c-text-2); margin: 0 0 16px 0; font-size: 14px;">
    OpenAPI 规范，后端自动生成 API 文档，前端直接导入使用。
  </p>
  <div style="display: flex; flex-wrap: wrap; gap: 6px;">
    <span style="padding: 4px 10px; background: rgba(133, 234, 45, 0.1); color: #85ea2d; border-radius: 12px; font-size: 12px;">标准</span>
    <span style="padding: 4px 10px; background: rgba(133, 234, 45, 0.1); color: #85ea2d; border-radius: 12px; font-size: 12px;">OpenAPI</span>
  </div>
</a>

</div>

## 💡 联调技巧

<div style="padding: 24px; background: var(--vp-c-bg-soft); border-radius: 16px; margin: 24px 0;">

### 🎯 前后端联调最佳实践

1. **接口文档先行** - 使用 Apifox/Swagger 定义接口规范
2. **Mock 数据开发** - 前端不等后端，使用 Mock 并行开发
3. **统一错误处理** - 约定错误码和错误信息格式
4. **接口版本管理** - 使用 `/api/v1/` 等版本前缀
5. **联调环境隔离** - 开发、测试、生产环境分离

</div>

## 🔧 常用配置

### Axios 封装示例

```javascript
import axios from 'axios'

const request = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  timeout: 10000
})

// 请求拦截器
request.interceptors.request.use(config => {
  const token = localStorage.getItem('token')
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

// 响应拦截器
request.interceptors.response.use(
  response => response.data,
  error => {
    console.error('请求错误:', error)
    return Promise.reject(error)
  }
)

export default request
```

---

<div style="text-align: center; margin-top: 40px;">

[返回博客](/blog/) | [Vue.js 笔记](/blog/vue)

</div>
