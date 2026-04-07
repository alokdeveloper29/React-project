import React, { useContext } from 'react'
import { UserDataContext } from '../context/UserContext'

const Navbar = () => {

const user = useContext(UserDataContext)
  return (
    <>
    <div className='bg-[#005F02] flex justify-around text-md font-medium text-[#F5F5f0] py-2'>
      <h2>Free Delivery Above 499| Shop now</h2>
      <h2>Get 4 Plants @ just 799</h2>
      <h2>Next day Delivery Available</h2>
    </div>

    <div className='flex justify-between mx-20 text-2xl font-medium h-10 bg-amber-200'>
      <div>
        <h2>Plants</h2>
      </div>
      <div>
        <h2>Search</h2>
      </div> 
      <div className='flex justify-center gap-10'>
        <h2><i class="ri-shopping-cart-2-fill"></i></h2>
        <h2><i class="ri-login-box-line"></i></h2>
      </div>
    </div>


    </>
  )
}

export default Navbar
