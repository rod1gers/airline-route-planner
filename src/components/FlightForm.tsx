import React, { useState } from 'react';
import { Flight } from '../pages/app/App';

interface FlightFormProps {
    addFlight: (flight: Flight) => void;
}

const FlightForm: React.FC<FlightFormProps> = ({ addFlight }) => {
    const [departure, setDeparture] = useState('');
    const [arrival, setArrival] = useState('');
    const [flightNumber, setFlightNumber] = useState('');
    const [distance, setDistance] = useState<number | ''>('');
    const [duration, setDuration] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        addFlight({ departure, arrival, flightNumber, distance: Number(distance), duration });
        setDeparture('');
        setArrival('');
        setFlightNumber('');
        setDistance('');
        setDuration('');
    };

    return (
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md mb-5">
            <input
                type="text"
                placeholder="Departure Airport"
                value={departure}
                onChange={(e) => setDeparture(e.target.value)}
                required
                className="border border-gray-300 p-2 w-full mb-4 rounded"
            />
            <input
                type="text"
                placeholder="Arrival Airport"
                value={arrival}
                onChange={(e) => setArrival(e.target.value)}
                required
                className="border border-gray-300 p-2 w-full mb-4 rounded"
            />
            <input
                type="text"
                placeholder="Flight Number"
                value={flightNumber}
                onChange={(e) => setFlightNumber(e.target.value)}
                required
                className="border border-gray-300 p-2 w-full mb-4 rounded"
            />
            <input
                type="number"
                placeholder="Distance (km)"
                value={distance}
                onChange={(e) => setDistance(e.target.value !== '' ? Number(e.target.value) : '')}
                required
                className="border border-gray-300 p-2 w-full mb-4 rounded"
            />
            <input
                type="text"
                placeholder="Duration (hours)"
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
                required
                className="border border-gray-300 p-2 w-full mb-4 rounded"
            />
            <button type="submit" className="bg-green-500 text-white py-2 rounded hover:bg-green-600 transition">
                Add Flight
            </button>
        </form>
    );
};

export default FlightForm;
