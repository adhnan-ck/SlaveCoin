import React from 'react'
import { IoManSharp } from "react-icons/io5";
import { useState } from 'react';
import { toast } from 'react-toastify';
import { ImCoinDollar } from "react-icons/im";
import { RiAuctionFill } from "react-icons/ri";
import { ImMan } from "react-icons/im";
import { IoInformationCircleOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';
import Cards from './Cards';

function MineImage() {
    const [beatNigga , setBeatNigga] = useState(0);
    const [enlarged,setEnlarged] = useState(false);
    const [ownedNiggas,setOwnedNiggas] = useState(0);
    
    const names = ['Adil', 'Quntaile dingale', 'simon', 'hafiz', 'shahal', 'sinan', 'Jitheesh','PolayadiMon','rasheed koyyode'];

    const handleClick = () =>{
        setEnlarged(true);

        setTimeout(()=>{
            setEnlarged(false);
        },100)

        setBeatNigga(beatNigga + 1);

        
    }
    const buyNigga = () =>{
        if(beatNigga>=10){
            console.log('nigga bought');
            setBeatNigga(beatNigga - 10);
            setOwnedNiggas(ownedNiggas + 1);
            const randomIndex = Math.floor(Math.random() * names.length);
            const selectedName = names[randomIndex];
            toast.success(`You Bought ${selectedName}`);
        }
        else{
            toast.error('Not enough coins to buy nigga')
            console.log('not enough coins')
        }
    }

    const miningNigga = () =>{
      if(ownedNiggas >= 6){
        console.log('nigga working')
        setOwnedNiggas(ownedNiggas - 6);
        setBeatNigga(beatNigga + 30000  )
        toast.success('sold 6 niggers for 30000 coins')
      }
      else{
      
        toast.error('Not enough niggas for the work')
      }
    }

    const sweepNigga = () =>{
      if(ownedNiggas >= 2){
        console.log('nigga working')
        setOwnedNiggas(ownedNiggas - 2);
        setBeatNigga(beatNigga + 1000  );
        toast.success('sold 2 niggers for 1000 coins')
      }
      else{
        toast.error('Not enough niggas for the work')
      }
    }

    const sellAllNiggas = () =>{
      if(ownedNiggas >=50){
        setOwnedNiggas(ownedNiggas - ownedNiggas);
        setBeatNigga(beatNigga+100000000);
        toast(`You have made 1billion coins but at what cost? Shame on you!!`)
      }
      else{
        toast.error('You have not yet became the slave master. How dare you fool me nigger')
      }
    }




  return (

    <div className="flex flex-col items-center justify-center min-h-screen">
       <div className='flex gap-4 sticky top-0 left-0'>
       <h1 className=" flex gap-1 text-2xl font-bold mb-10 text-center bg-sky-200  px-5 py-4 rounded-full"> <ImCoinDollar className='text-yellow-600' />  {beatNigga} </h1>
       <h1 className=" flex gap-1 text-2xl font-bold mb-10 text-center bg-sky-200  px-5 py-4 rounded-full"> <ImMan className='text-black-600' />  {ownedNiggas} </h1>
       </div>

        <h1 className="text-3xl font-mono mb-4 text-center">BEAT THE NIGGA TO EARN COIN</h1>
        <IoManSharp onClick={handleClick} className={`text-9xl font-bold mb-4 text-center cursor-pointer transition-transform ${
          enlarged ? 'transform scale-125' : ''
        }`} />
         <h1  className="flex gap-1 text-2xl font-bold mt-9 text-center">  BUY A NIGGA FOR 10 COINS </h1>
         <button type="button" onClick={buyNigga} className=" flex px-6 py-6 focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
          <RiAuctionFill className='text-4xl' /></button>

         <br />
         <h1 className="text-2xl font-bold mt-9 text-center"> SELL AND EARN: </h1>

        <Cards rating='30000' labourName='Mining Company' costOfNigga='6' onClick={miningNigga}  />
        <Cards rating='1000' labourName='Farming Company' costOfNigga='2' onClick={sweepNigga}  />

        <h1 className="text-2xl font-bold mt-9 text-center">CHOOSE THE FATE OF NIGGAS:</h1>
        <span className="flex bg-yellow-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">
        <IoInformationCircleOutline className='text-2xl'/> Buy atleast 50 Niggas to become the slave master and decide what you wanna do with all of your slaves 
        </span>
          <br />
        {/* fate of niggas */}
        
        

<div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    
    <div class="flex flex-col items-center pb-10">
        <img class="w-24 h-24 mb-3 rounded-full shadow-lg" src="https://waterfordwhispersnews.com/wp-content/uploads/2021/02/dicap.jpg" alt="Bonnie image"/>
        <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">Sell all your 50+ slaves to Calvin candie for a billion coins or Free all the niggas</h5>
        <span class="text-sm text-gray-500 dark:text-gray-400">Choice is yours:</span>
        <div class="flex mt-4 md:mt-6">
            <a onClick={sellAllNiggas} class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">SELL</a>
            {ownedNiggas>=50?(
           <Link to="/freedomFighter">
           <a class="py-2 px-4 ms-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">FREE</a>
      

           </Link>):(
            <a class="py-2 px-4 ms-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">FREE</a>
           )}

    
        </div>
    </div>
</div>
<br />
<span className="flex bg-green-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">
        <IoInformationCircleOutline className='text-2xl'/> Coming Soon: Convert SlaveCoin to BitCoin.
        </span>
        <br />
        <span className="flex bg-red-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">
        <IoInformationCircleOutline className='text-2xl'/> Follow Adhnan_ck for updates
        </span>
    </div>
  )
}

export default MineImage