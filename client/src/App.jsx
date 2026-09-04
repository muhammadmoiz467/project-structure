import React from 'react'
import "./App.scss"
import "bootstrap/dist/js/bootstrap.bundle"
// import "bootstrap/dist/js/bootstrap.bundle.min.js"
import Routes from './pages/Routes'
import { ConfigProvider } from 'antd'
import { useAuth } from './context/Auth'
import ScreenLoader from './components/misc/ScreenLoader'

const App = () => {

  const { isAppLoading } = useAuth()

  return (
    <ConfigProvider theme={{ token: { colorPrimary: "#1d3557" }, components: { Button: { controlOutline: 0 } } }}>
      { isAppLoading ? <ScreenLoader /> : <Routes /> }
    </ConfigProvider>
  )
}

export default App