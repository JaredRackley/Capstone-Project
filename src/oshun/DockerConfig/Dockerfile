FROM tiangolo/nginx-rtmp
COPY nginx.conf ./nginx.conf

RUN apt-get update
RUN apt-get install ffmpeg -y
RUN apt-get update && apt-get install -y curl build-essential libpcre3-dev libpcre++-dev zlib1g-dev libcurl4-openssl-dev libssl-dev  
CMD ["nginx"]
RUN service nginx start
# RUN nginx -t && nginx -s reload

EXPOSE 80