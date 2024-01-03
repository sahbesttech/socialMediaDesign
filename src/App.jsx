import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button, Stack } from '@mui/material'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import { Feed } from '@mui/icons-material'
import Rightbar from './components/Rightbar'
import Feeds from './components/Feeds'

function App() {

  return (
    <>
      <Navbar/>
      <Stack direction='row' >
        <Sidebar/>
        <Feeds/>
        <Rightbar/>
      </Stack>
    </>
  )
}

export default App
