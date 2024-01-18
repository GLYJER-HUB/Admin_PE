import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom";
import './App.css'
import Layout from './components/Layout';
import GestionProjects from './screens/GestionProjects';
import GestrionAccount from './screens/GestionAccount';
import BoardTable from './screens/BoardTable';
import Login from './screens/Login';


function App() {

  const isAuthenticated = () => {
    return localStorage.getItem('username') !== null;
  };

  const LoginRoute = () => {
    if (isAuthenticated()) {
      return <Navigate to="/tableau-de-bord" />;
    }
    return <Login />;
  };

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<LoginRoute />}></Route>
          <Route path='/login' element={<LoginRoute />}></Route>
          <Route path='/' element={<Layout />}>
            <Route path='tableau-de-bord' element={<BoardTable />} />
            <Route path='gestion-des-projets' element={<GestionProjects />} />
            <Route path='gestion-des-comptes' element={<GestrionAccount />} />
          </Route>
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
