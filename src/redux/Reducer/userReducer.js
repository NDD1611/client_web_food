
let initialState = {
    username: '',
    password: '',
    firstname: '',
    lastname: '',
    address: '',
    phonenumber: '',
    gender: '',
    role: ''
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_INFO_USER':
            let copyState = { ...state }
            copyState = { ...action.data }
            return copyState;
        default:
            return state;
    }
}

export default userReducer;