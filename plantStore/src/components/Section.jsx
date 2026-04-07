import React from 'react'

const Section = () => {
  return (
    <div className='p-4'>
      <div className='bg-[#F5F5F0] h-110 w-80 p-3 rounded-md'>
        <img className='w-full h-70 object-cover rounded-md' src="https://images.unsplash.com/photo-1588440691140-09155c1be58a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGxhbnQlMjBwb3R8ZW58MHx8MHx8fDA%3D"/>
        <h3 className='text-center my-2 text-lg font-semibold'>Areca Palm Plant XL</h3>
        <h3 className='text-center my-2 text-lg font-medium text-[#005F02]'>1699</h3>
        <button className='text-center bg-[#005F02] text-lg font-semibold w-full my-2 py-1 text-[#F5F5f0] rounded-md hover:scale-98'>Add to Cart</button>
      </div>
    </div>
  )
}

export default Section
