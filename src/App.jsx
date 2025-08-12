import React from 'react'
import { Routes, Route } from 'react-router-dom'
import PublicCard from './pages/PublicCard'
import Dashboard from './pages/Dashboard'
import EditorPage from './pages/EditorPage'
import AuthPage from './pages/AuthPage'

export default function App(){
  return (
    <Routes>
      <Route path="/" element={<AuthPage/>} />
      <Route path="/dashboard/*" element={<Dashboard/>} />
      <Route path="/editor/:id?" element={<EditorPage/>} />
      {/* <Route path="/:slug" element={<PublicCard/>} /> */}
      {/* <Route path="*" element={<div className="p-8">404</div>} /> */}
    </Routes>
  )
}