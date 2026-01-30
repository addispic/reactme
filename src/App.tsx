import {Routes, Route} from 'react-router-dom'

// layouts
import HomeLayout from './layouts/home/HomeLayout'
import AuthLayout from './layouts/auth/AuthLayout'

// pages
import Home from './pages/Home'
import Comments from './pages/Comments'

function App() {
  

  return (
    <Routes>
      {/* home */}
      <Route path='/' element={<HomeLayout />}>

      <Route index element={<Home />}/>
      <Route path='comments/:id' element={<Comments />}/>

      </Route>
      {/* auth */}
      <Route path='/auth' element={<AuthLayout />}>

      </Route>
    </Routes>
  )
}

export default App
