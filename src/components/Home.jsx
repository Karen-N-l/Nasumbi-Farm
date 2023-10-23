import React, { useState, useEffect } from 'react';
import Background1 from '../assets/Cereals.jpg';
import Background2 from '../assets/vineyard.jpg';
import Background3 from '../assets/paprika.jpg'; // Add Background3
import { Link } from 'react-router-dom';



const Home = () => {
  const backgrounds = [Background1, Background2, Background3]; // Add Background3 to the array
  const [currentBackgroundIndex, setCurrentBackgroundIndex] = useState(0);

  useEffect(() => {
    const backgroundSlider = setInterval(() => {
      setCurrentBackgroundIndex((prevIndex) => (prevIndex + 1) % backgrounds.length);
    }, 5000);

    return () => {
      clearInterval(backgroundSlider);
    };
  }, [backgrounds.length]);

  return (
    <div>
      
    <div  className="bg-cover bg-center h-screen" style={{ backgroundImage: `url(${backgrounds[currentBackgroundIndex]})` }}>
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <h2 className="text-4xl font-bold text-[#A8D34B] mb-4">Welcome to Nasumbi </h2>
        <p className="text-white text-xl">Discover our diverse crops and thriving poultry and livestock.</p>
        <div >
        <Link to='/about'smooth={true} duration={500}>
          <button className="bg-[#A8D34B]  border-2 border-[#A8D34B] px-4 py-3 my-8 rounded-md  text-white">
          Discover More
          </button>
          </Link>
        </div>
        

      </div>
      
    </div>
    

    </div>
    
  );
}

export default Home;
