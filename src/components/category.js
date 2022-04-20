import axios from "axios";
import React, { useState, useEffect } from "react";
import "../style/catgories.scss";
import { motion } from "framer-motion";
import { Link,Outlet } from "react-router-dom";




const Category = () => {
  const [fetch, setFetch] = useState([]);

  const getData = async () => {
    // const res = await axios.get("https://61c5dc15c003e70017b79971.mockapi.io/users");
    const res = await axios.get(
      "https://themealdb.com/api/json/v1/1/categories.php"
    );

    setFetch(res.data.categories);
  };
  useEffect(() => {
    getData();
  }, []);
console.log(fetch)
  const ShowData = fetch.map((items,index) => {
    return (
      <li key={index} className="item meitem"  >
      <Link to={`catgory/${items.strCategory}`} className="catLink">
        <img src={items.strCategoryThumb} alt={items.strCategoryDescription} />
        <span>{items.strCategory}</span>
        </Link>
      </li>
    );
  });
  
  return (
    <motion.ul
      className="container mecontainer"
      
      initial={{opacity:0}}
      animate={{opacity:1}}
      exit={{opacity:0}}
    >
      {ShowData}
      <Outlet/>
    </motion.ul>
  );
};

export default Category;
