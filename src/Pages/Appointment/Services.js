
const Services = ({ service, setTreatment }) => {
    const { name, slots } = service
    return (
        <div className="card w-96  bg-base-100 shadow-xl mx-auto">
            <div className="card-body text-center">
                <h2 className="font-bold text-xl text-center text-secondary">{name}</h2>
                <h3 className="text-lg">{slots.length ? slots[0] : <span className="text-red-500">Slots unavailable</span>}</h3>
                <p>Available {slots.length > 1 ? 'spaces' : 'space'} {slots.length}</p>
                <div className="card-actions justify-center">
                    <label htmlFor="booking-modal" disabled={slots.length === 0}
                        onClick={() => setTreatment(service)} className="btn btn-primary bg-gradient-to-r from-primary to-secondary  text-white uppercase bold  ">Book Appointment</label>
                </div>
            </div>
        </div>
    );
};

export default Services;