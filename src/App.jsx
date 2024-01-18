import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom";
import './App.css'
import Layout from './components/Layout';
import GestionProjects from './screens/GestionProjects';
import GestrionAccount from './screens/GestionAccount';
import BoardTable from './screens/BoardTable';
import Login from './screens/Login';


function App() {

  const isAuthenticated = () => {
    const username = localStorage.getItem('username');
    const tokenExpiration = localStorage.getItem('tokenExpiration');

    if (username && tokenExpiration) {
      const currentTimestamp = Math.floor(new Date().getTime() / 1000);
      if (currentTimestamp > parseInt(tokenExpiration, 10)) {
        localStorage.removeItem('username');
        localStorage.removeItem('tokenExpiration');
        return false;
      }
      return true;
    }

    return false;
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
