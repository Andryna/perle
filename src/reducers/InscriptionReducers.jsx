import * as st from './actions/typesInscription'

const initState = {
    datas: {
        name: '',
        email: '',
        password: '',
        vpassword: '',
        ville: '',
        departement: '',
        region: '',
        pays: '',
        sexe: 'Homme',
        search: [],
        majeur: false,
        autorise_mail: false,
        condition_generale: false,
        condition_vente: false
    }
}

const InscriptionReducers = (state = initState, action) => {
    let newState = []
    switch (action.type) {
    case st.ADD_INSCRIPTION:
        newState = [...state.datas, action.data]
        return Object.assign({}, state, newState)
    case st.PUT_INSCRIPTION:
        return Object.assign({}, state, { datas: action.datas })
    default:
        return state
    }
}

export default InscriptionReducers
