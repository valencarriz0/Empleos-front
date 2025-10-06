import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import JobDetail from "./pages/JobDetail";
import JobForm from "./pages/EmpleoForm";

function App() {
  return (
    <div>
      <main className="">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aviso" element={<JobDetail />} />
          <Route path="/nuevo-aviso" element={<JobForm />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
