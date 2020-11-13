import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Login from './Page/Login/login'
import LandingPage from './Page/Home/landingPage'
export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component ={LandingPage}/>
                <Route path='/login' component = {Login} />

            </Switch>
        </BrowserRouter>   

    )    
}