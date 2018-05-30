FROM debian:stretch

RUN apt update && apt upgrade -y

RUN apt install -y wget nano curl ca-certificates python cron sudo
RUN apt install -y openssh-server

RUN apt install -y apache2
RUN apt install -y php php-bcmath php-curl php-ctype php-mysqli php-mysql php-xdebug php-mcrypt php-mbstring php-intl php-zip php-xsl php-soap php-gd
RUN apt install -y redis-server
RUN apt install -y mysql-server
RUN apt install -y composer

COPY id_rsa.pub /root/.ssh/authorized_keys
COPY initialize.sh /root/initialize.sh

ENTRYPOINT service apache2 start &&\
           service mysql start &&\
           service ssh start &&\
           /bin/bash

CMD ["true"]