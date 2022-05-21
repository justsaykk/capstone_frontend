import React, {useState} from "react";

function Registration() {
    // Logic Here
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    function validateForm() {
        return email.length > 0 && password.length > 6;
    }

    return (
        <div>
            <div className="registration-name">
                <label for="registrationName">Name</label>
                <input type="input" value={name} onChange={e => {setName(e.target.value)}} />
            </div>
            <div className="registration-email">
                <label for="registrationEmail">Email</label>
                <input type="input" value={email} onChange={e => {setEmail(e.target.value)}} />
            </div>
            <div className="registration-pw">
                <label for="registrationPW">Password</label>
                <input type="password" value={password} onChange={e => {setPassword(e.target.value)}} />
            </div>
            <button type="submit" disabled={!validateForm()}>Register!</button>
        </div>
    )
}

export default Registration