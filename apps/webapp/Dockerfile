FROM node:16-alpine

WORKDIR /app

COPY .yarn/ .yarn/
COPY .yarnrc.yml .
COPY package.json .
COPY yarn.lock .
COPY apps/webapp/ apps/webapp/

ENV NODE_ENV=production

RUN yarn workspaces focus webapp

CMD ["yarn", "workspace", "webapp", "build"]

