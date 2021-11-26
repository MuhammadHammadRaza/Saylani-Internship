import { Routes as AppRoutes, Route } from "react-router-dom"
import Signup from './components/Signup.js'
import Login from './components/Login.js'
import Dashboard from './components/dashboard.js'
const Routes = () =>{
   
   
   
    return(
<AppRoutes>
    <Route path='/' element={<Login/>}/>
    <Route path='Home' element={<Dashboard/>}/>
    <Route path='/Signup' element={<Signup/>}/>
</AppRoutes>
    )
}
export default Routes;