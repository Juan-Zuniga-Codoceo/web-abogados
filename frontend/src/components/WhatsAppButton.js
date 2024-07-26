import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import '../styles/WhatsAppButton.css';

const WhatsAppButton = () => {
    return (
        <a href="https://wa.me/1234567890" className="whatsapp-button" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp className="whatsapp-icon" />
        </a>
    );
};

export default WhatsAppButton;
