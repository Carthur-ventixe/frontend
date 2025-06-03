import React, { createContext, useState, useEffect } from "react";

export const EventContext = createContext();

const EventProvider = ({children}) => {
    const apiUrl = 'https://ca-eventservice-ggbpdjfxatc3cmch.swedencentral-01.azurewebsites.net/api';
    const [events, setEvents] = useState([]);
    const [event, setEvent] = useState([]);
    const [eventPackage, setPackage] = useState([]);
    

    const getEvents = async () => {
        const res = await fetch(apiUrl + '/events');
        const data = await res.json();

        setEvents(data.result);
    }

    const getEvent = async (id) => {
        const res = await fetch(apiUrl + `/events/${id}`);
        const data = await res.json();

        setEvent(data.result);
    }

    const getPackage = async (id) => {
        const res = await fetch(apiUrl + `/packages/${id}`)
        const data = await res.json();
        
        setPackage(data);
    }

    useEffect(() => {
        getEvents();
    },[])

    return (
        <EventContext.Provider value={{ events, event, getEvent, eventPackage, getPackage}}>
            {children}
        </EventContext.Provider>
    )
    
}

export default EventProvider