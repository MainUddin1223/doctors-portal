import React from 'react';

const CardInfo = (props) => {
    return (

        <div className={`m-4  card lg:card-side  shadow-xl ${props.className}`}>
            <figure className='p-6'><img src={props.icon} /></figure>
            <div className="card-body">
                <h2 className="card-title ">{props.heading}</h2>
                <p>{props.description}</p>
            </div>
        </div>
    );
};

export default CardInfo;