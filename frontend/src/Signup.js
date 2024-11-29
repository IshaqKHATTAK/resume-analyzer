import { Link } from 'react-router-dom';
import { callApi } from './Api'
import React, { useState } from 'react';


function Signup() {
    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        email: '',
        password: '',
    });

    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const data = await callApi('/auth/create-account', formData); 
            setSuccess('Account created successfully!');
            setError('');
        } catch (err) {
            setError(err.message);
            setSuccess('');
        }
    };

    return (
        <>
        <div style={{display: 'flex',justifyContent: 'center',alignItems: 'center',height: '100vh',}}>
            <div style={{ width: '50%', margin: 'auto', borderRadius: '10px', background: 'rgb( 180, 125, 223)' }}>
                <div>
                    <h2 style={{ color: 'white', fontWeight: 'bold', fontSize: '25px' }}>SignUp for Resume Analyzer</h2>
                </div>
                <form style={{ padding: '20px' }} onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="first_name"
                        placeholder='First Name'
                        value={formData.first_name}
                        onChange={handleInputChange}
                        style={{ padding: '10px', width: '31.5%', marginRight: '10px', borderRadius: '5px', border: '2px solid rgb(152, 42, 243)' }} />

                    <input
                        type="text"
                        name="last_name"
                        placeholder="Last Name"
                        value={formData.last_name}
                        onChange={handleInputChange}
                        style={{ padding: '10px', width: '31.5%', marginLeft: '10px', borderRadius: '5px', border: '2px solid rgb(152, 42, 243)' }} />
                    <br />
                    <br />

                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Enter Email e.g. example@gmail.com"
                        style={{ padding: '10px', width: '70%', borderRadius: '5px', border: '2px solid rgb(152, 42, 243)' }} />
                    <br />
                    <br />

                    <input
                        type="password"
                        name="password"
                        placeholder="Enter Password"
                        value={formData.password}
                        onChange={handleInputChange}
                        style={{ padding: '10px', width: '70%', borderRadius: '5px', border: '2px solid rgb(152, 42, 243)' }} />
                    <br />
                    <br />
                    <div>
                        <input
                            type='submit'
                            name='signup'
                            value='Sign Up'
                            style={{ padding: '15px', width: '40%', borderRadius: '10px', background: 'rgb(163, 160, 165)', color: 'white', fontWeight: 'bold', fontSize: '20px', fontFamily: 'Arial, sans-serif', cursor: 'pointer', transition: 'all 1s ease-in-out' }}
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
                {success && <p style={{ color: 'green' }}>{success}</p>}
                <p style={{ color: 'white', fontWeight: 'bold', fontSize: '16px', paddingBottom: '10px' }}>Already have an account? <Link to='/login' style={{ color: 'inherit' }}
                >login here</Link></p>

            </div>
            </div>
        </>
    )
}

export default Signup
