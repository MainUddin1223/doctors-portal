import React from 'react';

const Review = (props) => {
    const { img, description, name, location } = props
    return (
        <div className="m-auto mt-20 card bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <p>{description}</p>
            </figure>
            <div className="card-body  ">
                <div className="flex items-center justify-center">
                    <div className="avatar">
                        <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={img} />
                        </div>
                    </div>
                    <div className='p-2'>
                        <h1 className='text-xl font-bold'>{name}</h1>
                        <p>{location}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;