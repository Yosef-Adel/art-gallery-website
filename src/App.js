import Home from "./pages/Home";
import NoPage from "./pages/NoPage";
import Location from "./pages/Location";
import { Routes, Route } from "react-router-dom";

function App() {
    return (
        <div className="App">

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/location" element={<Location />} /> 
                <Route path="*" element={<NoPage />} />
            </Routes>
        </div>
    );
}

export default App;

