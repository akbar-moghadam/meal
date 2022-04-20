import React from 'react'
import '../style/banner.scss';
import { motion } from "framer-motion"
import Search from './search';

const Banner = () => {

    return (
        <motion.div
        className='banner-container'
        intial={{opacity:0}}
        animate={{opacity:1}}
        exit={{opacity:0}}
        >
            
            
            <Search/>
            
        </motion.div>
    )
}

export default Banner
