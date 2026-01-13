# Contacts API
A simple Node.js + Express REST API with MongoDB. It supports user authentication using JWT and lets each user manage their own contacts.

## Tech Stack
- Node.js
- Express.js
- MongoDB + Mongoose
- JWT Authentication
- bcrypt (password hashing)

## Features
- User registration & login
- JWT-protected routes (Bearer token)
- Contacts CRUD (Create, Read, Update, Delete)
- User-specific contacts (only owner can access/update/delete)
- Basic error handling with proper status codes
