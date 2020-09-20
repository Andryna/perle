import { combineReducers } from 'redux'
import PrincipalReducers from './PrincipalReducers'

export default combineReducers(
    {
        principal: PrincipalReducers
    }
)
