import { Route } from "react-router-dom"
import { Switch } from "react-router-dom"

const Routes = () =>{
   
   
   
    return(
<Switch>
    <Route path='/' component={Dashboard}/>
    <Route path='/signup' component={signup}/>
    <Route path='/login' component={login}/>
</Switch>
    )
}