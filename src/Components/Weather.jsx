import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";

let url =
  "http://api.weatherapi.com/v1/current.json?key=cce2c5cbed7e40aeb11115501231605&q=Hyderabad&aqi=yes";

function Weather() {
  const [data, setData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        setData(response.data);
      } catch (error) {
        console.log("The error is: ", error);
      }
    };
  
    fetchData();
  }, []);
  
  // console.log(data.current.temp_c);

if(!data) return null;

return(
  <>
  <p>{data.current.temp_c}</p>
  </>
)
}

export default Weather;
