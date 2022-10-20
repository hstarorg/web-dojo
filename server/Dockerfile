# 基础镜像
FROM node:18.11.0-alpine

# 记录镜像作者信息
MAINTAINER hstarorg hm910705@163.com

# 安装 PNPM
RUN npm i -g pnpm
RUN wget -O /usr/local/bin/dumb-init https://github.com/Yelp/dumb-init/releases/download/v1.2.5/dumb-init_1.2.5_x86_64
RUN chmod +x /usr/local/bin/dumb-init

# 拷贝文件
COPY dist /dist

# 设置工作目录
WORKDIR /dist

# 安装依赖
RUN pnpm i --prod

# 导出的端口
EXPOSE 7411

# 设置入口点
ENTRYPOINT ["/usr/local/bin/dumb-init", "--"]

# 运行
CMD ["node", "index.js"]
