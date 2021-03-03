import { Switch, Route } from 'react-router-dom';
import Home from '../view/Home'
import Data from '../view/Data/Data'
import Prevent from '../view/Preventions'
import News from '../view/News'
import About from '../view/About'

const router = () => {
    return (
        <Switch>
            <Route path="/" exact>
                <Home/>
            </Route>
            <Route path="/data">
                <Data/>
            </Route>
            <Route path="/preventions">
                <Prevent/>
            </Route>
            <Route path="/news">
                <News/>
            </Route>
            <Route path="/about">
                <About/>
            </Route>
        </Switch>
    )
}

export default router