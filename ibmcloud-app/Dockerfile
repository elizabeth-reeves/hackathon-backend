FROM registry.access.redhat.com/ubi7/ubi

RUN curl -sL https://rpm.nodesource.com/setup_12.x | bash -
RUN yum install -y nodejs

RUN mkdir /app
WORKDIR /app

COPY package.json /app
RUN npm install --only=prod

COPY entrypoint.sh /app
RUN ["chmod", "+x", "/app/entrypoint.sh"]

RUN mkdir /app/config
COPY ./server/config/config.json /app/config

COPY server /app/server
COPY public /app/public
RUN mkdir /app/migrations
COPY server/migrations/* /app/migrations/

ENV NODE_ENV production
ENV PORT 3010

EXPOSE 3010

ENTRYPOINT [ "./entrypoint.sh" ]