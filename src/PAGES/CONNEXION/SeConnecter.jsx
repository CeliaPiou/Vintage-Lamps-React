import React from 'react'

const SeConnecter = () => {
    return (
        <>
            <form action="post">
                <label htmlFor="Email">Email</label>
                <input id="Email" placeholder="Enter your mail" />

                <label htmlFor="Password">Password</label>
                <input id="Password" placeholder="Enter your password" />
            </form>

            <button className="btn4 mt-small" type="submit">
            LOGIN
            </button>
            <p>Forgot password?</p>
        </>
    )
}

export default SeConnecter