import React from "react";

function Component({image,name,rate,description,Avalible,Handle,index}){
    
   return(
        <>
        
       <div className="bg-zinc-900 h-72 w-52 rounded ">
        <div className=" rounded h-32 w-52">
<img className=" h-full w-full object-cover" src={image}></img>

     <h2 className=" text-zinc-300 text-center font-bold">{name}</h2>
     <div className=" flex justify-center items-center">
     <span className="bg-zinc-800 text-yellow-400 text-center">
        {rate}
     </span>
      </div>
      <p className="text-center text-zinc-200 text-sm "> {description} </p>
      <button className="px-1 py-1 bg-yellow-400 rounded m-6 w-32 mx-8"    onClick={()=>Handle(index)}>{Avalible?'Add to Cart':'Added'}</button>
      </div>
    </div>
        </>
    )
}

export default Component;