import React from 'react';
import { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Context } from '../utils/api';
const movieDetails = () => {
  const {id}=useParams();
  const d=useContext(Context);
  const data=d[id].show;
  const summary=data.summary;
  
  const content = summary.replace(/<[^>]+>/g, "");
 
  return (
        <>
    <div className="bg-black h-screen flex">
      <div className="flex justify-center items-center w-1/2  ">
        <img
          src={data.image.medium}
          alt="img"
          srcset=""
          className="w-[50%] h-[50%] "
        />
      </div>
      <div className="text-white flex-col flex items-center  justify-center w-1/3">
        <h1 className="text-5xl mb-5 border-b-2 border-white shadow-lg shadow-white font-semibold">
          {data.name}
        </h1>
        <p className="text-xl">{data.language}</p>
        <p className="text-xl">
          <span>Rating: </span>
          {data.rating.average}
        </p>
        <h1 className="flex text-4xl m-4 font-semibold ml-0">Summary</h1>
        <p className="text-2xl">{content}</p>
        <Link to={`/form/${id}`}>
      <div className='bg-red-700 m-6 rounded-lg p-2 shadow-lg shadow-white'>
        <button className='text-white text-2xl'>Book Ticket</button>
      </div>
        </Link>
      </div>
    </div>
      </>
  );
}

export default movieDetails