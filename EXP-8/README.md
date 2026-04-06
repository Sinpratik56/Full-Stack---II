# 🚀 EXP8 - Student Management REST API

![Spring Boot](https://img.shields.io/badge/Spring_Boot-F2F4F9?style=for-the-badge&logo=spring-boot)
![Java](https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=java&logoColor=white)
![MySQL](https://img.shields.io/badge/MySQL-005C84?style=for-the-badge&logo=mysql&logoColor=white)
![Postman](https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=Postman&logoColor=white)

This project is a Spring Boot REST API for managing student data. It implements full CRUD (Create, Read, Update, Delete) operations, utilizing Spring Data JPA and Hibernate to interact with a MySQL database.

## ⚙️ Features
*   **Add Student:** Create new student records.
*   **Get All Students:** Retrieve a list of all enrolled students.
*   **Get Student by ID:** Fetch specific student details using their unique ID.
*   **Update Student:** Modify existing student details.
*   **Delete Student:** Remove a student record from the database.
*   **JSON Support:** Fully consumes and produces JSON formatting for requests and responses.

## 🛠 Tech Stack
*   **Backend:** Java 21, Spring Boot, Maven
*   **Database:** MySQL, Spring Data JPA, Hibernate
*   **Testing:** Postman
*   **IDE:** Eclipse IDE

---

## 📌 Base URL
```text
http://localhost:8080/api/students

---

## Output


```text
http://localhost:8080/api/students
```
*(Note: Depending on local Tomcat configurations, the port may run on `8070` as seen in some screenshots below. You can configure this in `application.properties`)*

---

## 📬 API Endpoints

| HTTP Method | Endpoint | Description |
| :--- | :--- | :--- |
| **POST** | `/api/students` | Adds a new student to the database. |
| **GET** | `/api/students` | Retrieves all student records. |
| **GET** | `/api/students/{id}` | Retrieves a single student by their ID. |
| **PUT** | `/api/students/{id}` | Updates an existing student's data. |
| **DELETE** | `/api/students/{id}` | Deletes a student by their ID. |

---

## 📸 API Walkthrough & Testing

### 1. Project Initialization
The core routing and business logic are handled via `StudentController`. The application successfully connects to the local MySQL instance via Hibernate on startup.

<img src="https://github.com/BaivhavKummar/FULLSTACK-2/blob/main/EXP-8/assets/Screenshot%202026-03-24%20154732.png">

### 2. Initial Database State
Before performing operations, our MySQL `student` table contains 6 initial records.

<img src="https://github.com/BaivhavKummar/FULLSTACK-2/blob/main/EXP-8/assets/Screenshot%202026-03-24%20161114.png">

### 3. Read Operations (GET)
**Fetching All Students:** Sending a `GET` request retrieves a JSON array of all student records currently in the database.

<img src="https://github.com/BaivhavKummar/FULLSTACK-2/blob/main/EXP-8/assets/Screenshot%202026-03-24%20154705.png">
<img src="https://github.com/BaivhavKummar/FULLSTACK-2/blob/main/EXP-8/assets/Screenshot%202026-03-24%20155216.png">

**Fetching by ID:** We can fetch a specific student. Here, a `GET` request is sent for `id: 5` (Akshara).

<img src="https://github.com/BaivhavKummar/FULLSTACK-2/blob/main/EXP-8/assets/Screenshot%202026-03-24%20155246.png">

### 4. Update Operation (PUT)
We update the student with `id: 5`, changing the name from "Akshara" to **"P.Akshara"**. The API returns the updated JSON object with a `200 OK` status.

<img src="https://github.com/BaivhavKummar/FULLSTACK-2/blob/main/EXP-8/assets/Screenshot%202026-03-24%20161747.png">

### 5. Delete Operation (DELETE)
We trigger a `DELETE` request for `id: 1` (Bhav). The server successfully removes the record and returns a `204 No Content` status code.

<img src="https://github.com/BaivhavKummar/FULLSTACK-2/blob/main/EXP-8/assets/Screenshot%202026-03-24%20161207.png">

**API Verification:** If we try to send a `GET` request for the deleted student (`id: 1`) again, the server throws a `500 Internal Server Error` because the entity no longer exists in the database.

<img src="https://github.com/BaivhavKummar/FULLSTACK-2/blob/main/EXP-8/assets/Screenshot%202026-03-24%20161347.png">

### 6. Final Database State
Checking MySQL Workbench confirms that our API operations were successful at the database level: `id: 1` has been permanently removed, and `id: 5` reflects the updated name "P.Akshara".

<img src="https://github.com/BaivhavKummar/FULLSTACK-2/blob/main/EXP-8/assets/Screenshot%202026-03-24%20161828.png">

---

## ▶️ How to Run

1. Ensure your local MySQL server is running.
2. Update the `application.properties` file with your database credentials (`username`, `password`, `url`).
3. Clone this repository and open the terminal in the root directory.
4. Run the application using Maven:
```bash
mvn spring-boot:run
```
5. Open Postman and begin sending requests to the API endpoints.

---
👤 **Author:** Baivhav Kummar
```
