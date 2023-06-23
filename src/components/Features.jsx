import React, { useState, useEffect } from "react";
import FeatureItem from "./FeatureItem";

const Features = () => {
    const [data, setData] = useState([]);
    const getData = () => {
        fetch('data.json'
            , {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }
        ).then(function (response) {
            return response.json();
        }).then(function (myJson) {
            setData(myJson)
        });
    }
    useEffect(() => {
        getData()
    }, []);

    return (
        <div className="flex flex-wrap w-3/4 md:w-5/6 my-10">
            {(data?.featuredItems)?.length > 0 ?
                (data?.featuredItems)?.map((feature, i) =>
                    <FeatureItem
                        key={i}
                        image={feature.image}
                        title={feature.title}
                        description={feature.description}
                    />) : 'Loading...'}

        </div>
    );
};

export default Features;
