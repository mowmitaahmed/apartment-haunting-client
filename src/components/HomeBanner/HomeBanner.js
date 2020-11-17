import React from 'react';
import '../../styles/HomeBanner.scss';

const HomeBanner = () => {
    return (
        <div className="bg-overlay d-flex">
            <div className="container align-self-center justify-content-center">
                <div className="row text-center">
                    <div className="col-md-3 col-12"></div>
                    <div className="col-md-6 col-12 home_banner">
                        <h1 className="h1-responsive mb-3">FIND YOUR HOUSE RENT</h1>
                        <form>
                            <div class="form-group d-flex">    
                                <input type="text" placeholder="Search..." className="form-control text-secondary w-75 radius-5 mr-3" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                <button type="submit" className="btn btn-primary w-25 radius-5 px-3 py-1">Find Now</button>
                            </div>
                        </form>
                    </div>
                    <div className="col-md-3 col-12"></div>
                </div>
            </div>
        </div>
    );
};

export default HomeBanner;