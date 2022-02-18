FROM node:14.18.2-bullseye-slim
ENV DEBIAN_FRONTEND=noninteractive
RUN apt update && apt install -y --no-install-recommends nginx libvips imagemagick ghostscript curl 
RUN mkdir /app && chown 1000:1000 -R /app \
    && curl -sf https://gobinaries.com/tj/node-prune | sh \
    && rm -rf /var/lib/apt/lists/*

COPY . /app

WORKDIR /app/cms
RUN npm install --only=production /app/cms && npm run build --prefix /app/cms /app/cms \
    && npm install --only=production /app/frontend && cd /app/frontend && npm install --platform=linux --arch=x64 sharp && cd /app/cms

RUN cp /app/nginx/default.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
ENTRYPOINT ["/bin/sh", "-c" , "nginx && npm run start"]