# rabbitMQ-node-app

## Description

* This is consumer producer app. In this app, we could push data in the queue(rabbitMQ) and listen it using consumer. We have one producer to push data two consumer to listen it.

## Technology

- [x] Node
- [x] Express
- [x] rabbitMQ
- [x] Best Practice Structure
- [x] Async Await
- [x] Typescript (classes, arrow functions)

## Requirements

* To run this project, nodejs, rabbitMQ and git (version control) should be installed.
* Node ^8

### Node

* [Node](http://nodejs.org/) is really easy to install & now include NPM. You should be able to run the following command after the installation procedure below.

  $ node --version
  
  $ npm --version

### rabbitMQ

* [rabbitMQ](https://www.rabbitmq.com/download.html) is really easy to install, click here [rabbitMQ](https://www.rabbitmq.com/download.html) and follow the step to install rabbitMQ.

## Quick Start

* we have three app inside this, one producer and two consumer, to run this app we have to start all three.

* git clone https://github.com/arshealam4/rabbitMQ-node-app.git

#### start producer

* cd rabbitMQ-node-app/producer
* npm install
* npm start

#### start consumer-1

* cd rabbitMQ-node-app/consumer-1
* npm install
* npm start

#### start consumer-2

* cd rabbitMQ-node-app/consumer-2
* npm install
* npm start


### test

* hit the API and check app.

method post 
url: http://localhost:5500/api/v1/users/msg