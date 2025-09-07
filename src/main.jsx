import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import TaskManager from './page/TaskManager.jsx'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TaskManager />
  </StrictMode>,
)
