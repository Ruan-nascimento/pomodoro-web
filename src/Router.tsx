import { Routes, Route } from 'react-router-dom'
import { History } from './pages/History'
import { Home } from './pages/Home'
import { MainLayout } from './pages/layout/MainLayout/index'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/history" element={<History />} />
      </Route>
    </Routes>
  )
}
