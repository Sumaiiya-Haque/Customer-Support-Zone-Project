import vector1 from '../assets/vector1.png'

const Banner = () => {
    return (
  <div className='bg-gray-100'>

          <div className='max-w-[1100px] mx-auto mt-5 mb-10 '>
            
   <div className=" flex flex-col sm:flex-row max-w-[1100px] sm:mx-auto mx-5 gap-5  pt-10 ">

            <div className='min-h-[200px] w-full sm:w-[50%] text-center items-center flex flex-col justify-center bg-gradient-to-r from-[#632EE3] to-[#9F62F2] rounded-lg'>
<h1  className="text-xl font-semibold text-white">In-Progress</h1>
<p className="text-4xl font-bold text-white">0</p>
           </div>

           <div  className='min-h-[200px] w-full sm:w-[50%] text-center items-center flex flex-col justify-center bg-gradient-to-r from-[#54CF68] to-[#00827A] bg-cover bg-center rounded-lg'  

          >
            {/* <p> style={{ backgroundImage: `url(${vector1})` }}</p> */}
            
            <h1 className="text-xl font-semibold text-white">Resolved</h1>
            <p className="text-4xl font-bold text-white">0</p>
           </div>
   </div>
        </div>

  </div>
    );
};

export default Banner;