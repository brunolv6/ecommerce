//caso não haja nenhum estado anterior, assume este
const INITIAL_STATE = {
    currentUser: ''
}

//retorna objeto com o novo estado caso haja modificação
export const userReducer = (state = INITIAL_STATE, action) => {
    //aciona o tipo de mudança se houver
    switch (action.type) {
        //se este for o tipo de ação faz as devidas modificações no objeto
        case 'SET_CURRENT_USER':
            return {
                ...state,
                currentUser: action.payload
            }
        default:
            return {
                ...state
            }
    }
}