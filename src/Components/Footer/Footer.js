import React from 'react';
import logo from '../../image/pngwing.com (22).png'
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer p-10 bg-black  text-dark">
            <div>
                <img src={logo} alt="" className='w-20' />
                <p className=' text-white text-justify font-bold text-lg'>Food-Food<br />Providing reliable tech since 2020</p>
            </div>
            <div>
                <span className="footer-title text-white">Services</span>
                <Link className="link link-hover text-white" >Branding</Link>
                <Link className="link link-hover text-white" >Design</Link>
                <Link className="link link-hover text-white" >Marketing</Link>
                <Link className="link link-hover text-white" >Advertisement</Link>
            </div>
            <div>
                <span className="footer-title text-white">Company</span>
                <Link className="link link-hover text-white" >About us</Link>
                <Link className="link link-hover text-white" >Contact</Link>
                <Link className="link link-hover text-white" >Jobs</Link>
                <Link className="link link-hover text-white" >Press kit</Link>
            </div>
            <div>
                <span className="footer-title text-white">Legal</span>
                <Link className="link link-hover text-white" >Terms of use</Link>
                <Link className="link link-hover text-white" >Privacy policy</Link>
                <Link className="link link-hover text-white" >Cookie policy</Link>
            </div>
        </footer>
    );
};

export default Footer;