

const Navbar = () => {

 

    return (
        <div className="max-w-[1100px] mx-auto ">
            <div className="flex flex-col sm:flex-row justify-between items-center  my-6">
            <div>
                <h2 className="font-bold text-xl pb-5 sm:pb-0">CS-Ticket System</h2>
            </div>

            <div className="flex flex-wrap sm:flex-row justify-around items-center gap-5 mx-5 sm:mx-0 sm:gap-5">
           <a className='text-sm' href="">Home</a>
           <a className='text-sm' href="">FAQ</a>
           <a className='text-sm' href="">Changelog</a>
           <a className='text-sm' href="">Blog</a>
           <a className='text-sm' href="">Download</a>
          <a className='text-sm' href="">Contact</a>
           <button className="text-white bg-gradient-to-r from-[#632EE3] to-[#9F62F2] px-2 py-1 rounded-[5px]"> <i class="fa-light fa-plus"></i> New Ticket</button>
            </div>


        </div>
        </div>
    );
};

export default Navbar;