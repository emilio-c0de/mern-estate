
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home, Profile, SignUp, Signin } from './pages'
import Header from './components/Header'
const App = () => {
  return (<BrowserRouter>
    <Header />
    <Routes>
      <Route path='/' element={<Home />}>Home</Route>
      <Route path='/sign-in' element={<Signin />} />
      <Route path='/sign-up' element={<SignUp />} />
      <Route path='/about' element={<SignUp />} />
      <Route path='/profile' element={<Profile />} />
    </Routes>
  </BrowserRouter>)
}

export default App