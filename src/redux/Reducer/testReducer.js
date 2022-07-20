
let initialState = {
    isTestr: 'test'
}

const testReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'IS_TEST':
            console.log('check from testReducer')
            return state;
        default:
            return state;
    }
}

export default testReducer;