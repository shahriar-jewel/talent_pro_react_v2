import React, { useState, useEffect } from "react";

const Heading = () => {
  // fetch data from json file 
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
    <div className="text-center lg:px-44">
      {data?.heading && data.heading.length > 0 &&
        (
          <div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold leading-snug mb-4 md:mb-6">
              {data.heading[0].titleBig}
            </h1>
            <p className=" md:text-lg text-slate-600">
              {data.heading[0].titleSmall}
            </p>
          </div>
        )
      }


    </div>
  );
};

export default Heading;
