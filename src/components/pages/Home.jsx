/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React from 'react';
import Future from '../../feture/Future';

import { useLoaderData } from 'react-router-dom';
import Allproducts from '../../allproducts/Allproducts';
import Brand from '../../brand/Brand';
import Most from '../../most/Most';

const Home = () => {

    const brands = useLoaderData();



    return (
      <div>
        <div className="carousel lg:h-[80vh]  ">
          <div id="slide1" className="carousel-item relative w-full">
            <img
              src="https://business.ee.co.uk/content/dam/eeb-site/images-2023/home-page/teasers/google-launches/pixel-8-launch/buy-now/pixel8-pro-desktop-banner-bay-buynow.png"
              className="w-full"
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide4" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide2" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide2" className="carousel-item relative w-full">
            <img
              src="https://rewardmobile.co.uk/wp-content/uploads/2023/09/Apple-iPhone-15-promo-banner-buy-now-scaled.jpg"
              className="w-full"
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide1" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide3" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide3" className="carousel-item relative w-full">
            <img
              src="https://www.m1.com.sg/-/media/Images/Personal/Mobile/Brands/samsung/1440x400_s23.jpg"
              className="w-full"
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide2" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide4" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide4" className="carousel-item relative w-full">
            <img
              src="https://images-na.ssl-images-amazon.com/images/G/01/ottorbox/OP_11_NPL_Lifestyle_Banner_1.30_Amazon_requests_no_strike_through_no_logo.png"
              className="w-full"
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide3" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide5" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>

          <div id="slide5" className="carousel-item relative w-full">
            <img
              src="https://www.phonesltd.co.uk/wp-content/uploads/2023/02/ee-sim-only-deals-with-double-data-and-30-off.jpg"
              className="w-full"
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide4" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide1" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
        </div>
        <div className="mt-10">
          <h1 className="  text-5xl font-bold text-center text-slate-700">
            Our Brands
          </h1>
                <div className="lg:grid lg:grid-cols-3 lg:gap-10  ">
                    
            {brands.map((brand) => (
              <Brand brand={brand}></Brand>
            ))}
                    
          </div>
        </div>

        <div className="mt-10">
          <h1 className="  text-5xl font-bold text-center text-slate-700">
            Our Most Popular Products
          </h1>
          <div className="mt-10">
            <Most></Most>
          </div>
        </div>

        <div className="mt-10">
          <h1 className="  text-5xl font-bold text-center text-slate-700">
            Our Commitment
          </h1>
          <div className=" mt-10">
            <Future></Future>
          </div>
        </div>
      </div>
    );
};

export default Home;