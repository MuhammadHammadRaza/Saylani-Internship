import { Routes as AppRoutes, Route } from "react-router-dom"
import Signup from './pages/Signnup'
import Login from './pages/Login'
import Dashboard from './pages/dashboard'
const Routes = () => {
    return (
        <AppRoutes>
            <Route path='/' element={<Login />} />
            <Route path='Home' element={<Dashboard />} />
            <Route path='/Signup' element={<Signup />} />
        </AppRoutes>
    )
}
export default Routes;