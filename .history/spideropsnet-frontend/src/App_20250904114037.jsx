import "./App.css";
import SpiderOpsNet from "./components/SpiderOpsNet";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <div className="main">
        <SpiderOpsNet />
      </div>
    </>
  );
}

export default App;
