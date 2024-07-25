import React, { useState } from 'react';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí puedes manejar el envío del formulario
    }

    return (
        <section id="contact">
            <h2>Contacto</h2>
            <form onSubmit={handleSubmit} className="d-flex flex-column align-items-center">
                <div className="form-group w-100" style={{ maxWidth: '500px' }}>
                    <label>Nombre:</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} className="form-control" />
                </div>
                <div className="form-group w-100" style={{ maxWidth: '500px' }}>
                    <label>Email:</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} className="form-control" />
                </div>
                <div className="form-group w-100" style={{ maxWidth: '500px' }}>
                    <label>Mensaje:</label>
                    <textarea name="message" value={formData.message} onChange={handleChange} className="form-control"></textarea>
                </div>
                <button type="submit" className="btn btn-primary mt-3">Enviar</button>
            </form>
        </section>
    );
}

export default ContactForm;
