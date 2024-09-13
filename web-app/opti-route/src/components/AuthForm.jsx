import './AuthForm.css'

function AuthForm() {
    return(
        <>
        <div className="container">
            <div className="heading">Sign In</div>
            <form className="form" action="">
                <input
                placeholder="E-mail"
                id="email"
                name="email"
                type="email"
                className="input"
                required=""
                />
                <input
                placeholder="Password"
                id="password"
                name="password"
                type="password"
                className="input"
                required=""
                />
                <input value="Sign In" type="submit" className="login-button" />
            </form>
        </div>
        </>
    )
}

export default AuthForm
