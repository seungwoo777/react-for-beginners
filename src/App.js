import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";

function App() {
    return (
        <Router>      {/* 여러개의  컴포넌트만 렌더링 */}
            <Routes>  {/* 한번의 하나의 컴포넌트만 렌더링 */}
                <Route path="/movie/:id" element={<Detail/>} />
                <Route path={`${process.env.PUBLIC_URL}/`} element={< Home />} />
            </Routes>
        </Router>
    );
}

export default App;
