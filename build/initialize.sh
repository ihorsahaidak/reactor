#!/usr/bin/env bash
echo 'xdebug.remote_port=9000' >> /etc/php/7.0/apache2/php.ini
echo 'xdebug.remote_enable=1' >> /etc/php/7.0/apache2/php.ini
echo 'xdebug.remote_connect_back=1' >> /etc/php/7.0/apache2/php.ini

a2enmod rewrite
sed -i 's/AllowOverride None/AllowOverride All/g' /etc/apache2/apache2.conf
service apache2 restart

mysql -u root -e "CREATE DATABASE magento"
mysql -u root -e "CREATE USER 'magento'@'localhost' IDENTIFIED BY 'magento'"
mysql -u root -e "GRANT ALL PRIVILEGES ON *.* TO 'magento'@'localhost'"
mysql -u root -e "FLUSH PRIVILEGES"
