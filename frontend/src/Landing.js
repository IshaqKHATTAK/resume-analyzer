import React from 'react'
import './Landing.css'
// Home, services, about, contact us
const button_style = { textDecoration: 'none', color: 'white', margin: '40px', fontSize: '18px', fontWeight: 'bold', background: 'rgb( 180, 125, 223)' }
function Landing() {
    return (
        <>

            <div>
                <ul style={{ listStyle: 'none', display: 'flex', justifyContent: 'center', margin: '30px', padding: '1rem 1rem' }}>
                    <li><a href="#home" className="hover-button">Home</a></li>
                    <li><a href="#services" className="hover-button">Servies</a></li>
                    <li><a href="#about" className="hover-button">About</a></li>
                    <li><a href="#contactus" className="hover-button">Contact Us</a> </li>
                </ul>
            </div>
            <div className="horizontal-container">
                <div className="welcome-container">
                    <h1>Welcome.</h1>
                    <p>Here we synthesize, summarize, and strategize resumes to make them job-fit.</p>
                    <p>Try out our services and signup now!</p>
                    
                </div>
                <div className="services-container">
                    <h3>Our servies include</h3>
                    <span>
                        <p>Context aware resume refinement.</p>
                        <p>Resume ranking.</p>
                        <p>Suggest possible career.</p>
                        <p>Suggest jobs based on resume.</p>
                    </span>
                </div>
            </div>
            <div >
                <ul style={{ listStyle: 'none', display: 'flex', justifyContent: 'left', }}>
                    <li><a href="signup" className="Singup-login">Sign Up</a></li>
                    <li><a href="login" className="Singup-login">LogIn</a> </li>
                </ul>
            </div>
            
        </>
    )
}

export default Landing
