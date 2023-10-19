import { useLoaderData, useParams } from "react-router-dom";

const BrandData = () => {

    const data = useLoaderData();
    const dataname = useParams();
    console.log(data);
    console.log(dataname);

    return (
        <div>
            



        </div>
    );
};

export default BrandData;