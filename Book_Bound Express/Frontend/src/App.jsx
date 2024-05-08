import { Routes,Route } from 'react-router-dom';
import New from './Pages/New';
import {ToastContainer} from 'react-toastify'
import Home from './Pages/Home';
import Edit from './Pages/Edit';
import {Provider} from 'react-redux'
import {store} from './Redux/store'
import Signup from './Pages/Signup';
import Login from './Pages/Login';
import Navbar from './Components/Navbar';
import ProtectedRoutes from './Components/ProtectedRoutes';
function App() {
return (
    <div className="bg-[url('./assets/bown_background.jpg')] bg-cover min-h-screen min-w-screen">
    <ToastContainer />
      <Provider store={store}>
        <Navbar />
      <Routes>
        <Route path='/new' element={<ProtectedRoutes><New/></ProtectedRoutes>}/>
        <Route path='/' element={<ProtectedRoutes><Home/></ProtectedRoutes>}/>
        <Route path='/edit' element={<ProtectedRoutes><Edit/></ProtectedRoutes>}/>
        <Route path='/register' element={<Signup/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
      </Provider>
    </div>
  )
}

export default App
