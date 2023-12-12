import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
export default function Register() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            });
            if (response.ok) {
                navigate('/login');
            } else {
                setError('Błąd rejestracji. Spróbuj ponownie.');
            }
        } catch (err) {
            setError('Błąd serwera. Spróbuj ponownie później.');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Rejestracja</h2>
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
            <button type="submit">Zarejestruj się</button>
            {error && <div>{error}</div>}
        </form>
    );
}
