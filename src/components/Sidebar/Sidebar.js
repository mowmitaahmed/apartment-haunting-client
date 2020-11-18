import React from 'react';
import Logo from '../../images/logos/Logo.png';
import { Link, NavLink } from 'react-router-dom';
import '../../styles/Sidebar.scss';

const Sidebar = () => {
    return (
        <div className="col-md-2 col-sm-12 col-12 sidebar p-4">
            <div className="logo_area mb-5">
                <Link to="/"><img className="logo" src={Logo} alt={Logo}/></Link>
            </div>
            <ul>
                <li className="text-black mb-2"><NavLink to="/bookinglist"><i class="fa fa-shopping-bag mr-2" aria-hidden="true"></i>Booking list</NavLink></li>
                <li className="text-black mb-2"><NavLink to="/addrenthouse"><i class="fa fa-plus mr-2" aria-hidden="true"></i>Add Rent House</NavLink></li>
                <li className="text-black mb-2"><NavLink to="/myrent"><i class="fa fa-home mr-2" aria-hidden="true"></i>My Rent</NavLink></li>
            </ul>
        </div>
    );
};

export default Sidebar;