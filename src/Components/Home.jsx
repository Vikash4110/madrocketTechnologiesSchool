import React from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Img1 from '../assets/named1.jpg';
import Img2 from '../assets/named2.jpg';
import Img3 from '../assets/named3.jpg';
import School from '../assets/school.jpg';
import Library from '../assets/library.jpg';
import Banner from './Banner';

import Literacy from "../assets/literacy.jpeg";
import Dance from "../assets/dance.jpeg";
import Win1 from "../assets/win1.jpg";
import Drama from "../assets/drama.jpeg";


const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <>
      <Banner />
      <div className="w-full">
        <Slider {...settings}>
          <div>
            <img src={Img1} alt="School 1" className="w-full h-[400px] sm:h-[300px] object-cover" />
          </div>
          <div>
            <img src={Library} alt="School 2" className="w-full h-[400px] sm:h-[300px] object-cover" />
          </div>
          <div>
            <img src={Img3} alt="School 3" className="w-full h-[400px] sm:h-[300px] object-cover" />
          </div>
        </Slider>
      </div>
      <div className="container mx-auto p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white p-6 shadow-md rounded-md flex flex-col">
          <h2 className="text-orange-500 text-xl font-bold mb-4">Welcome To</h2>
          <h3 className="text-2xl font-semibold mb-4">Springdale Public School</h3>
          <img src={School} alt="Principal" className="w-full h-auto mb-4 rounded-md" />
          <p className="text-base md:text-lg">
            Welcome to Springdale Public School, where we nurture young minds for a brighter future.
          </p>
          <Link to="/about" className="mt-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">Read More ➞</Link>
        </div>
        <div className="bg-white p-6 shadow-md rounded-md flex flex-col items-center justify-center">
          <h2 className="text-orange-500 text-xl font-bold mb-4">Upcoming Events</h2>
          <ul className="space-y-4">
            <li>
              <div className="text-green-500 text-2xl font-bold">22</div>
              <div className="text-gray-600 text-lg font-bold">AUG</div>
              <div className="text-gray-800">"Annual Sports Day - Celebrating Excellence in Sports"</div>
            </li>
            <li>
              <div className="text-green-500 text-2xl font-bold">15</div>
              <div className="text-gray-600 text-lg font-bold">MAY</div>
              <div className="text-gray-800">"Science Exhibition - Showcasing Student Innovations"</div>
            </li>
            <li>
              <div className="text-green-500 text-2xl font-bold">29</div>
              <div className="text-gray-600 text-lg font-bold">APR</div>
              <div className="text-gray-800">"Cultural Fest - Embracing Diversity and Creativity"</div>
            </li>
          </ul>
          <Link to="/gallery" className="mt-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">View All Events ➞</Link>
        </div>
      </div>
      <div className="container mx-auto p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Link to="/gallery" className="relative group">
          <div className="bg-white shadow-md rounded-md overflow-hidden">
            <img src={Dance} alt="Gallery" className="w-full h-[200px] object-cover transform transition duration-500 group-hover:scale-105" />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-green-500">Gallery</h3>
            </div>
            <div className="absolute inset-0 bg-green-500 bg-opacity-0 group-hover:bg-opacity-50 flex items-center justify-center transition duration-500">
              <span className="text-white text-xl opacity-0 group-hover:opacity-100 transition duration-500">Explore Gallery ➞</span>
            </div>
          </div>
        </Link>
        <Link to="/faculty" className="relative group">
          <div className="bg-white shadow-md rounded-md overflow-hidden">
            <img src={Literacy} alt="Faculty" className="w-full h-[200px] object-cover transform transition duration-500 group-hover:scale-105" />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-green-500">Faculty</h3>
            </div>
            <div className="absolute inset-0 bg-green-500 bg-opacity-0 group-hover:bg-opacity-50 flex items-center justify-center transition duration-500">
              <span className="text-white text-xl opacity-0 group-hover:opacity-100 transition duration-500">Meet Our Faculty ➞</span>
            </div>
          </div>
        </Link>
        <Link to="/admissions" className="relative group">
          <div className="bg-white shadow-md rounded-md overflow-hidden">
            <img src={Drama} alt="Admissions" className="w-full h-[200px] object-cover transform transition duration-500 group-hover:scale-105" />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-green-500">Admissions</h3>
            </div>
            <div className="absolute inset-0 bg-green-500 bg-opacity-0 group-hover:bg-opacity-50 flex items-center justify-center transition duration-500">
              <span className="text-white text-xl opacity-0 group-hover:opacity-100 transition duration-500">Join Us ➞</span>
            </div>
          </div>
        </Link>
        <Link to="/students" className="relative group">
          <div className="bg-white shadow-md rounded-md overflow-hidden">
            <img src={Win1} alt="Student Page" className="w-full h-[200px] object-cover transform transition duration-500 group-hover:scale-105" />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-green-500">Student Page</h3>
            </div>
            <div className="absolute inset-0 bg-green-500 bg-opacity-0 group-hover:bg-opacity-50 flex items-center justify-center transition duration-500">
              <span className="text-white text-xl opacity-0 group-hover:opacity-100 transition duration-500">Student Resources ➞</span>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
}

const SampleNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} bg-black rounded-full shadow-lg hover:bg-gray-200`}
      style={{ ...style, display: 'block', right: '10px', zIndex: 1 }}
      onClick={onClick}
    />
  );
}

const SamplePrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} bg-black rounded-full shadow-lg hover:bg-gray-200`}
      style={{ ...style, display: 'block', left: '10px', zIndex: 1 }}
      onClick={onClick}
    />
  );
}

export default Home;
