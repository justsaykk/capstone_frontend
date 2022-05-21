import React, {useState} from "react";


function LoginPage() {
    // States
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    // Check if email field & password field is empty
    function validateForm() {
        return email.length > 0 && password.length > 0;
    }

    function handleSubmit(event) {
        event.preventDefault();
        // console.log("email is", email)
        // console.log("password is", password)
    }

    return (
        <div>
            <h1>Login Page</h1>
            <form onSubmit={handleSubmit}>
                <div className="email-input">
                    <label for="email-input">email</label>
                    <input type="email" value={email} onChange={(e) => {setEmail(e.target.value)}} />
                </div>
                <div className="password-input">
                    <label for="password-input">password</label>
                    <input type="password" value={password} onChange={(e) => {setPassword(e.target.value)}} />
                </div>
                <button type="submit" disabled={!validateForm()}>Login</button>
            </form>
        </div>
    )
}

export default LoginPage