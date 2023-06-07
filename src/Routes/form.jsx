import React, { useContext } from 'react';
import { Context } from '../utils/api';
import { useParams } from 'react-router-dom';

const form = () => {
    const {id}=useParams();
    const data=useContext(Context);
    const d=data[id].show;
    console.log("form",d);

  return (
    <div>
      <div className="flex justify-center items-center h-screen">
        <img
          src={d.image.medium}
          alt="bg-img"
          srcset=""
          className="w-screen h-screen blur-sm opacity-45"
        />
        <form className=" flex flex-col absolute bg-white bg-opacity-50 rounded-lg shadow-lg  items-center border-2 p-4 ">
          <div className="text-6xl text-red-950 font-semibold px-12 mb-6 border-b-2 border-white rounded-xl p-4 shadow-lg shadow-white ">
            {d.name}
          </div>
          <div className="m-4 flex w-full px-3">
            <label className="text-2xl font-semibold mr-3 w-1/3">Name</label>
            <input
              type="text"
              className="border-2 border-b-black w-1/3 bg-transparent "
              placeholder='name'
            />
          </div>
          <div className="m-4 flex w-full px-3">
            <label className="text-2xl font-semibold  mr-3 w-1/3 ">Email</label>
            <input
              type="email"
              className="border-2 border-b-black w-1/3 bg-transparent "
              placeholder='email'
            />
          </div>
          <div className="m-4 flex w-full px-3">
            <label className="text-2xl font-semibold mr-3 w-1/3 ">
              Phone no.
            </label>
            <input
              type="number"
              className="border-2 border-b-black w-1/3 bg-transparent "
              placeholder='+91 '
            />
          </div>
          <div className="m-4 flex w-full px-3 ">
            <label className="text-2xl font-semibold mr-3 w-1/3">Price</label>
            <input
              type="number"
              className="border-2 border-b-black w-1/3 bg-transparent"
              placeholder="599"
            />
          </div>
          <div className="">
            <input type="checkbox" className="border-2 border-b-black " />
            <label className="text-xl  ml-3">Accept all policy and rules</label>
          </div>
          <div className="bg-red-700 m-10 rounded-lg p-2 shadow-lg shadow-white">
            <button className="text-white text-2xl">Book Ticket</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default form