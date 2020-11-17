import React from 'react';
import HomeDetails from '../../images/houses/homeDetails.png';
import '../../styles/HomeDetailsMainArea.scss';

const HomeDetailsMainArea = () => {
    return (
        <div className="home_details_main_area">
            <div className="container">
                <div className="row py-5">
                    <div className="col-md-8">
                        <img className="w-100 mb-4" src={HomeDetails} alt={HomeDetails} />
                        <h2 className="h2-responsive text-dark">Family Apartment Three</h2>
                        <p className="text-secondary mb-4">3000 sq-ft., 3 Bedroom, Semi-furnished, Luxurious, South facing Apartment for Rent in Rangs Malancha, Melbourne.</p>
                        <h4 className="h4-responsive text-dark">Price Details-</h4>
                        <p className="text-secondary mb-1">Rent/Month: $550 (negotiable)</p>
                        <p className="text-secondary mb-1">Service Charge : 8,000/= Tk per month, subject to change</p>
                        <p className="text-secondary mb-1">Security Deposit : 3 month’s rent</p>
                        <p className="text-secondary mb-4">Flat Release Policy : 3 months earlier notice required</p>
                        <h4 className="h4-responsive text-dark">Property Details-</h4>
                        <p className="text-secondary mb-1">Address & Area : Rangs Malancha, House-68, Road-6A (Dead End Road), Dhanmondi Residential Area.</p>
                        <p className="text-secondary mb-1">Flat Size : 3000 Sq Feet.</p>
                        <p className="text-secondary mb-1">Floor :  A5 (5th Floor) (6 storied Building ) (South Facing Unit)</p>
                        <p className="text-secondary mb-1">Room Category : 3 Large Bed Rooms with 3 Verandas, Spacious Drawing, Dining & Family Living Room, Highly Decorated Kitchen with Store Room and Servant room with attached Toilet.</p>
                        <p className="text-secondary mb-1">Facilities : 1 Modern Lift, All Modern Amenities & Semi Furnished.
Additional Facilities : a. Electricity with full generator load, b. Central Gas Geyser, c. 2 Car Parking with 1 Driver’s Accommodation, d. Community Conference Hall, e. Roof Top Beautified Garden and Grassy Ground, f. Cloth Hanging facility with CC camera</p>
                    </div>
                    <div className="col-md-4">
                        <div className="home_details_form">
                           <form className="px-4 py-5 bg-white">
                            <div className="form-group">
                                <input type="text" placeholder="Full Name" className="form-control radius-0" id="exampleInputName" aria-describedby="emailHelp" />
                            </div>
                            <div class="form-group">
                                <input type="number" placeholder="Phone No" className="form-control radius-0" id="exampleInputPhone" />
                            </div>
                            <div class="form-group">
                                <input type="email" placeholder="Email Address" className="form-control radius-0" id="exampleInputEmail1" />
                            </div>
                            <div class="form-group">
                                <textarea className="form-control radius-0" placeholder="Massage" id="exampleFormControlTextarea1" rows="3"></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary w-100 radius-0">Request Booking</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeDetailsMainArea;