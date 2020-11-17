import React from 'react';
import '../../styles/Footer.scss';

const Footer = () => {
    return (
        <div className="footer_area bg-primary text-white">
            <div className="container">
                <div className="row pt-5">
                    <div className="col-md-5 col-sm-6 col-12 footer mb-5">
                        <ul>
                            <li className="text-white"><i className="fa fa-map-marker mr-3" aria-hidden="true"></i>H#340 (4th Floor), Road #24,</li>
                            <li className="text-white ml-4">New DOHS, Mohakhali, Dhaka, Bangladesh</li>
                            <li className="text-white ml-4">Phone: 018XXXXXXXX</li>
                            <li className="text-white ml-4">E-mail: info@company.com</li>
                        </ul>
                    </div>
                    <div className="col-md-2 col-sm-3 col-6 footer mb-5">
                        <h6 className="h6-responsive mb-3">Company</h6>
                        <ul>
                            <li className="text-white mb-1"><a href="#">About</a></li>
                            <li className="text-white mb-1"><a href="#">Site Map</a></li>
                            <li className="text-white mb-1"><a href="#">Support Center</a></li>
                            <li className="text-white mb-1"><a href="#">Terms Conditions</a></li>
                            <li className="text-white mb-1"><a href="#">Submit Listing</a></li>
                        </ul>
                    </div>
                    <div className="col-md-2 col-sm-3 col-6 footer mb-5">
                        <h6 className="h6-responsive mb-3">Company</h6>
                        <ul>
                            <li className="text-white mb-1"><a href="#">Quick Links</a></li>
                            <li className="text-white mb-1"><a href="#">Rentals</a></li>
                            <li className="text-white mb-1"><a href="#">Sales</a></li>
                            <li className="text-white mb-1"><a href="#">Contact</a></li>
                            <li className="text-white mb-1"><a href="#">Terms Conditions</a></li>
                            <li className="text-white mb-1"><a href="#">Our blog</a></li>
                        </ul>
                    </div>
                    <div className="col-md-3 col-sm-6 col-12 footer-social mb-5">
                        <h6 className="h6-responsive mb-3">About Us</h6>
                        <p>We are the top real estate agency in Sydney, with agents available to answer any question 24/7.</p>
                        <ul>
                            <li>
                                <a href=""><i class="fa fa-facebook-official fa-2x mr-3" aria-hidden="true"></i></a>
                                <a href=""><i class="fa fa-instagram fa-2x mr-3" aria-hidden="true"></i></a>
                                <a href=""><i class="fa fa-linkedin-square fa-2x mr-3" aria-hidden="true"></i></a>
                                <a href=""><i class="fa fa-youtube-play fa-2x mr-3" aria-hidden="true"></i></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;