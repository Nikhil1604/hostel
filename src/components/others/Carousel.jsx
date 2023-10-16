import React, { useState } from 'react';


const slides = [
  {
    image:   'https://plus.unsplash.com/premium_photo-1661964088064-dd92eaaa7dcf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cmFuZG9tfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
    text: 'Welcome to Our Hostel',
  },
  {
    image: 'https://images.unsplash.com/photo-1494253109108-2e30c049369b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cmFuZG9tfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
    text: 'Welcome to Our Hostel',
  },
  {
    image: 'https://images.unsplash.com/photo-1494059980473-813e73ee784b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHJhbmRvbXxlbnwwfDB8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'
    ,
    text: 'Welcome to our Hostel',
  },
  // Add more slides as needed
];

const Carousel = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((currentIndex - 1 + slides.length ) % slides.length);
  };

  return (
    <div className="w-full h-screen relative overflow-hidden">
      <ul className="carousel flex">
        {slides.map((slide, index) => (
          <li
            key={index}
            className={`carousel-item flex-shrink-0 w-full ${
              index === currentIndex ? '' : 'hidden'
            }`}
          >
            <img
              src={slide.image}
              alt="mg"
              className="w-full h-screen object-cover"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black bg-opacity-50">
                <p className="text-center text-red-300 text-3xl py-3">{slide.text}</p>
                <p className="text-center py-2 text-xl">Serving Students on Budget</p>
                <p className="text-center py-3 text-red-300 text-3xl">We Provide Comfortable Accomodations For You</p>
              </div>


          </li>
        ))}
      </ul>
      <button
        className="prev-button absolute top-1/2 left-2 transform -translate-y-1/2"
        onClick={prevSlide}
      >
        &lt;
      </button>
      <button
        className="next-button absolute top-1/2 right-2 transform -translate-y-1/2"
        onClick={nextSlide}
      >
        &gt;
      </button>
    </div>
  );
};

export default Carousel;




