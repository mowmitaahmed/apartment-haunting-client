import React from 'react';
import Apartment from '../../images/logos/apartment.png';
import Affordable from '../../images/logos/affordable.png';
import Lessee from '../../images/logos/lessee.png';
import '../../styles/HomeServiceArea.scss';

const HomeServiceArea = () => {
    return (
        <div className="service_area">
            <div className="container">
                <div className="row pt-5">
                    <div className="col-md-12 col-sm-12 col-12 houseRent_header text-center">
                        <p className="text-primary mb-0">Service</p>
                        <h1 className="h1-responsive">We're an agency tailored to all <br />clients' needs that always delivers</h1>
                    </div>
                </div>
                <div className="row py-5">
                    <div className="col-md-4 col-sm-6 col-12 mb-4">
                        <div className="single_service_area text-center">
                            <img className="mb-3" src={Apartment} alt={Apartment} />
                            <h6 className="h6-responsive text-dark mb-2">Wide Range of Properties</h6>
                            <p className="text-gray">With a robust selection of popular properties on hand, as well as leading properties from experts.</p>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6 col-12 mb-4">
                        <div className="single_service_area text-center">
                            <img className="mb-3" src={Affordable} alt={Affordable} />
                            <h6 className="h6-responsive text-dark mb-2">Financing Made Easy</h6>
                            <p className="text-gray">Our stress-free finance department that can find financial solutions to save you money.</p>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6 col-12 mb-4">
                        <div className="single_service_area text-center">
                            <img className="mb-3" src={Lessee} alt={Lessee} />
                            <h6 className="h6-responsive text-dark mb-2">Trusted by Thousands</h6>
                            <p className="text-gray">10 new offers every day. 350 offers on site, trusted by a community of thousands of users.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeServiceArea;