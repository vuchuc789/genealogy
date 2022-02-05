FROM node:16-alpine AS builder

WORKDIR /app

COPY .yarn/ .yarn/
COPY .yarnrc.yml .
COPY package.json .
COPY yarn.lock .
COPY apps/api/ apps/api/

ENV NODE_ENV=production

RUN yarn workspaces focus api
RUN yarn workspace api build

FROM node:16-alpine

WORKDIR /app

COPY .yarn/ .yarn/
COPY .yarnrc.yml .
COPY package.json .
COPY yarn.lock .
COPY apps/api/package.json apps/api/

COPY --from=builder /app/apps/api/dist/ apps/api/dist/

ENV NODE_ENV=production

RUN yarn workspaces focus api --production

CMD [ "yarn", "workspace", "api", "start:prod" ]
