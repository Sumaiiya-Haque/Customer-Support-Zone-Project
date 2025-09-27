import { toast } from 'react-toastify';



const TaskStatus = ({selectedTasks,resolvedTasks,handleComplete}) => {
    return (
      <div className='flex flex-col w-full sm:w-3/12 gap-5 mt-5 sm:mt-0'>
           <div className=" h-auto">
              <h1  className="font-bold  text-xl mb-10 sm:mb-5 text-center sm:text-left text-gray-600">Task Status</h1>
                    {
                 selectedTasks.length === 0 ? ( <p className="text-gray-600 text-center sm:text-left text-sm">Select a ticket to add to Task Status</p>) : (

              selectedTasks.map((task=>(
           <div  key ={task.id} className="max-w-full mx-5  sm:mx-auto  bg-white shadow-lg h-[90px] p-2 rounded-[5px] mb-3 ">
          <h1 className="pb-3 font-semibold">{task.title}</h1>
    <button onClick={()=>{handleComplete(task),toast("Task Completed")}} className="text-white bg-green-700 w-full py-1 rounded-[5px] cursor-pointer ">Complete</button>
                            </div>
                           )
                            
                           ))
                        )
                    }

                               
                            </div>

                            <div className="h-auto">
                   <h1 className="font-bold  text-xl mb-10 sm:mb-5 text-center sm:text-left text-gray-600">Resolved Task</h1>
                   {
                    resolvedTasks.length === 0 ?(
 <p className="text-gray-600 text-center sm:text-left text-sm">No resolved tasks yet.</p> ) : (
    resolvedTasks.map((task)=>(
        <div  key ={task.id} className="max-w-full mx-5  sm:mx-auto  bg-violet-100 flex justify-center items-center shadow-lg h-[60px]  rounded-[5px] mb-3 ">
                                <h1 className="pb-3 font-semibold text-center">{task.title}</h1>
    {/* <button onClick={()=>handleComplete(task)} className="text-white bg-green-700 w-full py-1 rounded-[5px] ">Resolved</button> */}
                            </div>
    ))
 )
                   }
                  
                            </div>
                            </div>
    );
};

export default TaskStatus;