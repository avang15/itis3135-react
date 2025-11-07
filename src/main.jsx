import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Index from './Index.jsx'
import Introduction from './Introduction.jsx'
import Contract from './Contract.jsx'
import Layout from './Layout.jsx';
import { BrowserRouter, Routes, Route } from 'react-router'
import '../public/styles/default.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/' element={<Index />}></Route>
          <Route path='/introduction.html' element={<Introduction />}></Route>
          <Route path='/contract.html' element={<Contract />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
