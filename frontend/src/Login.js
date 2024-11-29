import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { callApi } from './Api'


function Login() {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });
    const [error, setError] = useState('');
    const [IsSubmitted, setIsSubmitted] = useState(false);

    const handleInputChange = (e) => {
        const filedname = e.target.name;
        const value = e.target.value
        setFormData({ ...formData, [filedname]: value });
    }
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const data = await callApi('/auth/login', formData); 
            setIsSubmitted(true);
            setError('');
        } catch (err) {
            setError(err.message);
            setIsSubmitted('');
        }
    };
    return (
        <>
        <div style={{display: 'flex',justifyContent: 'center',alignItems: 'center',height: '100vh',}}>
            <div style={{ width: '50%', margin: 'auto', borderRadius: '10px', background: 'rgb( 180, 125, 223)' }}>
                <div>
                    <h2 style={{ color: 'white', fontWeight: 'bold', fontSize: '25px' }}>Login for Resume Analyzer</h2>
                </div>
                <form style={{ padding: '20px' }} onSubmit={handleSubmit}>

                    <input
                        type="email"
                        name="email"
                        placeholder="Enter Email e.g. example@gmail.com"
                        onChange={handleInputChange}
                        style={{ padding: '10px', width: '70%', borderRadius: '5px', border: '2px solid rgb(152, 42, 243)' }} />
                    <br />
                    <br />

                    <input
                        type="password"
                        name="password"
                        placeholder="Enter Password"
                        onChange={handleInputChange}
                        style={{ padding: '10px', width: '70%', borderRadius: '5px', border: '2px solid rgb(152, 42, 243)' }} />
                    <br />
                    <br />
                    <div>
                        <input
                            type='submit'
                            name='signup'
                            value='Sign Up'
                            style={{ padding: '15px', width: '40%', borderRadius: '10px', background: 'rgb(163, 160, 165', color: 'white', fontWeight: 'bold', fontSize: '20px', fontFamily: 'Arial, sans-serif', cursor: 'pointer', transition: 'all 1s ease-in-out' }}
                            onMouseEnter={(e) => {
                                e.target.style.background = 'white';
                                e.target.style.color = 'rgb(163, 160, 165)';
                                e.target.style.borderColor = 'rgba(163, 160, 165, 0.8)';
                            }}
                            onMouseLeave={(e) => {
                                e.target.style.background = 'rgb(163, 160, 165)';
                                e.target.style.color = 'white';
                                e.target.style.borderColor = 'rgb(163, 160, 165)';
                            }} />
                    </div>
                </form>
                {error && <p style={{ color: 'red' }}>{error}</p>}
                {IsSubmitted && <p style={{ color: 'green' }}>Login successfully!</p>}
                <p style={{ color: 'white', fontWeight: 'bold', fontSize: '16px', paddingBottom: '10px' }}>Don't have an account? <Link to='/signup' style={{ color: 'inherit' }}>signup here</Link></p>

            </div>
            </div>
        </>
    )
}

export default Login
