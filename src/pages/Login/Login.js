
import { Link } from 'react-router-dom'
import { useEffect } from 'react'

import './Login.scss'

function Login() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div id="login">
            <div id="form">
                <div className="sign-in">Login
                    <Link to="/register">Creat new account</Link>
                </div>
                {/* <form action="https://git.heroku.com/server-react-s.git/login" method="POST"> */}
                <form action="/login" method="POST">
                    <span>Username:</span>
                    <input type="text" name="username" required placeholder="Username..." />
                    <span>Password:</span>
                    <input type="password" name="password" required placeholder="Password..." />
                    <button type="submit">Login</button>
                </form>
            </div>
        </div>
    )
}

export default Login