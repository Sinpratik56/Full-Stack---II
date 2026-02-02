import { BrowserRouter, Routes, Route } from "react-router-dom";
function Home() {
return <h2>Home Page</h2>;
}
function About() {
return <h2>About Page</h2>;
}
function App() {
return (
<BrowserRouter>
<Routes>
<Route path="/" element={<Home />} />
<Route path="/about" element={<About />} />
</Routes>
</BrowserRouter>
);
}
export default App;
