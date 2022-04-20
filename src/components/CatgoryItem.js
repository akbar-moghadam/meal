import React,{useEffect,useState} from 'react';
import { motion } from "framer-motion";
import {useParams} from "react-router-dom"
import axios from 'axios';

function CatgoryItem() {
    
  const [itemName,setItemName]=useState([]);
    
  let parm=useParams();



  useEffect(() => {
    async function getData() {
      const res = await axios.get(
        `https://themealdb.com/api/json/v1/1/lookup.php?i=${parm.id}`
        
      );
      setItemName(res.data.meals);
    }
  getData();
   
  },[])
  
  

  return (
    <motion.div
    intial={{opacity:0}}
    animate={{opacity:1}}
    exit={{opacity:0}}
    >

        <h1>{itemName.map((item) => {
          return(
            <h1 key={item.idMeal}>{item.strMeal}</h1>
          )
        })}</h1>
    </motion.div>
  )
}

export default CatgoryItem