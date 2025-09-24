import vector2 from '../assets/vector2.png'

const Banner = () => {
    return (
        <div className='max-w-[1100px] mx-auto my-10'>
            
   <div className="flex max-w-[1100px] mx-auto gap-10 ">

            <div className='h-[200px] border-2 border-green-800  w-[50%] text-center items-center flex flex-col justify-center bg-gradient-to-r from-[#632EE3] to-[#9F62F2]'>
<h1  className="text-xl font-semibold text-white">In-Progress</h1>
<p className="text-4xl font-bold text-white">0</p>
           </div>

           <div  className='h-[200px] border-2 border-green-800 w-[50%] text-center items-center flex flex-col justify-center bg-gradient-to-r from-[#54CF68] to-[#00827A]'  

           style={{ backgroundImage: `url(${vector2})` }}>
            
            <h1 className="text-xl font-semibold text-white">Resolved</h1>
            <p className="text-4xl font-bold text-white">0</p>
           </div>
   </div>
        </div>
    );
};

export default Banner;