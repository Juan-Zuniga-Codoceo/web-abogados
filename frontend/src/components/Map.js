import React from 'react';

const Map = () => {
    return (
        <section id="map">
            <h2>Ubicación</h2>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3169.40352296374!2d-122.08385138469002!3d37.38605197983344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb5e0e4a4f0d5%3A0xc08b9a6f71e2e97b!2sGoogleplex!5e0!3m2!1ses-419!2scl!4v1625259478100!5m2!1ses-419!2scl"
                width="600"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
            ></iframe>
        </section>
    );
}

export default Map;
