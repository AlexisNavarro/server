# Purpose

This repository will be containing the source code for my personal project which is to create a web application similar to facebook. This project will allow me to get a hands on experience in full stack development which will require me to use javascript and various frameworks such as Express.js, React and Node.js, and creating a database to store my web app information which is MongoDB

## Imports
Being that this will be an individual full stack development for a web application, there will be a need for various imports of packages and modules which will assist me in this personal project.

*Definition of Middleware: a software component or function that sits between the client and server and helps handle requests and responses. It is a way to extend the functionality of a web application by performing various tasks during the processing of HTTP requests.*

* **Mongoose** to access my database in mongoDB.
* **Express** from Node.js to be able to establish routing, middleware, templating, error handling, static file serving, and application configuration.
* **Body Parser** from Node.js to extract the body of incoming HTTP requests.
* **CORS** (Cross-origin resource sharing)which will allow servers to specify which domain are permitted to access specific resources and protects against cross-origin attacks. CORS is a package/module that will be imported into the Node.js project.
* **Multer** is a middleware for handling multipart/form-data, which is used for uploading files in web applications. Multer is used with Node.js and Express web framework.
* **Dotenv** is a npm package to help manage configuration or environment variables in Node.js applications. It used to store information such as API keys, database credentials, or anything sensitive that needs to be used by the application.
* **Helmet** is a npm package to secure Express.js applications by setting various HTTP headers related to security. Easy way to enhance the security of a web app by adding a set of recommended security headers.
* **Morgan** is a npm package that provides middleware for logging HTTP requests in Node.js applications. Morgan stores detailed information about the incoming requests and outputs it to the console or a log file which allows to monitor and analyze the traffic and behavior of the web app.
* **Path** is a built-in module in NOde.js that provides utilities for working with file and directory paths.

## Controllers Directory 

Purpose of the Controllers directory is to hold the file **auth.js** which will be responsible in handling methods for the backend to be able to register a user and log in a user. 

### Imports used
* Bcrypt
* jwt
* User

### Register

To be able to register, the backend will need various parameters which will be recieved from the frontend, to be able to obtain these parameters from the frontend, the register in the backend will access the request body(req.body) information. Once the user information from the frontend is obtained, I now need to create that specific user, but before the information of the user is stored, I first need to encrypt the users password by using **bcrypt.genSalt()** to obtain a salt and then use **bcyrpt.hash()** to hash the password that the user submitted. Now with that I can create a new user with its required parameters and the hashedPassword. When the new user is made, the backend will send a status 201 code to the frontend to confirm the new user account being created, if not then the frontend will get a status 500 and an error message.  

### Login

Now to be able to access a user account, the backend will need to have a method to handle the functionality of login. To be able to login, the backend will recieve the email and password from the frontend, once that is obtained then its time to search for those credentials in my MongoDB database which is done by the **User.findOne()** command; In this case I will be using the **findOne** command to search by email since the emails need to be unique. Assuming the email doesn't exists in the database, then the backend will send a status 400 code to the front end with a message , but in the case that the email exist, then now I have to compare the password attached to that account which is stored in the DB with the password that the user gave me in the login form. To compare these passwords, I need to compare the passwords by using **bcrypt.compare()** with both the DB password and the given password. Assuming that the passwords don't match then the backend will send a status 400 code and an error message. 

When the passwords match, then now its time to create a token by using the **jwt from the jsonwebtoken** import which will give the logged in user a user id and a secret string for added security. 
## Middleware Directory

Purpose of this Directory is to be able to verify the token that is attached to the user account which was done in the Controllers Directory auth.js. To begin, the auth.js file in the middleware directory there exists a veriyToken variable that will first need to receive the "Authorization" header from the request from the frontend. In the case that the token doesn't exist then the backend will send a status 403 code to the backend.

## Models Directory

## node_modules Directory

## routes Directory
