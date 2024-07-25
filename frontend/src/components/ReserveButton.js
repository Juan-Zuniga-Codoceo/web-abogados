import React from 'react';
import { Link } from 'react-router-dom';

const ReserveButton = () => {
    return (
        <div className="reserve-button-container">
            <Link to="/reservar">
                <button className="reserve-button">Reservar una Hora</button>
            </Link>
        </div>
    );
}

export default ReserveButton;
