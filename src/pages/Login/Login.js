
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { setInfoUser } from '../../redux/action/userAction'
import './Login.scss'
import axios from 'axios'

import Header from "../Header/Header.js"
import Footer from "../Footer/Footer.js"

function Login() {

    const dispatch = useDispatch()
    const [eye, setEye] = useState('password')
    const [data, setData] = useState({
        username: '',
        password: ''
    })

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    let handleChangeLoginInput = (e, str) => {
        let newState = data;
        newState[str] = e.target.value;
        setData({
            ...newState
        })
    }

    let handleClickLogin = async () => {
        try {
            let rs = await axios.post('/api/login', { ...data })
            if (rs.data.errCode == 0) {
                let user = rs.data.data;
                console.log("user", user)
                if (rs.data.data) {
                    dispatch(setInfoUser(rs.data.data))
                    alert("Login success!");
                }
            } else {
                alert(rs.data.message)
            }
        } catch (e) {
            console.log(e)
        }
    }

    let handleChangeEye = () => {
        if (eye == 'password') {
            setEye('text');
        } else {
            setEye('password');
        }
    }

    return (
        <>
            <Header />
            <div id="login">
                <div id="form">
                    <div className="sign-in">Login
                        <Link to="/register">Creat new account</Link>
                    </div>
                    {/* <form action="https://git.heroku.com/server-react-s.git/login" method="POST"> */}
                    <form action="/login" method="POST">
                        <div className="content">
                            <div className="div-user">
                                <span>Username:</span>
                                <input type="text"
                                    name="username"
                                    placeholder="Username..."
                                    onChange={(e) => { handleChangeLoginInput(e, 'username') }}
                                />
                            </div>
                            <div className="div-pass">
                                <span>Password:</span>
                                <input type={eye}
                                    name="password"
                                    placeholder="Password..."
                                    onChange={(e) => { handleChangeLoginInput(e, 'password') }}
                                />
                                <div className="btn-eye" onClick={() => { handleChangeEye() }}>
                                    {eye == 'password' ? <i className="fa-solid fa-eye-slash"></i> : <i className="fa-solid fa-eye"></i>}
                                </div>
                            </div>
                            <div
                                className="btn-login"
                                onClick={() => { handleClickLogin() }}
                            >Login</div>
                        </div>
                    </form>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Login