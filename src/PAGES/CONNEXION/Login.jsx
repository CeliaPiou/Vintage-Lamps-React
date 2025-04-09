import React, { useState, useEffect, useContext } from 'react'

// Constant
import { LOGIN_FIELDS } from '../../UTILS/configs/FormFields'

//Context
import { AuthContext } from '../../UTILS/contexts/AuthContext'
// const { login } = useContext(AuthContext);


const Login = () => {

    const [ user, setUser ] = useState({})
    const { login } = useContext(AuthContext);
    const handleChange = event => {
        const { name, value } = event.target;
        setUser(prevUser => ({...prevUser, [name] : value }))
    }
    const handleSubmit = event => {
        event.preventDefault();
        login(user)
    }


    return (

        <div className='flex column justify-content-center'>Login
            <form onSubmit={handleSubmit}>
                {LOGIN_FIELDS.map(field => (
                    <div key={field.id}>

                        <label htmlFor={field.id}></label>
                        <input
                            onChange={handleChange}
                            className='mt-small'
                            name={field.name}
                            id={field.id}
                            placeholder={field.placeholder}
                            type={field.type}
                        ></input>

                    </div>
                ))}
                <button className='btn5'>Log In</button>
            </form>


        </div>

    )
}

export default Login