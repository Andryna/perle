import { ADD } from './actions/typesPrincipal'

const initState = {
    dataPrix: [
        {
            id_prix: 1,
            idEvenements: 1,
            nomPrix: 'reservation',
            valuePrix: 10000
        }
    ]
}

const PrincipalReducers = (state = initState, action) => {
    let newState = []
    switch (action.type) {
    case ADD:
        newState = [...state.dataAchats, action.data]
        return Object.assign({}, state, newState)
    default:
        return state
    }
}

export default PrincipalReducers
