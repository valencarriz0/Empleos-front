import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import JobDetail from './components/DetalleEmpleo'
import JobForm from './components/EmpleoForm'


function App() {
  return (
    <div>
      <header className='absolute top-0 w-full border-b backdrop-blur bg-white px-4 '>
        <h1 className='text-black container flex h-16 items-center'>Bolsa de Empleos</h1>
      </header>
      <main className="pt-20 px-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aviso" element={<JobDetail />} />
          <Route path="/nuevo-aviso" element={<JobForm />} />
        </Routes>
      </main>
    </div>
  )
}

export default App;