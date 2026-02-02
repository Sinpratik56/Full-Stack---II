import { BrowserRouter, Routes, Route } from "react-router-dom";
function NotFound() {
return <h2>Page Not Found</h2>;
}
function App() {
return (
<BrowserRouter>
<Routes>
<Route path="/" element={<h2>Home</h2>} />
<Route path="*" element={<NotFound />} />
</Routes>
</BrowserRouter>
);
}
export default App;
