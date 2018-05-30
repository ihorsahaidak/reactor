Magento 2 SPA module

To initialize project:
- Add your key to build/id_rsa.pub
- Run docker-compose up in build folder
- Add m2spa.local to your /etc/hosts
- Login root@m2spa.local
- Run "/bin/bash /root/initialize.sh"
- Run "sudo -u www-data composer install" in /var/www/html folder
- Proceed magento install on http://m2spa.local
- Proceed reindex by "sudo -u www-data bin/magento indexer:reindex"
- Go to http://m2spa.local/spa
- ???
- Profit