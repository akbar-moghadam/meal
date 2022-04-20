import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios';
import { motion } from "framer-motion";


function CatgoryShow() {
    
    const [catName,setCatName]=useState([]);
    
    let parm=useParams();

    // const [employees, setEmployees] = useState([]);
  // useEffect(() => {
  //   async function fetchEmployees() {
  //     const response = await fetch("https://themealdb.com/api/json/v1/1/filter.php?c=lamb");
  //     const fetchedEmployees = await response.json(response);
  //     setEmployees(fetchedEmployees);
  //   }
  //   fetchEmployees();
  // }, []);

    useEffect(() => {
      async function getData() {
        const res = await axios.get(
          `https://themealdb.com/api/json/v1/1/filter.php?c=${parm.id}`
          
        );
        setCatName(res.data.meals);
      }
    getData();
     
    },[])
    
    console.log(catName)
    

  return (
    <motion.div
    intial={{opacity:0}}
    animate={{opacity:1}}
    exit={{opacity:0}}
    
    >
      {catName.map((items) => {
        return(
          <div key={items.idMeal}>
            <ul>
              <li>
               <Link to={`${items.idMeal}`}>{items.strMeal}</Link> 
              </li>
            </ul>
            
            </div>
            
          
        )
      })}
       </motion.div>
    
  )
}

export default CatgoryShow