import React from 'react';

const Footer = () => {
    return (
        <div className='w-full  bg-black mx-auto'>

            <div className=' grid  sm:grid-cols-5 grid-cols-1  max-w-[1100px]  sm:mx-auto gap-5 py-10 '>
                <div className='sm:pl-0 pl-5'>
                    <h1 className='text-white font-bold text-lg mb-5'>CS — Ticket System</h1>
                    <p className='text-sm text-gray-300 text-left'>CS-Ticket System is a simple and efficient support ticket management solution. It allows users to submit their issues easily and helps the support team track and resolve them quickly. Our goal is to ensure fast responses, transparent communication, and effective support.</p>
                </div>

                <div className='sm:pl-20 pl-5'>
                    <h1 className='text-white font-bold mb-5'>Company</h1>
                    <div className='text-gray-300 text-sm space-y-3 '>
                        <p>About Us</p>
                    <p>Our Mission</p>
                    <p>Contact</p>
                    </div>
                </div>

                <div className='sm:pl-10 pl-5'>
                    <h1 className='text-white font-bold mb-5'>Service</h1>
                    <div className='text-gray-300 text-sm space-y-3  '>
                        <p>Products & Services</p>
                    <p>Customer Stories</p>
                    <p>Download Apps</p>
                    </div>
                </div>

                <div className='sm:pl-10 pl-5'>
                      <h1 className='text-white font-bold mb-5'>Information</h1>
                    <div className='text-gray-300 text-sm space-y-3  '>
                        <p>Privacy Policy</p>
                    <p>Terms & Conditions</p>
                    <p>Join Us</p>
                    </div>
                </div>


                 <div className='sm:pl-10 pl-5'>
                      <h1 className='text-white font-bold mb-5'>Social Links</h1>
                    <div className='text-gray-300 text-sm  space-y-3 '>
                        <p> <i class="fa-brands fa-x-twitter"></i>@CS — Ticket System</p>
                    <p><i class="fa-brands fa-linkedin"></i> @CS — Ticket System</p>
                    <p> <i class="fa-brands fa-facebook"></i> @CS — Ticket System</p>
                    <p className=''> <i class="fa-regular fa-envelope"></i> support@cst.com</p>
                    </div>
                </div>

                

            </div>

            <div className='text-center text-gray-300 text-sm py-8  border-t border-t-gray-400 max-w-[1100px] mx-auto'>
                <p className=''>© 2025 CS — Ticket System. All rights reserved.</p>

            </div>
            
        </div>
    );
};

export default Footer;