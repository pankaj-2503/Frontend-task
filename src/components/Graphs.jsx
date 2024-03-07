import React,{useEffect, useState} from 'react';
import CardImg from "../assets/card-img.png";
import { FaArrowRightLong } from "react-icons/fa6";

import GraphImg from './GraphImg';
import Crypto from "../assets/crypto.png";
import trending from "../assets/trending.png";
const Graphs = () => {
  let coins=[];
  // const [coin,setcoin]=useState([]);

  // useEffect(async()=>{
    
  //   const response=await axios.get("https://api.coingecko.com/api/v3/search/trending");
    
  //   const data=response.data;
  //   console.log(data);
  //   coins=data.coins.map((coin)=>{
  //        return {
  //         name:coin.item.name,
  //         image:coin.item.large,
  //         id:coin.item.id,
  //         priceBtc:coin.item.price_btc,
  //        }
  //   });
  //   console.log(coins);
  //   setcoin(coins=>coins);

  // },[]);
  // const newarr=[];
  // for(let i=0;i<3;i++){
  //   newarr.push(coin[i]);
  // }
  return (
   <div className="h-[60vh] w-[80vw] mt-[90px] ml-[7rem] flex gap-10">
    <div className="w-[60vw] h-[100%]">
      <p className="text-sm font-normal my-4">Cryptocurrencies</p>
      <div className="md:flex flex-col h-[100%] w-[100%] bg-white rounded-sm divide-y-2">
        <div className="upper h-[30%]">
          <img src={Crypto} alt="cryptoImg " className="h-[5rem] mx-4 my-2"/>
        </div>
        <div className="lower h-[100%] w-[100%]">
          <GraphImg/>
        </div>
      </div>
    </div>
    <div className="bg-blue-700 h-[80%] w-[30%] rounded-xl mt-12 flex flex-col mx-auto">
        <div className="w-[85%] h-[90%] flex flex-col m-auto item-center text-center">
           <h1 className="text-white text-xl font-medium font-sans mx-auto my-5 items-center tracking-wide">Get started with Koinx for free</h1>
           <p className="text-white font-normal font-sans text-center text-xs my-3 tracking-tight mx-auto">With our range of features that you can equip with for free,Koinx allow you to be more educated and aware of your tex reports</p>
           <img src={CardImg} alt="cardImg" className="w-[6rem] h-[6rem] mx-auto rounded-full my-3"/>
           <button className="bg-white text-black rounded-md h-7 w-[180px] font-sans font-medium text-sm text-center mx-auto flex flex-row gap-1 my-4">
                <p className="mx-3 my-auto">Get Started for Free</p>
                <FaArrowRightLong className="my-auto"/>
           </button>
        </div>
        <div className='trending w-[21rem] h-[10rem] bg-white rounded-md mt-[5rem] '>
          <p className="font-medium font-sans mx-3 py-1">Trending coins (24H)</p>
          <img src={trending} alt="trending" className="my-auto mb-1" />
        </div>
    </div>
     
   </div>
  )
}

export default Graphs