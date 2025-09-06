import "./App.css";
import SpiderOpsNet from "./components/SpiderOpsNet";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<SpiderOpsNet />} />
          {/* <Route path="/overview" element={<Overview />} />
          <Route path="/profession" element={<Profession />} />
          <Route path="/projects" element={<Project />} />
          <Route path="/education" element={<Education />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/achievements" element={<Awards />} /> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
