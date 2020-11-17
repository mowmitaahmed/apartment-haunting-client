import React from 'react';
import Footer from '../Footer/Footer';
import HomeBanner from '../HomeBanner/HomeBanner';
import HomeHouseRent from '../HomeHouseRent/HomeHouseRent';
import HomeServiceArea from '../HomeServiceArea/HomeServiceArea';
import Navbar from '../Navbar/Navbar';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <HomeBanner></HomeBanner>
            <HomeHouseRent></HomeHouseRent>
            <HomeServiceArea></HomeServiceArea>
            <Footer></Footer>
        </div>
    );
};

export default Home;