
---

## 🧪 Experiments Implementation

### Experiment-1: Global State Management Using React Context API

**Aim:** To implement global state management in a Single Page Application using the React Context API.

**Theory:** 
In React applications, passing data through multiple components using props can become complex (known as **prop drilling**). The Context API provides a way to share global data—such as themes, user information, or application settings—across components without passing props manually at every level.

**Procedure:**
1.  **Create a React application**: Set up the environment.
2.  **Create a Context**: Use `createContext()` to initialize the state container.
3.  **Wrap with Provider**: Use the `.Provider` component at a high level in the component tree.
4.  **Store/Update State**: Define the data and functions inside the Provider.
5.  **Consume State**: Use the `useContext()` hook in child components to access the data.

### Output
 <img src=" <img src="https://github.com/BaivhavKummar/FULLSTACK-2/blob/main/EXP-4/assets/Screenshot%202026-02-25%20104438.png">">

---
