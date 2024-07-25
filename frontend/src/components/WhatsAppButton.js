import React from 'react';
import whatsappIcon from '../assets/whatsapp-icon.png';

const WhatsAppButton = () => {
    return (
        <a href="https://wa.me/[tu-numero-de-telefono]" className="whatsapp-button">
            <img src={whatsappIcon} alt="WhatsApp" />
        </a>
    );
}

export default WhatsAppButton;
