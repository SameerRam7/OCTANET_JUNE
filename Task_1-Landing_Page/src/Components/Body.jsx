import React from 'react'

const Body = () => {
  return (
    <div className='space-y-6 lg:flex'>
        <div className='flex items-center justify-center lg:flex-1'>
        <img className='lg:w-[600px]' src="./assets/RM.svg" alt="" />
        </div>

        <div className='lg:flex-1'>
            <h1 className='lg:text-6xl font-bold font-playfair leading-tight'>Hala Madrid</h1>
            <p className=' font-lato text-[#080808] lg:text-2xl'>For over a century, Real Madrid has etched its name in footballing folklore. From the dazzling footwork of Di Stéfano to the unstoppable force of Cristiano Ronaldo, Los Blancos ("The Whites") have consistently delivered heart-stopping victories.  Their trophy cabinet boasts a record 14 Champions League titles, a testament to their relentless pursuit of excellence. Witness the magic unfold at the iconic Santiago Bernabéu, where passion and brilliance collide.</p>
            <form action="" className='flex flex-col gap-6 md:flex-row'>
                <input type="email" className='rounded-md px-4 py-3 placeholder:text-blue-800 text-[18px] font-semibold' placeholder="Enter email address"/>
                <button className='lg:hidden rounded-md px-4 py-3 bg-gradient-to-r from-blue-400 to-purple-400 font-medium text-sm text-[#2c2c2b] hover:bg-blue-800'>Join Waitlist</button>
            </form>
            <div className='flex gap-2'>
                <img className='w-4' src="./assets/check-mark.svg" alt="" />
                <p className='font-lato text-gray-600'>No span, ever. <span className='cursor-pointer font-bold'>Unsubscribe anytime</span></p>
            </div>
        </div>
    </div>
  )
}

export default Body