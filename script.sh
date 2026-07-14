#!/bin/bash

# Update packages
yum update -y

# Install Git
yum install git -y
echo "Git installed"

# Install Python
yum install python3 python3-pip -y
echo "Python installed"

# Install NVM
curl -fsSL https://rpm.nodesource.com/setup_22.x | sudo bash -
sudo yum install -y nodejs
node -v
npm -v

echo "NodeJS installed"

# Install PM2
npm install -g pm2

pm2 -v
echo "PM2 installed"
