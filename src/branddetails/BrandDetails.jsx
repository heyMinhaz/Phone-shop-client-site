/* eslint-disable no-unused-vars */
import { useLoaderData } from "react-router-dom";

const BrandDetails = () => {

    const phone = useLoaderData();
    console.log(phone);
    const { _id, name, Price, brandname, type, rating, textarea, photourl } =
      phone;
    

    return (
      <div className="p-50 ">
        <div className="card  bg-base-100 shadow-xl">
          <figure>
            <img className=" w-96 h-96" src={photourl} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{name}</h2>
            <p>{textarea}</p>
            <div className="flex">
              <div className="rating">
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                  checked
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
              </div>{" "}
              <div>
                {" "}
                <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3 w-5">
                  {rating}
                </span>
              </div>
            </div>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Add to cart</button>
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default BrandDetails;