#!/bin/bash
cd ~
sudo apt-get update
sudo apt install nginx -y
sudo rm -f /var/www/html/*
sudo git clone -b dev https://github.com/muralialakuntla3/myweb.git
sudo cp -rf myweb/* /var/www/html/
sudo systemctl restart nginx
