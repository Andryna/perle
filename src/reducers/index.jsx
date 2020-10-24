import { combineReducers } from 'redux'
import PrincipalReducers from './PrincipalReducers'
import InscriptionReducers from './InscriptionReducers'

export default combineReducers(
    {
        principal: PrincipalReducers,
        inscription: InscriptionReducers
    }
)
