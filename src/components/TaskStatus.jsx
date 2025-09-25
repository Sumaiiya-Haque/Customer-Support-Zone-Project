

const TaskStatus = () => {
    return (
      <div className='flex flex-col w-full sm:w-3/12 gap-5 mt-5 sm:mt-0'>
                                <div className=" h-auto">
                                <h1  className="font-bold  text-xl mb-10 sm:mb-5 text-center sm:text-left text-gray-600">Task Status</h1>
                                <p className="text-gray-600 text-center sm:text-left text-sm">Select a ticket to add to Task Status</p>
                            </div>

                            <div className="h-auto">
                   <h1 className="font-bold  text-xl mb-10 sm:mb-5 text-center sm:text-left text-gray-600">Resolved Task</h1>
                   <p className="text-gray-600 text-center sm:text-left text-sm">No resolved tasks yet.</p>
                            </div>
                            </div>
    );
};

export default TaskStatus;