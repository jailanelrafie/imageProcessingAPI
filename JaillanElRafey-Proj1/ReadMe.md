# Image Processing Project

## Table of Contents
* Project Description
* Commands
* Scripts
* URLs

### Project Description

This code implements the image processing app project, which is the first project of the EG-FWD Full Stack Web Development Advanced course - August Cohort.
The code creates an app to resize images and show an error message if the image does not exist and/or if the values for width and height are invalid. It is implemented using TypeScript and Node.js. Unit testing is implemented using Jasmine. Code formatting is implemented using ESLint and Prettier. Image processing is implemented using Sharp.

### Commands
Node Package Manager:
* npm init -y

Prettier:
* npm i --save-dev prettier@1.19.1

ESLint:
* npm i --save-dev eslint
* npm init @eslint/config
* npm i --save-dev eslint-config-prettier
* npm i --save-dev eslint-plugin-prettier
* npm i --save-dev @typescript-eslint/eslint-plugin
* npm i --save-dev @typescript-eslint/parser

Express:
* npm i express
* npm i --save-dev @types/express

Jasmine:
* npm i jasmine
* npm i jasmine-spec-reporter
* npm i --save-dev @types/jasmine

Supertest:
* npm i supertest
* npm i --save-dev @types/supertest

Sharp:
* npm i sharp
* npm i --save-dev @types/sharp

### Scripts
* npm run build (To compile TypeScript to JavaScript)
* npm run lint (Checking for errors)
* npm run prettier (Code formatting)
* npm run jasmine (Running unit tests)
* npm run start (Starting the server)
* CTRL+C (Termination)

### URLs
* http://localhost:3000/api
* http://localhost:3000/api/impro?filename=sandg&width=500&height=600
* http://localhost:3000/api/impro?filename=osandg&width=500&height=600 (shows error message)
* http://localhost:3000/api/impro?filename=osandg&width=0&height=600 (shows error message)
* http://localhost:3000/api/impro?filename=osandg&width=500&height=-5 (shows error message)
* http://localhost:3000/api/impro?filename=sandg&width=-6&height=0 (shows error message)
