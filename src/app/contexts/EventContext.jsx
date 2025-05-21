import React, { createContext, useState, useEffect } from "react";

export const EventContext = createContext();

const EventProvider = ({children}) => {
    const apiUrl = 'https://localhost:7016/api/events';
    const [events, setEvents] = useState([]);

    const getEvents = async () => {
        const res = await fetch(apiUrl)
        const data = await res.json();
        console.log(data)

        setEvents(data.result);
    }

    useEffect(() => {
        getEvents();
    },[])

    return (
        <EventContext.Provider value={{events}}>
            {children}
        </EventContext.Provider>
    )
    
}

export default EventProvider