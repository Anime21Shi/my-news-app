import React from 'react'
import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom'
import HomePage from './pages/HomePage'
import BusinessPage from './pages/BusinessPage'
import EntertainmentPage from './pages/EntertainmentPage'
import HealthPage from './pages/HealthPage'
import SportsPage from './pages/SportsPage'
import TechnologyPage from './pages/TechnologyPage'
import MainLayout from './layouts/MainLayout'
import Search from './pages/Search'


const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path='/news/technology' element={<TechnologyPage />} />
        <Route path='/news/sports' element={<SportsPage />} />
        <Route path='/news/entertainment' element={<EntertainmentPage />} />
        <Route path='/news/business' element={<BusinessPage />} />
        <Route path='/news/health' element={<HealthPage />} />
        <Route path='/search/:query' element={<Search />} />
      </Route>
    )
  );

  return (
    <RouterProvider router={router}/>
  )
}

export default App
