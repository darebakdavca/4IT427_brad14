import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { WatchListProvider } from '@/contexts/WatchListContext.tsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <WatchListProvider>
        <App />
      </WatchListProvider>
    </BrowserRouter>
  </StrictMode >,
)
