# CRUD Backend(Node.js + Express + MySQL)

This backend project provides **REST APIs** for managing users in a database.
It works with a **React frontend** to perform Create, Read, Update, and Delete operations.

---

## Features

* Create User
* Get All Users
* Update User
* Delete User
* Sends Email Notification (Nodemailer)
* CORS Enabled

---

## Tech Stack

| Technology | Purpose               |
| ---------- | --------------------- |
| Node.js    | Backend Runtime       |
| Express.js | Web Framework         |
| MySQL2     | Database Driver       |
| Nodemailer | Email Integration     |
| dotenv     | Environment Config    |
| cors       | Cross-Origin Access   |
| nodemon    | Auto Restart Dev Tool |

---

## Project Structure

```
crud-backend/
│── models/
│   └── db.js
│── controllers/
│   └── userController.js
│── routes/
│   └── userRoutes.js
│── utils/
│   └── mailer.js
│── server.js
│── .env
│── package.json
```
<img width="1920" height="1080" alt="Screenshot (18)" src="https://github.com/user-attachments/assets/ca06323f-782c-4d0d-bc47-ec687e87bd22" />

---

## Installation & Setup

### Clone the Repository

git clone https://github.com/monishavenkatachalam/crud-backend.git
cd crud-backend

---

### Install Dependencies

npm install

---

### Setup MySQL Database

Open MySQL Workbench and run:

```sql
CREATE DATABASE cruddb;

CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100),
  email VARCHAR(120),
  location VARCHAR(100)
);
```
<img width="1923" height="640" alt="Screenshot (19)" src="https://github.com/user-attachments/assets/2815c9d5-000a-4660-a451-d204094fab2b" />


---

### Create `.env` File

Create a `.env` file in the project root:

```
PORT=5000
DB_HOST=localhost
DB_USER=root
DB_PASS=
DB_NAME=cruddb

EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
```

`EMAIL_PASS` must be a **Google App Password**.
<img width="1920" height="1080" alt="Screenshot (20)" src="https://github.com/user-attachments/assets/1d9cfe40-c96f-456c-b3ad-91ef2dc2f476" />


---

### Start Backend Server

Standard mode:
npm start

Development mode with auto-refresh:
npm run dev

<img width="1923" height="438" alt="Screenshot (22)" src="https://github.com/user-attachments/assets/737f0b37-2764-4108-b2a7-49a12a143a21" />


---

## API Endpoints

| Method | Endpoint         | Description   |
| ------ | ---------------- | ------------- |
| POST   | `/api/users`     | Add a user    |
| GET    | `/api/users`     | Get all users |
| PUT    | `/api/users/:id` | Update user   |
| DELETE | `/api/users/:id` | Delete user   |

---

## Email Notification

After creating a user, the system automatically sends a **Welcome Email** to the registered email address.

<img width="1920" height="1080" alt="Screenshot (27)" src="https://github.com/user-attachments/assets/edeff881-5c67-446f-bb9d-f0ad98e02341" />

<img width="1920" height="1080" alt="Screenshot (26)" src="https://github.com/user-attachments/assets/f98eb064-c071-4388-9796-f4e9af54950d" />

<img width="1920" height="1080" alt="Screenshot (25)" src="https://github.com/user-attachments/assets/b1e4d0fc-0b45-4757-8ac5-080adee75bd6" />

<img width="1920" height="1080" alt="Screenshot (24)" src="https://github.com/user-attachments/assets/b033e430-8d71-4a30-bb92-805752e4500a" />

---

## Test with Postman (Optional)

| Action      | Payload Example                                                             |
| ----------- | --------------------------------------------------------------------------- |
| Add User    | `{ "name": "John", "email": "john@gmail.com", "location": "Chennai" }`       |
| Update User | `{ "name": "John Updated", "email": "john@gmail.com", "location": "Salem" }` |

<img width="1920" height="1080" alt="Screenshot (23)" src="https://github.com/user-attachments/assets/a2e24253-10a4-46ae-a5a1-e066b698d0a8" />

* Postman `POST` success response
* Database table showing new record

---

## Common Issues

| Issue                    | Fix                                  |
| ------------------------ | ------------------------------------ |
| `ER_ACCESS_DENIED_ERROR` | Check DB username/password in `.env` |
| `CORS blocked`           | Ensure `app.use(cors())` is enabled  |
| `Email not sent`         | Use Gmail App Password               |

---


Do you want me to do that?
