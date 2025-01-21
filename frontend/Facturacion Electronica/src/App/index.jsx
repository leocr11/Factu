import { useRoutes, BrowserRouter } from 'react-router-dom'
import Home from '../pages/Home'
import NoFound from '../pages/NoFound'
import Layout from '../components/Layout'
import Dashboard from '../pages/Dashboard';
import CrearFactura from '../pages/CrearFactura';
import ListaFacturas from '../pages/ListaFacturas';
import './App.css'

const AppRoutes = () => {
  let routes = useRoutes([
    {
      path: '/', element: <Layout />,
      children: [
        { index: true, element: <Dashboard /> },
        {
          path: 'facturas',
          children: [
            { index: true, element: <ListaFacturas /> },
            { path: 'crear', element: <CrearFactura /> }
          ]
        }
      ]
    },
    { path: '/*', element: <NoFound /> },
  ])

  return routes
}

const App = () => {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  )
}

export default App