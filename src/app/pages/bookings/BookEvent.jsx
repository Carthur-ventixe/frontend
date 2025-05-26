import { Link, useParams } from 'react-router-dom'
import './BookEvent.css'
import { EventContext } from '../../contexts/EventContext'
import { useContext, useEffect, useState } from "react";
import { useForm } from 'react-hook-form'

function BookEvent() {
    const { eventId, packageId } = useParams();
    const { event, getEvent } = useContext(EventContext);
    const [submitted, setSubmitted] = useState(false)
    const { register, handleSubmit, formState: { errors }, reset, watch } = useForm({
        defaultValues: {
            quantity: '1'
        }
    });

    const quantity = watch('quantity') || '1'
    const eventPackage = event?.packages?.find(p => p.id === Number(packageId))
    const totalPrice = parseInt(quantity) * eventPackage.price

    useEffect(() => {
        getEvent(eventId);
    }, [eventId])

    const onSubmit = async (data) => {
        const formData = {
            ...data,
            eventId: eventId,
            totalPrice: totalPrice,
            ticketQuantity: quantity
        };

        const res = await fetch('https://localhost:7007/api/bookings', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })

        if (res.ok) {
            setSubmitted(true);
            reset()
        }
    }
    return (
        <div className='book-event-wrapper'>
            <form onSubmit={handleSubmit(onSubmit)} noValidate>

                <h2>{event.title}</h2>
                <p className='packageName'>{eventPackage.title}</p>

                <div className='form-group-tickets'>
                    <label>Ticket Quantity</label>
                    <div className='input-group'>
                        <input type="number" min={1} {...register('quantity', { required: 'Quantity is required',
                            min: {value: 1, message: "Quantity must be at least 1"}
                         })} />
                        <span>{errors.quantity && errors.quantity.message}</span>
                    </div>
                    <p className='totalPrice'>Total Price: ${totalPrice}</p>
                </div>

                <h3>Information</h3>

                <div className='name-group'>
                    <div className='form-group'>
                        <label>First Name</label>
                        <input type="text" {...register('firstname', { required: 'First Name is required' })} />
                        <span>{errors.firstname && errors.firstname.message}</span>
                    </div>
                    <div className='form-group'>
                        <label>Last Name</label>
                        <input type="text" {...register('lastname', { required: 'Last Name is required' })}/>
                        <span>{errors.lastname && errors.lastname.message}</span>
                    </div>
                </div>
                <div className='form-group'>
                    <label>Email</label>
                    <input type="text" {...register('email', { required: 'Email is required' })}/>
                    <span>{errors.email && errors.email.message}</span>
                </div>
                <div className='form-group'>
                    <label>Street</label>
                    <input type="text" {...register('street', { required: 'Street is required' })}/>
                    <span>{errors.street && errors.street.message}</span>
                </div>
                <div className='address-group'>
                    <div className='form-group'>
                        <label>Postal Code</label>
                        <input type="text" {...register('postalcode', { required: 'Postal Code is required' })}/>
                        <span>{errors.postalcode && errors.postalcode.message}</span>
                    </div>
                    <div className='form-group'>
                        <label>City</label>
                        <input type="text" {...register('city', { required: 'City is required' })}/>
                        <span>{errors.city && errors.city.message}</span>
                    </div>
                </div>
                <div className='btn-group'>
                    <button type='submit' className='btn btn-primary'>Book Event</button>
                    <Link to={`/events/${eventId}`} className='btn btn-secondary'>Cancel</Link>
                </div>
            </form>
        </div>
    )
}
export default BookEvent