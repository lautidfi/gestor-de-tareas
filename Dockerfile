FROM nginx:alpine

COPY index.html styles.css app.js favicon.svg /usr/share/nginx/html/
