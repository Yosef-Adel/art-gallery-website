import Home from "./pages/Home";
import NoPage from "./pages/NoPage";
import { Routes, Route } from "react-router-dom";
import LocationPage from "./pages/LocationPage";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/location" element={<LocationPage/>} /> 
                <Route path="*" element={<NoPage />} />
            </Routes>
        </div>
    );
}

export default App;

