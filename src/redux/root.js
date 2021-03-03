import {combineReducers} from 'redux'
import dataSummaryReducer from './reduce/data'

const rootReducers = combineReducers({
    dataSummary : dataSummaryReducer
})

export default rootReducers