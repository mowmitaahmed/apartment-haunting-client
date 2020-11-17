import React from 'react';
import HomeDetailsBanner from '../HomeDetailsBanner/HomeDetailsBanner';
import HomeDetailsMainArea from '../HomeDetailsMainArea/HomeDetailsMainArea';
import Navbar from '../Navbar/Navbar';

const HomeDetails = () => {
    return (
        <div>
            <Navbar></Navbar>
            <HomeDetailsBanner></HomeDetailsBanner>
            <HomeDetailsMainArea></HomeDetailsMainArea>
        </div>
    );
};

export default HomeDetails;