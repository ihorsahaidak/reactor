# Reactor Magento 2 SPA React.js frontend

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/facebook/react/blob/master/LICENSE) 
[![npm version](https://img.shields.io/npm/v/react.svg?style=flat)](https://www.npmjs.com/package/react)

### To initialize project:
- Add your key to build/id_rsa.pub
- Run docker-compose up in build folder
- Add m2spa.local to your /etc/hosts
- Login root@m2spa.local
- Run "/bin/bash /root/initialize.sh"
- Run "sudo -u www-data composer install" in /var/www/html folder
- Proceed magento install on http://m2spa.local
- Proceed reindex by "sudo -u www-data bin/magento indexer:reindex"
- Go to http://m2spa.local/reactor
- run npm install --save-dev
- go to BO and create you own store
- set React theme to your store
- Profit

### License

React is [MIT licensed](./LICENSE).