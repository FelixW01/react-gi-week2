import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/homepage'
import TaskList from './pages/tasklist'
import TaskDetail from './pages/taskdetail'
import Error from './pages/error'
import Navbar from './components/navbar/navbar'

function App() {
  
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/taskList" element={<TaskList />}/>
        <Route path="/taskDetail" element={<TaskDetail />}/>
        <Route parh="*" element={<Error />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
