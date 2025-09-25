import React, { use } from 'react';
import TaskStatus from './TaskStatus';

const CardContainer = ({ fetchPromise }) => {

    const initialData = use(fetchPromise);
    console.log(initialData);
    return (
        <div>

            <div className='max-w-[1100px] mx-auto  sm:flex justify-between gap-4' >
                {/* customer ticket */}
                   <div className=' w-full sm:w-9/12 '>
                   <h1 className='font-bold text-xl'>Customer Tickets</h1>

<div className=' grid grid-cols-1 sm:grid-cols-2 '>
                                {/* card  */}
                   


          {
                initialData.map((ticket) => {

                    // cards

                    return (

<div className=' h-fit  m-2 rounded-md bg-white px-2 py-4 shadow-xl'>
                   

    <div className='flex justify-between items-center'>
<h2 className='font-semibold text-[17px]'>{ticket.title}</h2>
    <button className='py-1 bg-green-300 px-4 rounded-[20px] text-gray-700 '> {ticket.status}</button>
    </div>
<p className='text-gray-600 text-sm py-2'>{ticket.description}</p>

<div className='flex justify-between items-center text-sm'>
    <div className='flex gap-2'>
        <p className='text-gray-600'>#1001</p>
        <p className='font-semibold'>High Priority </p>
    </div>

      <div className='flex gap-2 text-gray-600'>
        <p>{ticket.customer}</p>
        <p> <i className="fa-regular fa-calendar"></i> 1/15/2024</p>
    </div>

</div>

                         </div>
                        
                    )
                  

                })
            }

                            </div>
                    
                     </div>
            {/* right task column */}
                            <TaskStatus></TaskStatus>
                        </div>
           
        </div>
    );
};

export default CardContainer;




  


                        




          