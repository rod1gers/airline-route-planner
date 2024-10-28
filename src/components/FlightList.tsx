import React from 'react';
import { Flight } from '../pages/app/App';

interface FlightListProps {
    flights: Flight[];
}

const FlightList: React.FC<FlightListProps> = ({ flights }) => {
    return (
        <div>
            <h2 className="text-2xl font-bold mb-4">Flight Schedule</h2>
            {flights.length === 0 ? (
                <p>No flights scheduled.</p>
            ) : (
                <ul className="space-y-4">
                    {flights.map((flight, index) => (
                        <li key={index} className="bg-white p-4 rounded shadow">
                            <strong>Flight Number:</strong> {flight.flightNumber} | 
                            <strong> From:</strong> {flight.departure} | 
                            <strong> To:</strong> {flight.arrival} | 
                            <strong> Distance:</strong> {flight.distance} km | 
                            <strong> Duration:</strong> {flight.duration} hours
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default FlightList;
