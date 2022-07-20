
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import './Register.scss'


function Register() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div id="register">
            <div id="form">
                <div className="sign-in">Register
                    <Link to="/login">Login</Link>
                </div>
                {/* <form action="https://git.heroku.com/server-react-s.git/register" method="POST"> */}
                <form action="/register" method="POST">
                    <span>Username:</span>
                    <input type="text" name="username" required placeholder="Username..." />

                    <span>Password:</span>
                    <input type="password" name="password" required placeholder="Password..." />

                    <span>Confirm password:</span>
                    <input type="password" name="confirm" required placeholder="Confirm password..." />

                    <button type="submit">Register</button>
                </form>
            </div>
        </div>
    );
}

export default Register