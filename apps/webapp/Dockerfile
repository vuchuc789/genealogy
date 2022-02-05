FROM node:16-alpine AS builder

WORKDIR /app

COPY .yarn/ .yarn/
COPY .yarnrc.yml .
COPY package.json .
COPY yarn.lock .
COPY apps/webapp/ apps/webapp/

ENV NODE_ENV=production

RUN yarn workspaces focus webapp
RUN yarn workspace webapp build

FROM nginx:alpine

COPY apps/webapp/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/apps/webapp/dist /usr/share/nginx/html
