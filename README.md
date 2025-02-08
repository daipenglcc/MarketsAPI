# 集集有你 - API 服务

## 项目信息

该项目是一个 Node.js 应用程序，集成了微信的 API，提供了诸如获取令牌、检索媒体列表和草稿管理等服务。

## 微信信息

### 应用信息
- **AppSecret:** 37de2579db05998dcc58a42b88f33b4b  
- **AppID:** wx5cc63b63f4486af0  

### CLI 配置信息
- **名称:** daipeng
- **密钥:** AAQ9G7sEAAABAAAAAABrC2mz0ZAIPyrOup5iZyAAAAAraAdzKm8i8JwFJ68cDOJBtIHsmv3F8e00LCv7f+tYvv9NY49fQrpCITG1+CDGc6ngZEP+P1WdeTFvkyVGj7JbaGK0qB0xSg3LESm91mw8zBZHpHjpHQR9WaoO1jAwIJxFsnORaFrMYeqalkuc2lVxBQgNjgTk7K/W

### 微信公众号封面图尺寸
- **尺寸:** 900 × 383

## 微信云托管

```bash
# 登录
wxcloud login

# 部署
wxcloud deploy  
```

## 项目结构

- **config/dbConfig.js**: 使用 MySQL 的数据库配置。
- **src/app.js**: 主应用程序入口。
- **src/services/wechatService.js**: 包含与微信 API 交互的函数。
- **src/controllers/wechatController.js**: 处理 API 请求和响应。
- **src/routes/wechat.js**: 定义微信服务的 API 路由。

## 安装步骤

1. **克隆仓库：**

   ```bash
   git clone git@github.com:daipenglcc/MarketsAPI.git
   cd MarketsAPI
   ```

2. **安装依赖：**

   ```bash
   npm install
   ```

## API 端点

- **GET /fetchToken**: 获取微信访问令牌。
- **GET /fetchMediaList**: 从微信检索媒体项目列表。
- **POST /addDraft**: 向微信添加草稿。

## Docker 使用

```bash
# 构建 Docker 镜像
docker build -t markets-api .

# 导出镜像
docker save markets-api > markets-api.tar

# 解压镜像
docker load < markets-api.tar

# 运行容器（开发环境）
docker run -d --name markets-api -p 7676:7676 -e NODE_ENV=development -e PORT=7676 markets-api

# 运行容器（生产环境）
docker run -d --name markets-api -p 7676:7676 -e NODE_ENV=production -e PORT=7676 markets-api

# 进入正在运行的容器
docker exec -it markets-api /bin/sh

# 发布 Docker 镜像
docker login
docker tag markets-api youhuabujianye/markets-api
docker push youhuabujianye/markets-api

# 查看日志
docker logs markets-api

# 查看实时日志
docker logs -f markets-api
```

## PM2 使用

```bash
# 启动开发环境
pm2 start ecosystem.config.js
pm2 start ecosystem.config.js --env development

# 生产环境
pm2 start ecosystem.config.js --env production

# 查看服务列表
pm2 list

# 查看日志
pm2 logs

# 停止服务
pm2 stop ecosystem.config.js

# 删除服务
pm2 delete ecosystem.config.js
```

## Crontab 定时任务

```bash
$ 0 9 * * * curl -X POST http://localhost:7676/api/wechat/submitArticle
```
