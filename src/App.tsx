import { Outlet } from 'react-router-dom'
import './App.module.scss'
import GlobalHeader from './components/GlobalHeader/GlobalHeader'
import Router from './router/router'

const App = () => {
  return (
    <>
      <GlobalHeader />
      <Router />
      <Outlet />
    </>
  )
}

export default App
