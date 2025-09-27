import React, { use} from 'react';
import TaskStatus from './TaskStatus';
import Card from '../components/Card';

const CardContainer = ({ fetchPromise ,handleInProgress,selectedTasks,resolvedTasks,handleComplete,tickets}) => {

    use(fetchPromise);
    
    // const[tickets,setTickets]=useState(initialData);
    const updateTicket = (ticket)=>{
        // setTickets(pre=>pre.map(t=>t.id === ticket.id ? {...t,status:"In-Progress" }:t))
        handleInProgress(ticket);
    }

    return (
        <div>

            <div className='max-w-[1100px] mx-auto  sm:flex justify-between gap-6 mb-15  ' >
                {/* customer ticket */}
           <div className=' w-full sm:w-9/12  '>            <h1 className='font-bold  text-xl mb-10 sm:mb-5 text-center sm:text-left text-gray-600 '>Customer Tickets</h1>
                <div className=' grid grid-cols-1 sm:grid-cols-2 gap-4 mx-5 sm:mx-0'>
                        {/* card  */}

              {
                tickets.map((ticket)=>(
                    <Card key={ticket.id} ticket={ticket} 
                    handleInProgress={updateTicket}></Card>
                ))
              }
            

                    </div>

                </div>
                {/* right task column */}
                <TaskStatus selectedTasks={selectedTasks}
                resolvedTasks={resolvedTasks} 
                handleComplete={handleComplete}></TaskStatus>
            </div>

        </div>
    );
};

export default CardContainer;

















