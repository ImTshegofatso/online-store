import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Provider, useSelector } from 'react-redux';
import store from './store';
import Header from './components/Header';
import Footer from './components/Footer';
import LandingPage from './LandingPage';
import StorePage from './StorePage';
import CartPage from './CartPage';
import LoginForm from './components/LoginForm';
import RegistrationForm from './components/RegistrationForm';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import TermsOfService from './components/TermsOfServices';
import PrivacyPolicy from './components/PrivacyPolicy';

function App() {
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

    return (
        <Provider store={store}>
            <Router>
                <div className="App">
                    <Header />
                    <Routes>
                        <Route path="/login" element={isAuthenticated ? <Navigate to="/products" /> : <LoginForm />} />
                        <Route path="/register" element={isAuthenticated ? <Navigate to="/login" /> : <RegistrationForm />} />
                        <Route path="/" element={<LandingPage />} />
                        <Route path="/products" element={isAuthenticated ? <StorePage /> : <Navigate to="/register" />} />
                        <Route path="/cart" element={isAuthenticated ? <CartPage /> : <Navigate to="/login" />} />
                        <Route path="/about" element={<AboutUs />} />
                        <Route path="/contact" element={<ContactUs />} />
                        <Route path="/terms" element={<TermsOfService />} />
                        <Route path="/privacy" element={<PrivacyPolicy />} />
                    </Routes>
                    <Footer />
                </div>
            </Router>
        </Provider>
    );
}

export default App;
