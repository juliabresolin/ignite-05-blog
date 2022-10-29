import { Route, Routes } from 'react-router-dom'
import { DefaultLayout } from './layouts/DefaultLayout'
import { Home } from './pages/Home'
import { IssueDetail } from './pages/IssueDetail'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path=":issueId" element={<IssueDetail />} />
      </Route>
    </Routes>
  )
}
