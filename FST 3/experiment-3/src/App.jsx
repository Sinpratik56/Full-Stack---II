import { BrowserRouter, Routes, Route } from "react-router-dom";
function Dashboard() {
return <h2>Dashboard</h2>;
}
function Profile() {
return <h2>Profile</h2>;
}
function App() {
return (
<BrowserRouter>
<Routes>
<Route path="/dashboard" element={<Dashboard />} />
<Route path="/profile" element={<Profile />} />
</Routes>
</BrowserRouter>
);
}
export default App;
