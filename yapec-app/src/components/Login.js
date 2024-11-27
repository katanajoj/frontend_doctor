import React, { useState } from 'react';
import axios from 'axios';

const Login = ({ onLogin }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3000/api/login', { username, password });
            if (response.data.success) {
                onLogin(response.data.user);
            } else {
                alert('Неверный логин или пароль');
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="login-container">
            <h2>Авторизация</h2>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    placeholder="Логин" 
                    value={username} 
                    onChange={(e) => setUsername(e.target.value)} 
                    required 
                />
                <input 
                    type="password" 
                    placeholder="Пароль" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                    required 
                />
                <button type="submit">Войти</button>
            </form>
        </div>
    );
};

export default Login;
