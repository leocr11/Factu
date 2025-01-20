import React from 'react';
import { BrowserRouter, Routes, Route, useRoutes } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import CrearFactura from './pages/CrearFactura';
import ListaFacturas from './pages/ListaFacturas';
import { AuthProvider } from './contexts/AuthContext';
const AppRoutes = () => {
  let Routes = useRoutes([
    { path: '/', element: <Layout />, 
      children: [
        { index:true, element: <Dashboard /> },	
        {
          path: 'facturas',
          children: [
            { index: true, element: <ListaFacturas /> },
            { path: 'crear', element: <CrearFactura /> }
          ]
        }
      ]
    }
  ])
  return Routes;
}
const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <AppRoutes/>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;