import React from 'react'
import { Route, Routes } from 'react-router-dom'
import NotFound from '@/components/NotFound'
import Frontend from './Frontend'
import Auth from './Auth'
import Dashboard from './Dashboard'

const Index = () => {
  return (
    <Routes>
        <Route path='/*' element={<Frontend />} />
        <Route path='/auth/*' element={<Auth />} />
        <Route path='/dashboard/*' element={<Dashboard />} />
        <Route path='*' element={<NotFound />} />
    </Routes>
  )
}

export default Index