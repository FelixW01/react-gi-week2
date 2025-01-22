import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/homepage'
import DetailsPage from './pages/detailspage'
import Error from './pages/error'

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/details" element={<DetailsPage />}/>
        <Route parh="*" element={<Error />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
