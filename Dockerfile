# FROM node:12.14.0
# # Install VS Code's deps. These are the only two it seems we need.
# RUN apt-get update && apt-get install -y \
# 	libxkbfile-dev \
# 	libsecret-1-dev

# We deploy with Ubuntu so that devs have a familiar environment.
FROM ubuntu:18.04

RUN apt-get update && apt-get install -y \
    openssl \
    net-tools \
    git \
    locales \
    sudo \
    dumb-init \
    vim \
    curl \
    wget \
    && rm -rf /var/lib/apt/lists/*



RUN curl -sL https://deb.nodesource.com/setup_12.x  | bash -
RUN apt-get -y install nodejs
RUN npm i yarn -g
RUN npm install -g typescript
RUN npm i ts-node-dev -g
RUN apt-get -y install  protobuf-compiler-grpc
RUN wget https://github.com/grpc/grpc-web/releases/download/1.0.7/protoc-gen-grpc-web-1.0.7-linux-x86_64
RUN mv ./protoc-gen-grpc-web-1.0.7-linux-x86_64   /usr/local/bin/protoc-gen-grpc-web
RUN chmod +x /usr/local/bin/protoc-gen-grpc-web
RUN locale-gen en_US.UTF-8
# We cannot use update-locale because docker will not use the env variables
# configured in /etc/default/locale so we need to set it manually.
ENV LC_ALL=en_US.UTF-8 \
    SHELL=/bin/bash

RUN adduser --gecos '' --disabled-password grpc-server && \
    echo "grpc-server ALL=(ALL) NOPASSWD:ALL" >> /etc/sudoers.d/nopasswd

USER grpc-server

ARG name=grpc-server
# COPY ./ /app/
RUN mkdir -p /home/grpc-server/project
WORKDIR /home/grpc-server/project

# RUN mkdir -p /home/app
# RUN chmod -R 777 /home/app
# WORKDIR /home/app
# VOLUME [ "/c:/Users/galih/Documents/learning/gRPC/ExpressIntegration/SimpleServer/server:/home/app" ]
# RUN npm install
# EXPOSE 3000:3000

CMD ["/bin/bash"]