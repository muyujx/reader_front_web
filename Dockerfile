FROM nginx:1.24.0-alpine-slim

COPY config/nginx.conf /etc/nginx/nginx.conf
COPY dist /www/

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]