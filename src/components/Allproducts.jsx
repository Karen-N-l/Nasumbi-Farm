import React from 'react'
import Img from '../assets/Farm.jpg'
import Mango from '../assets/Mango.jpg';
import Orange from '../assets/Orange.jpg';
import Banana from '../assets/Banana.jpg';
import Beans from '../assets/Beans.jpg';
import Chicken from '../assets/Chicken.jpg';
import Cows from '../assets/cows.jpg';
import Paprika from '../assets/paprika.jpg';
import Goat from '../assets/goats.jpg';
import Navbar from './Navbar';

const Allproducts = () => {
  return (
    <div>
      <Navbar/>
    <div >
        <div className="bg-import bg-auto  py-20 bg-no-repeat">
          <div className="mx-auto px-4 w-full">
            <h1 className="mb-2.5   text-[#A8D34B] font-bold text-3xl leading-10">
            All Products
            </h1>
          </div>
        </div>
        <div id="products" className="py-8 bg-white flex flex-col justify-center items-center">
      <div className="grid md:grid-cols-3 w-[80%] my-8 mx-auto gap-12">
        {/* Product Card 1 */}
        <div className="flex flex-col hover:scale-105 transition-all ease-in-out duration-500 cursor-pointer shadow-md shadow-gray-400 justify-center items-center">
          <img src={Img} alt="Products"className="h-[280px] rounded-t-md object-cover w-[100%]" />
          <div className="h-[300px] bg-white rounded-b-md p-2">
            <span className="text-[#0B8308] font-semibold">Maize:</span>
            <span className="text-xs">
             At Nasumbi Farm, we take pride in nurturing high-quality maize in the rich and diverse landscapes of Kenya. Our maize flourishes in various regions, including the fertile fields of Kenya's Rift Valley, the lush landscapes of Eastern Kenya, and the productive fields of Central Kenya.
               Our maize is carefully harvested to ensure the finest quality, making it a cornerstone of our agricultural legacy.
            </span>
          </div>
        </div>

        {/* Product Card 2 */}
        <div className="flex flex-col hover:scale-105 transition-all ease-in-out duration-500 cursor-pointer shadow-md shadow-gray-400 justify-center items-center">
          <img src= {Mango} alt="Products"className="h-[280px] rounded-t-md object-cover w-[100%]" />
          <div className="h-[300px] bg-white rounded-b-md p-2">
            <span className="text-[#0B8308] font-semibold">Mango:</span>
            <span className="text-xs">
            Grown in the sun-drenched regions of Kenya, our mango trees thrive in the warm climate, producing the juiciest and most flavorful mangoes.
            Our mangoes are hand-picked at the peak of ripeness and delivered to you with the promise of unmatched flavor and quality.
            </span>
          </div>
        </div>

        {/* Product Card 3 */}
        <div className="flex flex-col hover:scale-105 transition-all ease-in-out duration-500 cursor-pointer shadow-md shadow-gray-400 justify-center items-center">
          <img src= {Orange} alt="Products"className="h-[280px] rounded-t-md object-cover w-[100%]" />
          <div className="h-[300px] bg-white rounded-b-md p-2">
            <span className="text-[#0B8308] font-semibold">Orange:</span>
            <span className="text-xs">
            Our oranges are a symbol of refreshing citrus flavor. We ensure that they are picked at the peak of their juiciness. Each bite into our oranges is a taste of the Kenyan sunshine and the dedication we put into our produce.
            </span>
          </div>
        </div>
        {/* Product Card 4 */}
        <div className="flex flex-col hover:scale-105 transition-all ease-in-out duration-500 cursor-pointer shadow-md shadow-gray-400 justify-center items-center">
          <img src= {Banana} alt="Products"className="h-[280px] rounded-t-md object-cover w-[100%]" />
          <div className="h-[300px] bg-white rounded-b-md p-2">
            <span className="text-[#0B8308] font-semibold">Banana:</span>
            <span className="text-xs">
             Our bananas  thrive in the sunny and humid climate of Kenya, producing  sweet  bananas . Bursting with essential nutrients, including potassium and fiber, our bananas are a healthy and energizing snack. We take great care in cultivating and harvesting these fruits. 
            </span>
          </div>
        </div>
        {/* Product Card 5*/}
        <div className="flex flex-col hover:scale-105 transition-all ease-in-out duration-500 cursor-pointer shadow-md shadow-gray-400 justify-center items-center">
          <img src= {Beans} alt="Products"className="h-[280px] rounded-t-md object-cover w-[100%]" />
          <div className="h-[300px] bg-white rounded-b-md p-2">
            <span className="text-[#0B8308] font-semibold">Beans:</span>
            <span className="text-xs">
            We take pride in cultivating high-quality beans.  Our beans are a source of wholesome nutrition. Packed with essential nutrients and a great source of plant-based protein.
            
            </span>
          </div>
        </div>
        {/* Product Card 6 */}
        <div className="flex flex-col hover:scale-105 transition-all ease-in-out duration-500 cursor-pointer shadow-md shadow-gray-400 justify-center items-center">
          <img src= {Paprika} alt="Products"className="h-[280px] rounded-t-md object-cover w-[100%]" />
          <div className="h-[300px] bg-white rounded-b-md p-2">
            <span className="text-[#0B8308] font-semibold">Capsicum:</span>
            <span className="text-xs">
              Our capsicums are known for their rich colors and exceptional taste.  They add a burst of flavor and nutrition to your meals, whether used in salads, stir-fries, or as a colorful topping.
     

            </span>
          </div>
        </div>
        {/* Product Card 7*/}
        <div className="flex flex-col hover:scale-105 transition-all ease-in-out duration-500 cursor-pointer shadow-md shadow-gray-400 justify-center items-center">
          <img src= {Chicken} alt="Products"className="h-[280px] rounded-t-md object-cover w-[100%]" />
          <div className="h-[300px] bg-white rounded-b-md p-2">
            <span className="text-[#0B8308] font-semibold">Poultry:</span>
            <span className="text-xs">
            Our chickens are raised with care and dedication.  Our poultry enjoy a healthy and natural environment. We ensure that every chicken we provide is raised with the utmost attention to their well-being and quality.

            </span>
          </div>
        </div>
        {/* Product Card 8 */}
        <div className="flex flex-col hover:scale-105 transition-all ease-in-out duration-500 cursor-pointer shadow-md shadow-gray-400 justify-center items-center">
          <img src= {Cows} alt="Products"className="h-[280px] rounded-t-md object-cover w-[100%]" />
          <div className="h-[300px] bg-white rounded-b-md p-2">
            <span className="text-[#0B8308] font-semibold">Cows:</span>
            <span className="text-xs">
            Our cows thrive on a diet of natural grains and forage,
             resulting in meat that's not only delicious but also rich in nutrients.

            </span>
          </div>
        </div>
         {/* Product Card 9 */}
         <div className="flex flex-col hover:scale-105 transition-all ease-in-out duration-500 cursor-pointer shadow-md shadow-gray-400 justify-center items-center">
          <img src= {Goat} alt="Products"className="h-[280px] rounded-t-md object-cover w-[100%]" />
          <div className="h-[300px] bg-white rounded-b-md p-2">
            <span className="text-[#0B8308] font-semibold">Goats:</span>
            <span className="text-xs">
            Our goats are grazed in the fields, and the natural food keeps them healthy and strong.

            </span>
          </div>
        </div>
        
      </div>
      
    </div>
      
    </div>
    </div>
  )
}

export default Allproducts
