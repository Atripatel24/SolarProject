import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import logo from '../assets/logo.png';

const Signup = ({ setIsAuth, getAuthDetails }) => {
    const [formData, setFormData] = useState({ name: '', password: '' });
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (formData.name === "AdminSamarth" && formData.password === "Samarth@Energy123") {
            localStorage.setItem('auth', JSON.stringify({ isAuth: true }));
            getAuthDetails();
            navigate('/'); // Navigate to the dashboard after signup
        } else if (formData.name === "Samarth" && formData.password === "Mayur@123") {
            localStorage.setItem('auth', JSON.stringify({ isAuth: true }));
            getAuthDetails();
            navigate('/'); // Navigate to the dashboard after signup
        } else {
            Swal.fire({
                title: 'Error',
                text: "Invalid Login Credentials",
                icon: "error",
                customClass: {
                    confirmButton: 'custom-error-button' 
                }
            });
        }
    };

    const handleDownload = () => {
        // Create a virtual link for downloading the app
        const link = document.createElement('a');
        link.href = "https://example.com/path-to-your-app.zip"; // Replace with the actual file URL
        link.download = "MyApp.zip"; // Replace with your desired file name
        link.click();
    };

    return (
        <div style={styles.signup}>
            <form onSubmit={handleSubmit} style={styles.form}>
                <center>
                    <img src={logo} style={{ height: "200px", width: "200px" }} alt="Logo" />
                </center>
                <div style={styles.formGroup}>
                    <label htmlFor="name" style={styles.label}>Name</label>
                    <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        placeholder="Enter your name" 
                        onChange={handleChange} 
                        required 
                        style={styles.input} 
                    />
                </div>
                <div style={styles.formGroup}>
                    <label htmlFor="password" style={styles.label}>Password</label>
                    <input 
                        type="password" 
                        id="password" 
                        name="password" 
                        placeholder="Enter your password" 
                        onChange={handleChange} 
                        required 
                        style={styles.input} 
                    />
                </div>
                <button type="submit" style={styles.button}>Submit</button>
                <button 
                    type="button" 
                    className="download-btn" 
                    id="downloadButton" 
                    onClick={handleDownload} 
                    style={styles.button}>
                    Download App
                </button>
            </form>
        </div>
    );
};

// Inline CSS Styles
const styles = {
    signup: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#f0f4f8',
    },
    form: {
        backgroundColor: '#fff',
        padding: '30px',
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        width: '100%',
        maxWidth: '400px',
        textAlign: 'center',
    },
    heading: {
        fontSize: '28px',
        marginBottom: '20px',
        color: '#333',
    },
    formGroup: {
        marginBottom: '20px',
        textAlign: 'left',
    },
    label: {
        display: 'block',
        marginBottom: '8px',
        fontSize: '16px',
        color: '#555',
    },
    input: {
        width: '90%',
        padding: '10px',
        fontSize: '14px',
        borderRadius: '5px',
        border: '1px solid #ccc',
        boxSizing: 'border-box',
    },
    button: {
        marginBottom: "5%",
        width: '100%',
        padding: '12px',
        backgroundColor: '#0295B6',
        color: '#fff',
        fontSize: '16px',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
    },
    buttonHover: {
        backgroundColor: '#027fa1',
    },
};

export default Signup;
