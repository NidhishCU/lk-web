import React, { useState, useEffect } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

// Create a custom theme for the MUI Button
const theme = createTheme({
  palette: {
    primary: {
      main: '#ffffff',
    },
  },
});

const HeroCarousel = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const carouselData = [
    {
      title: "Elevate Your Vision with Robust",
      subtitle: "And Scalable Mobile App Development!",
      description: "IMG Global Infotech's robust and scalable app development solutions redefine possibilities, ensuring your ideas soar to new heights. Uplifting innovations, one app at a time!",
      tags: ["Mobile", "App Development", "Scalable", "Robust"]
    },
    {
      title: "Transform Your Business with",
      subtitle: "Custom Web Development Solutions",
      description: "Create powerful, responsive web applications that drive growth and enhance user experience with our expert development team.",
      tags: ["Web Development", "Custom Solutions", "Responsive", "Modern"]
    },
    {
      title: "Innovate and Scale with",
      subtitle: "Cloud Computing Excellence",
      description: "Leverage cutting-edge cloud technologies to optimize your infrastructure and accelerate digital transformation.",
      tags: ["Cloud", "Innovation", "Scalability", "Digital"]
    },
    {
      title: "Enhance User Experience with",
      subtitle: "UI/UX Design Excellence",
      description: "Create memorable digital experiences with our user-centered design approach and innovative solutions.",
      tags: ["UI/UX", "Design", "User Experience", "Creative"]
    },
    {
      title: "Secure Your Digital Assets with",
      subtitle: "Advanced Cybersecurity Solutions",
      description: "Protect your business with state-of-the-art security measures and proactive threat detection systems.",
      tags: ["Security", "Cybersecurity", "Protection", "Digital"]
    },
    {
      title: "Accelerate Growth with",
      subtitle: "Digital Marketing Strategies",
      description: "Drive business success with data-driven marketing solutions and innovative digital strategies.",
      tags: ["Marketing", "Digital", "Strategy", "Growth"]
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % carouselData.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % carouselData.length);
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + carouselData.length) % carouselData.length);
  };

  const goToSlide = (index) => {
    setActiveSlide(index);
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="relative w-full" style={{ height: '600px', overflow: 'hidden' }}>
        <div 
          className="flex transition-transform duration-500 ease-out h-full"
          style={{ transform: `translateX(-${activeSlide * 100}%)` }}
        >
          {carouselData.map((slide, index) => (
            <div 
              key={index}
              className="w-full flex-shrink-0 h-full"
              style={{
                background: 'linear-gradient(to right, #1e3a8a, #166534)',
                position: 'relative',
              }}
            >
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: 'rgba(0, 0, 0, 0.4)',
              }} />
              
              <div className="relative z-10 container mx-auto px-4 py-20 h-full flex flex-col justify-center">
                <div className="flex flex-wrap gap-2 mb-6">
                  {slide.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 text-sm bg-white bg-opacity-10 text-white rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="max-w-4xl">
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                    {slide.title}
                    <br />
                    <span className="text-white">{slide.subtitle}</span>
                  </h1>
                  
                  <p className="text-lg text-gray-200 mb-8 max-w-2xl">
                    {slide.description}
                  </p>

                  <Button
                    variant="contained"
                    color="primary"
                    style={{
                      backgroundColor: 'white',
                      color: 'rgb(20 83 45)',
                      padding: '10px 24px',
                      borderRadius: '9999px',
                      textTransform: 'none',
                    }}
                  >
                    Consult Our Experts
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-30 hover:bg-opacity-50 p-2 rounded-full text-white z-20"
        >
          <ChevronLeftIcon />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-30 hover:bg-opacity-50 p-2 rounded-full text-white z-20"
        >
          <ChevronRightIcon />
        </button>

        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
          {carouselData.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                activeSlide === index ? 'bg-white' : 'bg-white bg-opacity-50'
              }`}
            />
          ))}
        </div>
      </div>
    </ThemeProvider>
  );
};

export default HeroCarousel;

