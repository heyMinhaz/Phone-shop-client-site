/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React from 'react';
import Future from '../../feture/Future';

import { useLoaderData } from 'react-router-dom';
import Allproducts from '../../allproducts/Allproducts';
import Brand from '../../brand/Brand';
import Most from '../../most/Most';
import Carusol from './Carusol';

const Home = () => {

    const brands = useLoaderData();



    return (
      <div>
        <Carusol></Carusol>
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