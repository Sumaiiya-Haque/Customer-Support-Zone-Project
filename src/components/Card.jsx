
import React from 'react';
import { toast } from 'react-toastify';

const Card = ({ticket,handleInProgress}) => {
    return (
        <div onClick={()=>(toast("In-Progress") , handleInProgress(ticket))} className=' cursor-pointer h-fit sm:h-[140px]  rounded-md bg-white px-2 pt-3 pb-5 shadow-lg'>
                   

    <div className='flex justify-between items-center'>
<h2 className='font-semibold text-[17px]'>{ticket.title}</h2>
    <button  className={`py-1 bg-green-300 px-3 rounded-[20px] text-gray-700 ${ticket.status === "Open" ? "text-green-700 bg-green-300" : "text-yellow-600 bg-yellow-200"}`}> <span className={`w-3 h-3 rounded-full inline-block ${ticket.status === "Open" ? "bg-green-600" : "bg-yellow-600"}`}></span> {ticket.status}</button>
    </div>
<p className='text-gray-600 text-sm py-2'>{ticket.description}</p>

<div className='flex justify-between items-center text-sm'>
    <div className='flex gap-2'>
        <p className='text-gray-600'>#{ticket.id}</p>
        <p className={`font-medium ${ticket.priority === "HIGH PRIORITY" ? "text-red-500" : ticket.priority === "MEDIUM PRIORITY" ? "text-yellow-400" : "text-green-600"}`}>{ticket.priority}</p>
    </div>

      <div className='flex text-sm gap-3 text-gray-600'>
        <p>{ticket.customer}</p>
        <p> <i className="fa-regular fa-calendar"></i> {ticket.createdAt}</p>
    </div>

</div>

                         </div>
    );
};

export default Card;