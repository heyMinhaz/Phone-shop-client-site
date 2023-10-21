import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Brandcard from "./Brandcard";

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
      <div className="lg:grid lg:grid-cols-3 lg:gap-10  ">
        {phone.map((phones) => (
          <Brandcard key={phones._id} phone={phones}></Brandcard>
        ))}
      </div>
    );
};

export default BrandData;