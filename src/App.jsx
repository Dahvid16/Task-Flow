import React, {useEffect } from 'react'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import MainPage from './Pages/MainPage'
import Layout from './MainLayout/Layout';
import NotFound from './Pages/NotFound';
import './Styling/Global.css'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='*' element={ <NotFound/> }/>
      <Route index element={<MainPage/>} />
    </Route>
  )
);
const App = () => {
  
  useEffect(() => {
    if ("scrollRestoration" in window.history){
      window.history.scrollRestoration= "manual";
    }
    window.scrollTo(0, 0);

    if (window.location.hash) {
      window.history.replaceState(null, "", "/");
    }
  }, []);

  return <RouterProvider router={router}/>
}

export default App