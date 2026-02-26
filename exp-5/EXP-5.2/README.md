
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
