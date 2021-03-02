import { Switch, Route } from 'react-router-dom';
import Home from '../view/Home'

const router = () => {
    return (
        <Switch>
            <Route path="/" exact>
                <Home/>
            </Route>
        </Switch>
    )
}

export default router