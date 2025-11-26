import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Index from './Index.jsx'
import Introduction from './Introduction.jsx'
import Contract from './Contract.jsx'
import Layout from './Layout.jsx';
import Students from "./Students.jsx";
import { BrowserRouter, Routes, Route } from 'react-router'
import '../public/styles/default.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Index />} />
          <Route path='introduction' element={<Introduction />} />
          <Route path='contract' element={<Contract />} />
          <Route path="students" element={<Students />} />

        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
