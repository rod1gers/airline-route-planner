import React, { useState } from 'react';
import FlightForm from '../../components/FlightForm';
import FlightList from '../../components/FlightList';
import { Link } from "react-router-dom";

export interface Flight {
    departure: string;
    arrival: string;
    flightNumber: string;
    distance: number;
    duration: string;
}

function App() {
    const [flights, setFlights] = useState<Flight[]>([]);

    const addFlight = (flight: Flight) => {
        setFlights((prevFlights) => [...prevFlights, flight]);
    };

    return (
        <div className="max-w-2xl mx-auto p-5">

            <h1 className="text-3xl font-bold text-center mb-5">Airline Route Planner</h1>
            <FlightForm addFlight={addFlight} />
            <FlightList flights={flights} />

            <div className='bg-gradient-to-tr from-black to-gray-800 w-fit px-2 py-1 rounded-lg'>
                <Link to="/map" className='text-white cursor-pointer'>Go to Map Page</Link>
            </div>
        </div>
    );
}

export default App;
