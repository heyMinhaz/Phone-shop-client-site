import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Brandcard from "./Brandcard";
import Carusol from "../components/pages/Carusol";

const BrandData = () => {

    const [phone, setphone] = useState([]);

    const data = useLoaderData();
    const {brandname} = useParams();


    useEffect(() => { 
    
const findphone = data?.filter((phone) => phone.brandname == brandname);

        setphone(findphone)

},[data,brandname])

    
    console.log(phone);
  return (
    <div>
      <Carusol></Carusol>
      <h1 className=" text-5xl mt-10 text-slate-700 font-bold text-center">Products</h1>
      <div className="lg:grid lg:grid-cols-3 lg:gap-10  ">
        {phone.map((phones) => (
          <Brandcard key={phones._id} phone={phones}></Brandcard>
        ))}
      </div>
    </div>
  );
};

export default BrandData;