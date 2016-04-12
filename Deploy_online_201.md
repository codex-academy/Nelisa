---
layout: default
title: Display Data
---

# Deploy online 201

> Nelisa still wants to see her statistics on a web page from her smartphone. Things are more complicated as we need a database for the application.

Deploy your Express application to a [Digital Ocean](https://www.digitalocean.com) VPS (Virtual Private Server), they have [very good tutorials](https://www.digitalocean.com/community/tutorials).

# Let's go

Follow the steps below to deploy your application to a DigitalOcean VPS.

## Setup Ubuntu, Node JS server with MySQL

Create a new Ubuntu server on Digital Ocean. Ask your Code Mentor to email you an Digital Ocean invite.

### Login

Once you have a server log in to it using [ssh](https://en.wikipedia.org/wiki/Secure_Shell), like this:

```
ssh root@<your ip address>
```

You will be prompted for a password use the password that Digital Ocean emailed you. You will also need to change your root password. Follow the prompts to change the password.

```
apt-get update
```

### Setup the server

First setup your server by following these instructions: [Initial Server Setup with Ubuntu 14.04](https://www.digitalocean.com/community/tutorials/initial-server-setup-with-ubuntu-14-04).

Decide on a DNS name for your server: `<server_name>.projectcodex.co` then email it with your servers IP address to your Code Mentor to link it to the domain name to the IP address.

Now install node:

* sudo apt-get install nodejs
* sudo apt-get install nodejs-legacy
* sudo apt-get install npm

### Create sample application online

Now follow [this article, from "Hello World Code" downwards](https://www.digitalocean.com/community/tutorials/how-to-set-up-a-node-js-application-for-production-on-ubuntu-14-04#hello-world-code).

### Setup MySQL

Setup MySQL on the server as per these [instructions](https://www.digitalocean.com/community/tutorials/how-to-install-linux-apache-mysql-php-lamp-stack-on-ubuntu-14-04). Please note you **only** want to install MySQL at this stage.

### Deploy your application

To deploy your application:

* create an apps folder in your home folder;
* clone your application from GitHub into that folder;
* setup your database on the server;
* start your application with pm2.

## More details:

The instructions above are a selection from these two articles:

  * [How To Set Up a Node.js Application for Production on Ubuntu 14.04](https://www.digitalocean.com/community/tutorials/how-to-set-up-a-node-js-application-for-production-on-ubuntu-14-04) This article use two servers for the setup. We are only using one server for now.
  * [How To Install Linux, Apache, MySQL, PHP (LAMP) stack on Ubuntu 14.04](https://www.digitalocean.com/community/tutorials/how-to-install-linux-apache-mysql-php-lamp-stack-on-ubuntu-14-04)

  You will need to follow some of these tutorials piecemeal as we are not using Apache as a web server or going to setup PhpMyAdmin on the VPS.
