import React from 'react';
import '../../styles/HomeDetailsBanner.scss';

const HomeDetailsBanner = () => {
    return (
        <div className="bg-overlay d-flex">
            <div className="container align-self-center justify-content-center">
                <div className="row text-center">
                    <div className="col-md-3 col-12"></div>
                    <div className="col-md-6 col-12 home_banner">
                        <h1 className="h1-responsive mb-3">FIND YOUR HOUSE RENT</h1>
                    </div>
                    <div className="col-md-3 col-12"></div>
                </div>
            </div>
        </div>
    );
};

export default HomeDetailsBanner;