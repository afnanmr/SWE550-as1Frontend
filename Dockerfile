FROM node:latest as builder

RUN mkdir -p /app

WORKDIR /app

COPY . .

RUN npm install
RUN npm run build --prod

CMD ["npm", "start"]

FROM nginx:alplin
COPY src/nginx/etc/conf.d/default.conf /etc/nginx/conf/default.conf
COPY --from=builder app/dist/swe550-angular usr/share/nginx/html
