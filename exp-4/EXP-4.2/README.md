
---

### Experiment-2: State Management Using Redux (Counter Application)

**Aim:** To implement centralized state management using Redux in a React application.

**Theory:**
Redux is a predictable state container for JavaScript applications. It stores the application state in a single global **Store** and updates it using **Actions** and **Reducers**. **Redux Toolkit (RTK)** is the modern way to write Redux, simplifying the implementation by reducing boilerplate code.

**Key Steps Taken:**
1.  **Configure Store**: Created a central store using `configureStore`.
2.  **Create a Slice**: Defined the initial state and reducers (logic) for the counter using `createSlice`.
3.  **Provide Store**: Wrapped the main application with the `<Provider>` from `react-redux`.
4.  **Dispatch & Select**: Used `useSelector` to read the state and `useDispatch` to trigger actions (increment/decrement).

### Output
 <img src="https://github.com/BaivhavKummar/FULLSTACK-2/blob/main/EXP-4/assets/Screenshot%202026-02-25%20155824.png">

---
