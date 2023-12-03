import { useState } from 'react'
import { Route, Routes, BrowserRouter } from "react-router-dom";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Layout from './components/Layout';
import GestionProjects from './screens/GestionProjects';
import GestrionAccount from './screens/GestionAccount';
import BoardTable from './screens/BoardTable';
import Login from './screens/Login';



function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route> <Route path='login' element={<Login />}/></Route>
          <Route path='/' element={<Layout />} >
            <Route index element={<BoardTable/>}/>
            <Route path='gestion-des-projets' element={<GestionProjects />}/>
            <Route path='gestion-des-comptes' element={<GestrionAccount/>}/>
          </Route>
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
