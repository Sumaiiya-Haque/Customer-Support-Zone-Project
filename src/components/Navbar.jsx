

const Navbar = () => {
    return (
        <div className="max-w-[1100px] mx-auto">
            <div className="flex justify-between items-center h-[50px] py-8">
            <div>
                <h2 className="font-bold text-xl">CS-Ticket System</h2>
            </div>

            <div className="flex items-center gap-5">
           <div className="text-base ">Home</div>
           <div>FAQ</div>
           <div>Changelog</div>
           <div>Blog</div>
           <div>Download</div>
           <div>Contact</div>
           <button className="text-white bg-gradient-to-r from-[#632EE3] to-[#9F62F2] px-2 py-1 rounded-[10px]"> <i class="fa-light fa-plus"></i> New Ticket</button>
            </div>


        </div>
        </div>
    );
};

export default Navbar;