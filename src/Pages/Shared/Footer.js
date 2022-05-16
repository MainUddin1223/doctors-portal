import React from 'react';
import footer_bg from '../../assets/images/footer.png'

const Footer = () => {
    return (
        <div className='bg-center' style={{ backgroundImage: `url(${footer_bg})` }} >
            <footer className="footer p-10  text-base-content">
                <div className='mx-auto'>
                    <span className="footer-title">Services</span>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </div>
                <div className='mx-auto'>
                    <span className="footer-title">Company</span>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </div>
                <div className='mx-auto'>
                    <span className="footer-title">Company</span>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </div>
            </footer>
            <footer className="footer footer-center p-4 text-base-content">
                <div>
                    <p>Copyright © 2022 - All right reserved by ACME Industries Ltd</p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;