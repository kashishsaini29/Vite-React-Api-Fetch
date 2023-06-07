import React,{useContext} from 'react';
import { Link} from 'react-router-dom';
import { Context} from '../utils/api';

const home = () => {
  const d= useContext(Context);
  


  console.log("home",d);
  const arr = d.map((data,index)=>{
  const a=data.show;
  return (
    <div className="flex-col h-[30%]   border-2 m-5  bg-white shadow-lg shadow-red-500 hover:cursor-pointer rounded-xl drop-shadow-md hover:drop-shadow-xl">
      <div className="flex w-full h-[20%] justify-center">
        <img src={a.image.medium} className="w-full h-96" alt="img" srcset="" />
      </div>
      <div className="flex flex-col my-auto rounded-xl drop-shadow-xl p-2 text-red-950  ">
        <h1 className="text-3xl font-semibold">{a.name}</h1>
        <p className="text-xl">{a.language}</p>
        <p className="text-xl">
          <span>Rating: </span>
          {a.rating.average}
        </p>
      </div>
      <div className="flex justify-end">
        <Link to={`/movies/${index}`}>
          <button className=" bg-red-950  text-white font-mono text-xl px-1 w-fit  rounded-md shadow-md shadow-white">
            Summary
          </button>
        </Link>
      </div>
    </div>
  );
})
  return (
    <div>
      <div className="flex flex-wrap  border-2 ">{arr}</div>
{/* {console.log(data)} */}
    </div>
  );
}

export default home