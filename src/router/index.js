import { Switch, Route } from 'react-router-dom';
import Home from '../view/Home'
import Data from '../view/Data'

const router = () => {
    return (
        <Switch>
            <Route path="/" exact>
                <Home/>
            </Route>
            <Route path="/data">
                <Data/>
            </Route>
        </Switch>
    )
}

export default router