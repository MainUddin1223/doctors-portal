import React from 'react';
import { Link } from 'react-router-dom';
import Banner from './Banner/Banner';
import Contact from './Contact';
import Footer from '../Shared/Footer';
import Info from './Info';
import MakeAppointment from './MakeAppointment';
import Reviews from './Reviews';
import Services from './Services';

const Home = () => {
    return (
        <div >
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <MakeAppointment></MakeAppointment>
            <Reviews></Reviews>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;