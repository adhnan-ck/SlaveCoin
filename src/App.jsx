
import {Route,createBrowserRouter,createRoutesFromElements,RouterProvider, Router} from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import FreeSlaves from './pages/FreeSlaves';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route index element={<HomePage />} />
        <Route path='/freedomFighter' element={<FreeSlaves />} />
      </Route>

      
      ))
  return (
    <>
    <RouterProvider router={router} />
    <ToastContainer />
    </>
    
  )
}

export default App
