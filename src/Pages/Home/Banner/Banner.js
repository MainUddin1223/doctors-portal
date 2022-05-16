import React from 'react';
import chair from '../../../assets/images/chair.png';
import banner from '../../../assets/images/bg.png';
import PrimaryButton from '../../Shared/PrimaryButton';


const Banner = () => {
    const bannerBackground = {
        backgroundImage: `url(${banner})`

    };

    return (
        <div className="hero min-h-screen bg-white" >
            <div className="hero-content flex-col lg:flex-row-reverse  bg-banner-background bg-auto bg-center" style={bannerBackground}>
                <img src={chair} className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <PrimaryButton>GET STARTED</PrimaryButton>
                </div>
            </div>
        </div>
    );
};

export default Banner;