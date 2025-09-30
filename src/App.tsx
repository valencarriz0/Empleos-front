import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import JobDetail from './components/DetalleEmpleo'
import JobForm from './components/EmpleoForm'
import NuevaEmpresa from './components/NuevaEmpresa'


function App() {
  return (
    <div>
      <main className="pt-20 px-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aviso" element={<JobDetail />} />
          <Route path="/nuevo-aviso" element={<JobForm />} />
          <Route path="/nueva-empresa" element={<NuevaEmpresa />} />
        </Routes>
      </main>
    </div>
  )
}

export default App;