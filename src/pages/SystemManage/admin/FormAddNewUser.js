
import { useState } from "react"
import "./FormAddNewUser.scss"
import axios from '../../../axios.js';

function FormAddNewUser(props) {
    const [state, setState] = useState({
        username: "",
        password: "",
        email: "",
        firstname: "",
        lastname: "",
        address: "",
        phonenumber: "",
        gender: "Male",
        role: "Admin",
        eye: "password"
    })
    let handleChangeInput = (e, str) => {
        let newState = state;
        newState[str] = e.target.value;
        setState({ ...newState })
    }
    let handleChangeEye = () => {
        if (state.eye === 'password') {
            let copyState = { ...state }
            copyState.eye = 'text';
            setState(copyState)
        } else {
            let copyState = { ...state }
            copyState.eye = 'password';
            setState(copyState)
        }
    }
    let validateForm = (user) => {
        let check = true;
        for (let field in user) {
            if (user[field] === '') {
                alert("Missing required parameter: " + field)
                check = false;
                break;
            }
        }
        return check;
    }
    let createNewUser = async () => {
        let data = {
            username: state.username,
            password: state.password,
            email: state.email,
            firstname: state.firstname,
            lastname: state.lastname,
            address: state.address,
            phonenumber: state.phonenumber,
            gender: state.gender,
            role: state.role
        }
        let check = validateForm(data);
        if (check) {
            let rs = await axios.post('/api/create-user', data)
            if (rs.errCode === 0) {
                alert("Create Account Successfully!")
            } else {
                alert(rs.message)
            }
        }
    }
    return (
        <form id="FormAddNewUser">
            <div className="closeForm"
                onClick={() => { props.btnCreatUserClick() }}
            >
                <i className="fa-solid fa-xmark"></i>
            </div>
            <div className="row">
                <div className="form-group col-6">
                    <label htmlFor="username">Username:</label>
                    <input type="text" className="form-control" id="username" placeholder="Username..." onChange={(e) => { handleChangeInput(e, "username") }} />
                </div>
                <div className="form-group col-6 password">
                    <label htmlFor="password">Password:</label>
                    <input type={state.eye} className="form-control" id="password" placeholder="Password" onChange={(e) => { handleChangeInput(e, "password") }} />
                    <div className="btn-eye"
                        onClick={() => { handleChangeEye() }}
                    >
                        {state.eye === 'password' ? <i className="fa-solid fa-eye-slash"></i> : <i className="fa-solid fa-eye"></i>}
                    </div>
                </div>
            </div>
            <div className="row my-3">
                <div className="form-group col-6">
                    <label htmlFor="email">Email:</label>
                    <input type="text" className="form-control" id="email" placeholder="Email..." onChange={(e) => { handleChangeInput(e, "email") }} />
                </div>
                <div className="form-group col-6">
                    <label htmlFor="firstname">First Name:</label>
                    <input type="text" className="form-control" id="firstname" placeholder="First Name..." onChange={(e) => { handleChangeInput(e, "firstname") }} />
                </div>
            </div>
            <div className="row">
                <div className="form-group col-6">
                    <label htmlFor="lastname">Last Name:</label>
                    <input type="text" className="form-control" id="lastname" placeholder="Last Name..." onChange={(e) => { handleChangeInput(e, "lastname") }} />
                </div>
                <div className="form-group col-6">
                    <label htmlFor="address">Address:</label>
                    <input type="text" className="form-control" id="address" placeholder="Address..." onChange={(e) => { handleChangeInput(e, "address") }} />
                </div>
            </div>
            <div className="row my-3">
                <div className="form-group col-6">
                    <label htmlFor="phonenumber">Phonenumber:</label>
                    <input type="text" className="form-control" id="phonenumber" placeholder="Phonenumber..." onChange={(e) => { handleChangeInput(e, "phonenumber") }} />
                </div>
                <div className="form-group col-3">
                    <label htmlFor="inputState">Gender:</label>
                    <select id="inputState" className="form-control" name="gender" onChange={(e) => { handleChangeInput(e, "gender") }}>
                        <option defaultValue>Male</option>
                        <option>Femal</option>
                        <option>orther</option>
                    </select>
                </div>
                <div className="form-group col-3">
                    <label htmlFor="inputState">Role:</label>
                    <select id="inputState" className="form-control" name="gender" onChange={(e) => { handleChangeInput(e, "role") }}>
                        <option defaultValue>Admin</option>
                        <option>Manager</option>
                        <option>User</option>
                    </select>
                </div>
            </div>
            <div className="btn-create">
                <div onClick={() => { createNewUser() }}>
                    Create User
                </div>
            </div>
        </form>
    );
}

export default FormAddNewUser;