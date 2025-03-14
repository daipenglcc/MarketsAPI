# 由 Dockerpacks 自动生成
# 本 Dockerfile 可能不能完全覆盖您的项目需求，若遇到问题请根据实际情况修改或询问客服

# 使用基于 alpine 的 node 官方镜像
FROM node:lts-alpine

# 设置容器内的当前目录
WORKDIR /app

# 使用速度更快的国内镜像源
RUN npm config set registry https://registry.npmmirror.com

# 将这些文件拷贝到容器中
COPY package.json package-lock.json ./

# 安装依赖（包括 devDependencies）
RUN npm ci --include=dev

# 将包括源文件在内的所有文件拷贝到容器中（在 .dockerignore 中的文件除外）
COPY . .

# 使用 ARG 来接收构建时的参数
ARG NODE_ENV=production
# 设置环境变量
ENV NODE_ENV=$NODE_ENV HOST=0.0.0.0

# 运行项目
CMD ["npm", "run", "start"]

# 服务暴露的端口
EXPOSE 7676