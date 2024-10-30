import { createBrowserRouter, RouterProvider } from 'react-router-dom' 
import Layout from './layout/Layout';
import MainPage from './pages/MainPage';
import './css/index.css'
import Country from './pages/Country';

const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      id: "root",
      children:[
        {path: '', element: <MainPage />},
        {path: ':id', element: <Country />}
      ]
    }
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
