import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {
  return (
    <BrowserRouter>
      <header className='absolute top-0 w-full border-b backdrop-blur bg-white px-4 '>
        <h1 className='text-black container flex h-16 items-center'>Bolsa de Empleos</h1>
      </header>
      <main className="pt-20 px-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aviso/:id" element={<JobDetail />} />
          <Route path="/nuevo-aviso" element={<JobForm />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App;