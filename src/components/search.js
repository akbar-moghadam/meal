import React, { useState } from "react";
import "../style/search.scss";
import { BiSearchAlt } from "react-icons/bi";
import axios from "axios";
import { motion } from "framer-motion";

const Search = () => {
  const [fetch, setFetch] = useState([]);
  const [searchVal, setSearchVal] = useState("");
  const [antwort, setAntwort] = useState(false);
  // const[typed,setTyped]=useState(false)

  const fetchSearch = async () => {
    const res = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchVal}`
    );

    const countMeal = res.data.meals;
    
  if(countMeal !==null){
    console.log("res=",res)
    setFetch(countMeal)
    
    
    showItems()
  }else{
    console.log('null')
  }
  };

const showSearch= () => {
  if(searchVal.length>0){
    
    console.log('showsearch')
    fetchSearch()
    // setTyped(true)
  }else{
    // setTyped(false)
  }
}

const showItems = () => {

  console.log('showitems')
  fetch.map((items) => {
    return(
      <i key={items.idMeal}>
      <span>{items.strMeal}</span>
      </i>
    )
  })
  console.log(fetch)
}

  return (
    <motion.div
     className="search-container"
     intial={{opacity:0}}
     animate={{opacity:1}}
     exit={{opacity:0}}
     >
      <div className="search">
        <input
          type="text"
          placeholder="Search recipes and more"
          onChange={(e) => setSearchVal(e.target.value)}
        />
        <i onClick={() => showSearch()}>
          <BiSearchAlt size={28} />
        </i>
      </div>
      <div className="search-antwort-show">
        {/* {antwort ? (
          fetch.map((item) => {
            return (
              <Link key={item.idMeal}>
                <span>{item.strMeal}</span>
              </Link>
            );
          })
        ) : (
          <h3>No Foods</h3>
        )} */}
         {/* {fetch.map((item) => {
            return (
              <Link key={item.idMeal}>
                <span>{item.strMeal}</span>
              </Link>
            )})}; */}
            {showItems}
            
      </div>
    </motion.div>
  );
};

export default Search;
