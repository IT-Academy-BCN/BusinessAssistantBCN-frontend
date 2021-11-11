FROM nginx

COPY dist/UAD-frontend /etc/nginx/html
COPY conf/uad-docker.conf /etc/nginx/conf.d/uad-docker.conf

