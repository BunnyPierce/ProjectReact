import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './Pages/HomePage'
import Places from './Pages/Places'
import Flights from './Pages/Flights'
import Login from './Pages/Login'
import SignUp from './Pages/SignUp'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Places" element={<Places />} />
          <Route path="/Flights" element={<Flights />} />
          <Route path={"/Login"} element={<Login />} />
          <Route path={"SignUp"} element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
