import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            });
            const data = await response.json();
            if (data.token) {
                localStorage.setItem('token', data.token);
                navigate('/products'); // Przekierowanie do ProductPage
            } else {
                setError('Niepoprawna nazwa użytkownika lub hasło.');
            }
        } catch (err) {
            setError('Błąd serwera. Spróbuj ponownie później.');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Logowanie</h2>
            <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Nazwa użytkownika"
            />
            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Hasło"
            />
            <button type="submit">Zaloguj się</button>
            {error && <div>{error}</div>}
        </form>
    );
}
