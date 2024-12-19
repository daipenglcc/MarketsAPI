# 集集有你 - API 服务

### 项目信息

该项目是一个 Node.js 应用程序，集成了微信的 API，提供了诸如获取令牌、检索媒体列表和草稿管理等服务。

### 应用信息
- **AppSecret:** 37de2579db05998dcc58a42b88f33b4b  
- **AppID:** wx5cc63b63f4486af0  

### CLI 配置信息
- **名称:** daipeng  
- **密钥:** AAQ9G7sEAAABAAAAAABrC2mz0ZAIPyrOup5iZyAAAAAraAdzKm8i8JwFJ68cDOJBtIHsmv3F8e00LCv7f+tYvv9NY49fQrpCITG1+CDGc6ngZEP+P1WdeTFvkyVGj7JbaGK0qB0xSg3LESm91mw8zBZHpHjpHQR9WaoO1jAwIJxFsnORaFrMYeqalkuc2lVxBQgNjgTk7K/W

### 登录
使用以下命令登录微信云托管：  
```bash
wxcloud login
```

### 部署
使用以下命令部署微信云托管：  
```bash
wxcloud deploy
```

### 封面图尺寸
900 × 383

## 项目结构

- **config/dbConfig.js**: 使用 MySQL 的数据库配置。
- **src/app.js**: 主应用程序入口。
- **src/services/wechatService.js**: 包含与微信 API 交互的函数。
- **src/controllers/wechatController.js**: 处理 API 请求和响应。
- **src/routes/wechat.js**: 定义微信服务的 API 路由。

## 安装步骤

1. **克隆仓库：**

   ```bash
   git clone https://github.com/yourusername/wechat-cloud-service.git
   cd wechat-cloud-service
   ```

2. **安装依赖：**

   ```bash
   npm install
   ```

3. **设置环境变量：**

   在根目录下创建一个 `.env` 文件，并添加以下内容：

   ```plaintext
   WX_ENV=your-wx-env
   WX_SERVICE=your-wx-service
   WX_APPID=wx5cc63b63f4486af0
   WX_SECRET=37de2579db05998dcc58a42b88f33b4b
   DB_HOST=localhost
   DB_USER=your-db-username
   DB_PASSWORD=your-db-password
   DB_NAME=your-db-name
   ```

4. **运行应用程序：**

   ```bash
   npm start
   ```

## API 端点

- **GET /fetchToken**: 获取微信访问令牌。
- **GET /fetchMediaList**: 从微信检索媒体项目列表。
- **POST /addDraft**: 向微信添加草稿。