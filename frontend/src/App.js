import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import WhatsAppButton from './components/WhatsAppButton';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import ReservationPage from './components/ReservationPage';
import ContactPage from './components/ContactPage';
import './styles.css';

function App() {
    return (
        <Router>
            <Header />
            <WhatsAppButton /> {/* Mover aquí para que siempre esté visible */}
            <Routes>
                <Route path="/" element={
                    <>
                        <Hero />
                        <Services />
                        <Testimonials />
                        <FAQ />
                        <Footer />
                    </>
                } />
                <Route path="/reservar" element={<ReservationPage />} />
                <Route path="/contacto" element={<ContactPage />} />
            </Routes>
        </Router>
    );
}

export default App;
