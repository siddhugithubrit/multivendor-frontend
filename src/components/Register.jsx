import React, { useState } from 'react';
import API from '../services/api';

const Register = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        role: 'CUSTOMER' // 👉 "ROLE_" काढून टाकला
    });
    const [showPassword, setShowPassword] = useState(false); // पासवर्ड दाखवण्यासाठी state
    const [message, setMessage] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await API.post('/auth/register', formData);
            setMessage('Registration successful! You can now log in.');
        } catch (error) {
            setMessage('Registration failed! Username or email might already be taken.');
        }
    };

    return (
        <div style={{ maxWidth: '400px', margin: '30px auto', padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
            <h2>Register</h2>
            <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: '10px' }}>
    <label>Full Name:</label>
    <input 
        type="text" 
        name="name" 
        value={formData.name} 
        onChange={handleChange} 
        required 
        style={{ width: '100%', padding: '8px', marginTop: '5px' }}
    />
</div>
                <div style={{ marginBottom: '10px' }}>
                    <label>Email:</label>
                    <input 
                        type="email" 
                        name="email" 
                        value={formData.email} 
                        onChange={handleChange} 
                        required 
                        style={{ width: '100%', padding: '8px', marginTop: '5px' }}
                    />
                </div>
                <div style={{ marginBottom: '10px' }}>
                    <label>Password:</label>
                    <div style={{ position: 'relative', marginTop: '5px' }}>
                        <input 
                            type={showPassword ? "text" : "password"} // कंडीशनल टाईप
                            name="password" 
                            value={formData.password} 
                            onChange={handleChange} 
                            required 
                            style={{ width: '100%', padding: '8px', paddingRight: '60px', boxSizing: 'border-box' }}
                        />
                        <button 
                            type="button" 
                            onClick={() => setShowPassword(!showPassword)}
                            style={{ 
                                position: 'absolute', 
                                right: '5px', 
                                top: '50%', 
                                transform: 'translateY(-50%)', 
                                background: 'none', 
                                border: 'none', 
                                color: '#007bff', 
                                cursor: 'pointer',
                                fontSize: '12px',
                                fontWeight: 'bold'
                            }}
                        >
                            {showPassword ? "Hide" : "Show"}
                        </button>
                    </div>
                </div>
                <div style={{ marginBottom: '10px' }}>
                    <label>Role:</label>
                    <select 
    name="role" 
    value={formData.role} 
    onChange={handleChange}
    style={{ width: '100%', padding: '8px', marginTop: '5px' }}
>
    <option value="CUSTOMER">Customer</option>
    <option value="VENDOR">Seller</option>
</select>
                </div>
                <button type="submit" style={{ padding: '10px 15px', backgroundColor: '#28a745', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer', width: '100%' }}>
                    Register
                </button>
            </form>
            {message && <p style={{ marginTop: '15px', textAlign: 'center' }}>{message}</p>}
        </div>
    );
};

export default Register;