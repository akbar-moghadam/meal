import axios from "axios";
import React, { useState, useEffect } from "react";
import "../style/catgories.scss";



const Country = () => {
  const [fetch, setFetch] = useState([]);

  const getData = async () => {
    
    const res = await axios.get(
      "https://themealdb.com/api/json/v1/1/list.php?a=list"
    );
// console.log(res.data.meals)
    setFetch(res.data.meals);
  };
  useEffect(() => {
    getData();
  }, []);
console.log(fetch)
  const ShowData = fetch.map((items) => {
    return (
      <li key={items.strArea} className="item"  >
      
       <span>{items.strArea}</span>
      </li>
    );
  });
  return (
    <ul
      className="container"
      
      
    >
      {ShowData}
    </ul>
  );
};

export default Country;
