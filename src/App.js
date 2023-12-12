import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import HelloWorld from './pages/HelloWorld';
import Login from './components/Login';
import Register from './components/Register';

function App() {
    return (
        <Router>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary px-3">
                <Link className="navbar-brand" to="/">MojaAplikacja</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Strona Startowa</Link>
                        </li>
                        {/*<li className="nav-item">*/}
                        {/*    <Link className="nav-link" to="/products">Produkty</Link>*/}
                        {/*</li>*/}
                        <li className="nav-item">
                            <Link className="nav-link" to="/helloworld">Hello World</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/login">Logowanie</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/register">Rejestracja</Link>
                        </li>
                    </ul>
                </div>
            </nav>

            <Routes>
                <Route path="/products" element={<ProductPage />} />
                <Route path="/helloworld" element={<HelloWorld />} />
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
            </Routes>
        </Router>
    );
}

export default App;
