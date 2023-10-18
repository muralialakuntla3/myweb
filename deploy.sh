#!/bin/bash
cd ~
sudo apt-get update
sudo apt install nginx -y
sudo rm -f /var/www/html/*
sudo cp -rf /home/ubuntu/myweb/* /var/www/html/
sudo systemctl restart nginx
