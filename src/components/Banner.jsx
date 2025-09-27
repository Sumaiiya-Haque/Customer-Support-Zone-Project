
import vector1 from '../assets/vector1.png'
import vector2 from '../assets/vector2.png'

const Banner = ({countInProgress,countResolved}) => {



    return (
  <div className='bg-gray-100'>

          <div className='max-w-[1100px] mx-auto mt-5 mb-10 '>
            
   <div className=" flex flex-col sm:flex-row max-w-[1100px] sm:mx-auto mx-5 gap-5  pt-10 ">

            <div className='min-h-[200px] w-full sm:w-[50%] text-center items-center flex flex-col justify-center bg-gradient-to-r from-[#632EE3] to-[#9F62F2] rounded-lg'>
<div className='flex '>
                <div className=' w-[250px]  h-[200px] overflow-hidden '><img className=' h-full w-full object-cover block' src={vector1} alt="" /></div>

<div className='text-center flex justify-center items-center flex-col'><h1  className="text-lg whitespace-nowrap font-medium text-white">In-Progress</h1>
<p className="text-5xl font-bold text-white"><span>{countInProgress}</span></p></div>

<div className=' w-[250px]  h-[200px] overflow-hidden object-cover '><img className='rotate-y-180 h-full w-full object-cover block' src={vector1} alt="" /></div>
</div>
           </div>

           {/* resolved banner */}

            <div className='min-h-[200px] w-full sm:w-[50%] text-center items-center flex flex-col justify-center bg-gradient-to-r from-[#54CF68] to-[#00827A]  rounded-lg'>
<div className='flex '>
                <div className=' w-[250px]  h-[200px] overflow-hidden '><img className=' h-full w-full object-cover block' src={vector1} alt="" /></div>

<div className='text-center flex justify-center items-center flex-col'><h1  className="text-lg whitespace-nowrap font-medium text-white">Resolved</h1>
<p className="text-5xl font-bold text-white"><span>{countResolved}</span></p></div>

<div className=' w-[250px]  h-[200px] overflow-hidden object-cover '><img className='rotate-y-180 h-full w-full object-cover block' src={vector1} alt="" /></div>
</div>
           </div>
   </div>
        </div>

  </div>
    );
};

export default Banner;


// bg-gradient-to-r from-[#54CF68] to-[#00827A]

// bg-gradient-to-r from-[#54CF68] to-[#00827A] 