import React, {createContext,useEffect, useState} from 'react'
import axios from 'axios';
import Home from '../Routes/home';

const Context=createContext();

const DataProvider =({children})=>{
  const [d,setData]=useState([]);
  
  useEffect(()=>{
    axios.get("https://api.tvmaze.com/search/shows?q=all")
     .then((res) =>{
      setData(res.data);
      })
      .catch(error => console.log(error))
   },[]);
   return(
    <Context.Provider value={d}>
      {children}
    </Context.Provider>
   )
      
  };

  export {DataProvider,Context};
 