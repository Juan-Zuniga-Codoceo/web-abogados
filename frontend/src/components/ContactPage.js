import React from 'react';
import ContactForm from './ContactForm';
import Map from './Map';
import ContactInfo from './ContactInfo';

const ContactPage = () => {
    return (
        <div>
            <ContactForm /> {/* Formulario de contacto */}
            <Map /> {/* Mapa */}
            <ContactInfo /> {/* Información de contacto */}
        </div>
    );
}

export default ContactPage;
