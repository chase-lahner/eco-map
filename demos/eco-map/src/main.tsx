import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { APIProvider } from '@vis.gl/react-google-maps'
import App from './App.tsx'
import MainPage from './main_page.tsx'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <APIProvider apiKey='AIzaSyCCmNshuc91hvZ7q27kQYfFE5oE3lk0MJk'>
    <MainPage />

    </APIProvider>
    
  </StrictMode>,
)
