import React, { use } from 'react';
import TaskStatus from './TaskStatus';
import Card from '../components/Card';

const CardContainer = ({ fetchPromise }) => {

    const initialData = use(fetchPromise);

    return (
        <div>

            <div className='max-w-[1100px] mx-auto  sm:flex justify-between gap-6 mb-15  ' >
                {/* customer ticket */}
                <div className=' w-full sm:w-9/12  '>
                    <h1 className='font-bold  text-xl mb-10 sm:mb-5 text-center sm:text-left text-gray-600 '>Customer Tickets</h1>

                    <div className=' grid grid-cols-1 sm:grid-cols-2 gap-4 mx-5 sm:mx-0'>
                        {/* card  */}

                        {
                            initialData.map((ticket) => {
                                // cards
                                return (
                                    <Card ticket={ticket}></Card>
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












