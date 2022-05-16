import React from 'react';
import Review from './Review';
import reviewImg1 from '../../assets/images/people1.png'
import reviewImg2 from '../../assets/images/people2.png'
import reviewImg3 from '../../assets/images/people3.png'
import quote from '../../assets/icons/quote.svg'


const Reviews = () => {
    return (
        <div className='my-24  bg-right-top bg-no-repeat  bg-[length:120px_120px]' style={{ backgroundImage: `url(${quote})` }}>
            <h1 className='text-primary text-center font-bold text-xl'>Testimonial</h1>
            <h2 className='text-4xl text-center'>What Our Patients Say</h2>
            <div className='grid grid-cols-1 mx-4 gap-4  lg:grid-cols-3 '>
                <Review img={reviewImg1} description='It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content' name='Winson Herry' location='California'></Review>
                <Review img={reviewImg2} description='It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content' name='Winson Herry' location='California'></Review>
                <Review img={reviewImg3} description='It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content' name='Winson Herry' location='California'></Review>
            </div>
        </div>
    );
};

export default Reviews;