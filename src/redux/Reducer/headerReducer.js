
let initialState = {
    isHeader: 'home'
}

const headerReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_NA_HEADER':
            let copyState = { ...state }
            copyState.isHeader = action.data
            return copyState;
        default:
            return state;
    }
}

export default headerReducer;