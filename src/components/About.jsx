import React from 'react';
import Img from '../assets/Farm.jpg';
import { Link } from 'react-router-dom';







const About = () => {
  return (
   
    <div  className="md:min-h-screen flex flex-col-reverse md:flex-row items-center gap-8 md:mx-32 mx-5 mt-0  py-20">
        <div className="w-full md:w-2/4">
            <img src={Img} alt="img"/>

        </div>
        <div className="w-full md:w-2/4 text-center space-y-2  ">
        <p class="text-[#076C05] font-semibold text-2xl">About Us</p>
        <p className="text-[#626262] text-xl text-start ">
         We're passionate about sustainable agriculture and animal husbandry. With a deep-rooted commitment to quality and innovation, we've been cultivating a wide variety of crops and nurturing thriving poultry and livestock for years. Our journey is driven by a dedication to providing fresh, healthy, and ethically raised products to our community. We take pride in our efforts to promote responsible farming practices, and we're excited to share our story and values with you.
        </p>
        <div >
        <Link to='/products'smooth={true} duration={500}>
          <button className="bg-[#A8D34B]  border-2 border-[#A8D34B] px-4 py-3 my-8 rounded-md  text-white">
          Learn More
          </button>
          </Link>
        </div>
       
        </div>
        </div>
        
      
       
      
  
   
  )
}

export default About
