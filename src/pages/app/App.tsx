import React, { useState } from 'react';
import FlightForm from '../../components/FlightForm';
import FlightList from '../../components/FlightList';

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
        </div>
    );
}

export default App;
