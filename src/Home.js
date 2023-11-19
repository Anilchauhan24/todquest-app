import React from 'react';
import LoginSignUp from './Component/LoginSignup/LoginSignUp';
import Navbar from './Component/Navbar/Navbar';
import BannerImages from './Component/Banner/BannerImages';
import ContentData from './Component/ContentData/ContentData';
import CategoryData from './Component/Category/CategoryData';
import Membership from './Component/Membership/Membership';
import Subscription from './Component/Subscription';
import Coupon from './Component/Coupon/Coupon';
import Footer from './Component/Footer/Footer';
function Home() {
    return (
        <div>
            <LoginSignUp />
            <Navbar />
            <BannerImages />
            <ContentData />
            <CategoryData />

            <Membership />
            <Subscription />
            <Coupon></Coupon>
            <Footer />
        </div>
    )
}

export default Home