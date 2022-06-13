import React, { useState } from "react"
import Poem from "../Poem/Poem";


const PoemList = ()=> {
   const[Poems, setPoem]= useState([]);
 

  function handleClick(){
       fetch(`https://poetrydb.org/random/20`)
       .then(res=>{
           return res.json();
       })
       .then(data=>{
           setPoem(data)
       })
       }
       const getSortingData = (data) => {
        const sortingData = data.target.value;
     if(sortingData==='title'){
         const sortedPoems = [...Poems].sort(function (a, b) {
         return a.title.localeCompare(b.title); 
      }) ; 
      setPoem(sortedPoems);
    }else if(sortingData ==='author'){
        const sortedPoems = [...Poems].sort(function (a, b) {
            return a.author.localeCompare(b.author); 
        }) ;
        setPoem(sortedPoems);   
    }; 
  
    };
return(
    <div  className=" "> 
    <div className="items-center justify-center  flex flex-col ">
      <div className="">
      <div className="items-center justify-center flex py-6  ">
        <button className="text-center rounded-lg px-4 py-3  m-2  hover:bg-purple-200 hover:text-green-200 bg-white border-2 bg-purple-200 text-white font-bold text-lg shadow-md shadow-[#383839]"
         onClick={handleClick}>Fetch Poem</button>
     </div>
       {Poems.length? (<select className="text-center rounded-lg px-4 py-3 m-2  hover:bg-purple-200 hover:text-green-200 bg-white border-2 bg-purple-200 text-white font-bold text-lg shadow-md shadow-[#383839]"
       onChange={getSortingData}>
            <option className="text-2xl">Select accordingly</option>
            <option className="text-2xl" value='title'>Title</option>
            <option className="text-2xl" value='author'>Author</option>
        </select>):('')}
     </div>
    <div className="text-2xl text-center text-gray max-w-[600px] font-bold py-6 px-5 my-6">
        {Poems.map((item,index)=>{
            return <Poem key={index} item={item}/>
        })}
    </div>
   </div>
   </div>
   );
}

export default PoemList;
