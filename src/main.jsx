import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Route,Routes,Link } from 'react-router-dom';
import App from './App.jsx'
import QuizSettings from "./mainPage.jsx"
import Quiz from"./quiz.jsx"
import './index.css'

createRoot(document.getElementById('root')).render(
  <Router>
    <Routes>

        <Route path="/" exact element={<QuizSettings/>} />
        <Route path="/apiDeconstruct" element={<App/>} />
        <Route path="/quiz" element={<Quiz/>}/>
    </Routes>
  </Router>
)
