import React from 'react'

const Footer = () => {
  return (
    <div className='flex flex-col gap-4 md:flex-row md:justify-between '>
        <ul className='flex gap-32 font-lato text-gray-600'>
            <li>
                <a href="#">Facebook</a>
            </li>
            <li>
                <a href="#">Instagram</a>
            </li>
            <li>
                <a href="#">Twitter</a>
            </li>
        </ul>
        <div className='flex '>
            <img className='w-10 lg:w-20' src="./assets/Help.svg" alt="help" />
        </div>
        <p className='font-playfair font-thin'>Have any Questions?</p>
        <a href="#" className='font-lato font-medium '>Talk to a specialist</a>
    </div>
  )
}

export default Footer