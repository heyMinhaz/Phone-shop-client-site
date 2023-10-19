/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import { Link } from "react-router-dom";

const Brand = ({ brand }) => {
  const { id, image, name, title } = brand;

  const handelPhone = (name) => {
    console.log(name);
  };

  return (
    <div className="  lg:p-10 p-10">
      <Link to={`/${name} `} onClick={() => handelPhone(name)}>
        <div className="card  bg-base-100 shadow-xl image-full  ">
          <figure className="lg:w-96 lg:h-60 h-44">
            <img src={brand.image} />
          </figure>
          <div className=" card-body">
            <h2 className="card-title ">{brand.title}</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Brand;
