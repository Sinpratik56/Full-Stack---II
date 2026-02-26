

---

# Unit 6: Handling Forms and Validation in React

This project focuses on managing user input using **Controlled Components** and implementing robust **Client-Side Validation** logic to ensure data integrity before submission.

## 🚀 Overview

This repository contains two primary experiments:
1.  **Experiment-6.1**: Handling forms where the state of the input is controlled by React.
2.  **Experiment-6.2**: Implementing custom validation logic for Email and Password fields with specific security constraints.

---

## 🛠️ Software Requirements

*   **Node.js**: JavaScript runtime environment.
*   **React**: Frontend library for building the UI.
*   **Code Editor**: VS Code.
*   **Web Browser**: Chrome/Edge for debugging.

---

## 🧪 Experiments Implementation

### Experiment-6.1: Handling Forms Using Controlled Components

**Aim:** To create and handle forms in a frontend application using controlled components in React.

**Theory:** 
Controlled components are React components in which form data is handled by the component's state. By using the `useState` hook, the "single source of truth" resides in the React state, providing complete control over user input and making it easier to modify or validate data in real-time.

**Procedure:**
1.  Initialize a new React application.
2.  Create a form component with necessary input fields.
3.  Use the `useState` hook to store and track input values.
4.  Write `onChange` event handlers to update the state as the user types.
5.  Handle form submission using an `onSubmit` event handler.

### Output
 <img src="https://github.com/BaivhavKummar/FULLSTACK-2/blob/main/EXP-6/assets/Screenshot%202026-02-25%20162259.png">
 <img src="https://github.com/BaivhavKummar/FULLSTACK-2/blob/main/EXP-6/assets/Screenshot%202026-02-25%20162318.png">
 <img src="https://github.com/BaivhavKummar/FULLSTACK-2/blob/main/EXP-6/assets/Screenshot%202026-02-25%20162340.png">
---

### Experiment-6.2: Client-Side Form Validation

**Aim:** To validate form inputs on the client side before submission to provide immediate user feedback.

**Theory:**
Client-side validation ensures the correctness of user data and provides immediate feedback without needing a server interaction. This improves user experience and reduces unnecessary server load.

**Specific Validation Requirements:**

#### 📧 Email Validation:
*   Must contain the `@` symbol.
*   Must end with a valid domain/country code (e.g., `.com`, `.in`, or other country codes).

#### 🔑 Password Validation:
1.  **Starting Character:** Must start with a **Capital Letter**.
2.  **Numbers:** Must contain at least **one number**.
3.  **Special Characters:** Must contain at least **one special character** (e.g., @, #, $, etc.).
4.  **Length:** Must be at least **5 characters** long.

**Procedure:**
1.  Create form inputs for Email and Password.
2.  Define validation functions (using Regular Expressions or conditional logic).
3.  Store and display error messages in the UI if conditions are not met.
4.  Disable the submit button or prevent submission until all fields are valid.

### Output
 <img src="https://github.com/BaivhavKummar/FULLSTACK-2/blob/main/EXP-6/assets/Screenshot%202026-02-25%20164018.png">
 <img src="https://github.com/BaivhavKummar/FULLSTACK-2/blob/main/EXP-6/assets/Screenshot%202026-02-25%20164032.png">
 <img src="https://github.com/BaivhavKummar/FULLSTACK-2/blob/main/EXP-6/assets/Screenshot%202026-02-25%20164044.png">
 <img src="https://github.com/BaivhavKummar/FULLSTACK-2/blob/main/EXP-6/assets/Screenshot%202026-02-25%20164055.png">
---

## 📁 Project Structure

```text
src/
├── components/
│   ├── SimpleForm.jsx       # Controlled Components (Exp 1)
│   └── ValidatedForm.jsx    # Validation Logic (Exp 2)
├── App.jsx                  # Main entry point
└── main.jsx
```

---

## 💻 Key Implementation Snippet (Validation Logic)

```javascript
const validate = (email, password) => {
  const errors = {};

  // Email Regex: contains @ and ends with .com, .in, etc.
  const emailRegex = /^[^\s@]+@[^\s@]+\.(com|in|org|net|[a-z]{2})$/;
  if (!emailRegex.test(email)) {
    errors.email = "Invalid email format (needs @ and .com/.in)";
  }

  // Password Logic
  const hasCapitalStart = /^[A-Z]/.test(password);
  const hasNumber = /\d/.test(password);
  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
  
  if (!hasCapitalStart) errors.passStart = "Must start with a Capital Letter";
  if (password.length < 5) errors.passLength = "Minimum 5 characters required";
  if (!hasNumber) errors.passNum = "Must include at least one number";
  if (!hasSpecialChar) errors.passSpec = "Must include one special character";

  return errors;
};
```

---

## 🏁 Conclusion

Through these experiments, we successfully implemented a secure form handling system. We ensured that data is not only captured correctly using **State** but also verified against strict **Security Rules** before being processed by the application.
