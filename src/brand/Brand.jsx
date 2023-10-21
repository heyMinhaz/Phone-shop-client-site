/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import { Link } from "react-router-dom";

const Brand = ({ brand }) => {
  const { id, image, name, title } = brand;



  return (
    <div className="  lg:p-10 p-10">
      <Link to={`/brand/${name} `} >
        <div className="card w-96 h-96 bg-base-100 shadow-xl">
          <figure>
            <img
              src={brand.image}
            />
          </figure>
          <div className="card-body ">
            <h2 className="card-title">
              
                          <div className="badge badge-secondary">{brand.name}</div>
            </h2>
                      <p>{ brand.title}</p>
            <div className="card-actions justify-end">
         
              <div className="badge badge-outline">See Products</div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Brand;
