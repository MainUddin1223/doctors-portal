import React from 'react';
import marker from '../../assets/icons/marker.svg'
import clock from '../../assets/icons/clock.svg'
import phone from '../../assets/icons/phone.svg'
import CardInfo from './CardInfo';

const Info = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3   text-white'>
            <CardInfo heading={'Opening hours'} icon={clock} className={'bg-gradient-to-r from-primary to-secondary '} description={'Lorem ipsum, dolor sit amet consectetur adipisicing elit. '} ></CardInfo>
            <CardInfo heading={'Visit our location'} icon={marker} className={'bg-accent'} description={'Lorem ipsum, dolor sit amet consectetur adipisicing elit. '}></CardInfo>
            <CardInfo heading={'Contact us now'} icon={phone} className={'bg-gradient-to-r from-primary to-secondary'} description={'Lorem ipsum, dolor sit amet consectetur adipisicing elit. '}></CardInfo>
        </div>

    );
};

export default Info;
