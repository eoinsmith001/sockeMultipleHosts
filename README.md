# Using Socket across multiple hosts

Where the front end is deployed separately to backend

Backend is intended to run in a Vagrant Centos7 box
Frontend has an express server, and a socket io client which connects to the ip/port of the vagrant box

Watching out for CORS errors...

## Get the vagrant box for the backend project
```
vagrant box add centos7 https://github.com/tommy-muehle/puppet-vagrant-boxes/releases/download/1.1.0/centos-7.0-x86_64.box
vagrant init centos7
```
