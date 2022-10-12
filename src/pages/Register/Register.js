
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import './Register.scss'
import axios from '../../axios.js';
import Header from "../Header/Header.js"
import Footer from "../Footer/Footer.js"


function Register() {
    // const [image, setImage] = useState({
    //     URL: "",
    //     displayImage: "none"
    // })
    // const [eye, setEye] = useState('password')
    const [state, setState] = useState({
        username: "",
        password: "",
        email: "",
        firstname: "",
        lastname: "",
        address: "",
        phonenumber: "",
        gender: "Male",
        role: "User",
        avatar: "",
        eye: "password",
        URLImage: "",
        displayImage: "none"
    });

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

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

    let handleClickRegister = async () => {
        let data = {
            username: state.username,
            password: state.password,
            email: state.email,
            firstname: state.firstname,
            lastname: state.lastname,
            address: state.address,
            phonenumber: state.phonenumber,
        }
        let check = validateForm(data)
        let dataPost = {
            ...data,
            gender: "Male",
            role: "User",
            avatar: state.avatar
        }
        if (check) {
            let rs = await axios.post('/api/create-user', dataPost)
            if (rs.errCode === 0) {
                alert("Create Account Successfully!")
            } else {
                alert(rs.message)
            }
        }
    }

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

    const toBase64 = (file) => new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
    });

    let handleOnchangeImage = async (e) => {
        let data = e.target.files;
        let file = data[0];
        if (file) {
            let object = URL.createObjectURL(file);
            let copyState = { ...state }
            copyState.URLImage = object;
            copyState.displayImage = "block";
            copyState.avatar = await toBase64(file);
            setState(copyState)
        }
    }
    return (
        <>
            <Header />
            <div id="register">
                <div className="sign-in">Register
                    <Link to="/login">Login</Link>
                </div>
                <form>
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
                            <label htmlFor="inputState">Gender</label>
                            <select id="inputState" className="form-control" name="gender" onChange={(e) => { handleChangeInput(e, "gender") }}>
                                <option defaultValue>Male</option>
                                <option>Femal</option>
                                <option>orther</option>
                            </select>
                        </div>
                        <div className="form-group col-3 image-class">
                            <label htmlFor="avatar">
                                Avatar
                                <i className="fas fa-upload"></i>
                            </label>
                            <input
                                id="avatar"
                                type="file"
                                onChange={(e) => { handleOnchangeImage(e) }}
                            />
                            <div className="show-image"
                                style={{ display: state.displayImage }}
                            >
                                <img src={state.URLImage} />
                            </div>
                        </div>
                    </div>
                    <div className="register">
                        <div onClick={() => { handleClickRegister() }} >Create Account</div>
                    </div>
                </form>
            </div>
            <Footer />
        </>
    );
}

export default Register