
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
