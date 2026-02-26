
---

# Unit-5: Optimize Frontend Performance Using Lazy Loading

This project demonstrates performance optimization techniques in a React Single Page Application (SPA) using code-splitting via `React.lazy()` and `Suspense`.

## 🚀 Overview

The goal of this project is to reduce the initial bundle size and speed up the application's load time by implementing:
1.  **Component-level Lazy Loading**: Loading specific UI components only when they are rendered.
2.  **Route-based Lazy Loading**: Loading entire page components only when the user navigates to a specific route.

---

## 🛠️ Software Requirements

*   **Node.js**: Environment to run JavaScript.
*   **React**: Frontend library.
*   **React Router DOM**: For handling navigation and routing.
*   **Code Editor**: VS Code (Recommended).
*   **Web Browser**: Chrome/Edge/Firefox for testing.

---

## 🧪 Experiments Implementation

### Experiment-1: Component Lazy Loading Using React.lazy and Suspense

**Aim:** To optimize performance by implementing lazy loading of components.

**Theory:** 
Lazy loading is a technique where components are loaded only when they are required. `React.lazy()` allows dynamic imports, and `Suspense` provides a fallback UI (like a loading spinner) while the component is being fetched.

**Procedure:**
1.  Created multiple standalone components (e.g., `HeavyComponent.jsx`).
2.  Imported them using `const MyComponent = React.lazy(() => import('./MyComponent'))`.
3.  Wrapped the components inside `<Suspense fallback={<div>Loading...</div>}>`.

### Output
 <img src="https://github.com/BaivhavKummar/FULLSTACK-2/blob/main/EXP-5/assets/Screenshot%202026-02-25%20090337.png">
 <img src="https://github.com/BaivhavKummar/FULLSTACK-2/blob/main/EXP-5/assets/Screenshot%202026-02-25%20090351.png">


---

### Experiment-2: Route-Based Lazy Loading in SPA

**Aim:** To implement route-based lazy loading to improve startup performance.

**Theory:**
Route-based lazy loading ensures that code associated with a specific URL path is only downloaded when the user visits that route. This significantly reduces the "Initial Load Time" of the application.

**Procedure:**
1.  Installed `react-router-dom`.
2.  Defined routes for different pages (Home, About, Contact).
3.  Applied `React.lazy()` to the page components.
4.  Wrapped the `<Routes>` container inside a `<Suspense>` block.

### Output
 <img src="https://github.com/BaivhavKummar/FULLSTACK-2/blob/main/EXP-5/assets/Screenshot%202026-02-25%20091104.png">
 <img src="https://github.com/BaivhavKummar/FULLSTACK-2/blob/main/EXP-5/assets/Screenshot%202026-02-25%20091113.png">
 <img src="https://github.com/BaivhavKummar/FULLSTACK-2/blob/main/EXP-5/assets/Screenshot%202026-02-25%20091123.png">
 <img src="https://github.com/BaivhavKummar/FULLSTACK-2/blob/main/EXP-5/assets/Screenshot%202026-02-25%20091133.png">
 <img src="https://github.com/BaivhavKummar/FULLSTACK-2/blob/main/EXP-5/assets/Screenshot%202026-02-25%20091812.png">

---

## 📁 Project Structure

```text
src/
├── components/
│   └── HeavyComponent.jsx  # Used for Experiment 1
├── pages/
│   ├── Home.jsx            # Lazy loaded for Experiment 2
│   ├── About.jsx           # Lazy loaded for Experiment 2
│   └── Contact.jsx         # Lazy loaded for Experiment 2
├── App.jsx                 # Main logic for routing and Suspense
└── main.jsx
```

---

## 💻 How to Run

1.  **Clone the project:**
    ```bash
    git clone <your-repo-link>
    cd <project-folder>
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    # and for routing
    npm install react-router-dom
    ```

3.  **Run the development server:**
    ```bash
    npm run dev
    ```

4.  **Observe Performance:**
    *   Open Browser DevTools (F12) -> **Network Tab**.
    *   Filter by **JS**.
    *   Notice that new `.js` chunks are downloaded only when you click on navigation links.

---

## 📝 Key Code Snippet

```javascript
import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Route-based Lazy Loading
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));

function App() {
  return (
    <Router>
      <Suspense fallback={<h1>🌀 Loading Page...</h1>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Suspense>
    </Router>
  );
}
```

---

## 🏁 Conclusion

By implementing these two experiments, the application's initial bundle size is minimized, resulting in a faster **First Contentful Paint (FCP)** and an overall improved user experience.
