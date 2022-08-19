
import Carousel from 'react-multi-carousel';



const locations = ['Ndere Island', 'Impala Sanctuary', 'Hippo Point', 'Dunga Bay','Kit Mikayi'];
const activities = ['Wildlife', 'Sight-seeing'];
const grades = ['Grade 1', 'Grade 2', 'Grade 3'];
const regions = ['Region 1', 'Region 2', 'Region 3'];



export const Carousel1 = (_props: any) => {
  const mainImgs = [
    {
      image_url: '/images/fun1.jpg',
      name: 'FUNITURE',
      description: `Interior Decoration.`,
    },
    {
      image_url: '/images/gyp1.jpg',
      name: 'GYPSUM',
      description: `Interior Design.`,
    },
    {
      image_url: '/images/gyp1.jpg',
      name: 'FITTINGS',
      description: `Interior Design`,
    },
    {
      image_url: '/images/gyp1.jpg',
      name: 'CURTAINS',
      description: `Interior Decoration.`,
    }
  ];

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 600 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 500, min: 0 },
      items: 1,
    },
  };

  return (   
        <div className="">
        <Carousel
          responsive={responsive}
        
          swipeable={true}
          draggable={true}
          arrows={false}
          showDots={false}
          infinite={true}
          
          dotListClass="bg-black"
          itemClass="text-center"
          additionalTransfrom={0}
          autoPlay={true}
          autoPlaySpeed={2000}
          centerMode={false}
          className=" "
          containerClass="relative"
          rewindWithAnimation={true}
          focusOnSelect={false}
          keyBoardControl
          minimumTouchDrag={80}
          renderButtonGroupOutside={false}
          renderDotsOutside={true}
                   
        >
          {mainImgs.map((item, _key) => (
            <div className=" bg-blue-900 ">
             
              
              <div className="relative z-10 text-center py-40 " >
                <h1 className=" text-center text-6xl font-display font-bold mb-12 animate-fade-in-down">{item.name}</h1>
              
              <p className=" leading-relaxed  font-bold text-lg pt-2 lg:text-4xl">
                  {item.description}
              </p>
              </div>
              <img
                src={item.image_url}
                alt=""
                className="w-full h-full absolute inset-0 object-fit opacity-70"
               />
            </div>

                          
            
          ))}
        </Carousel>
    
        
        </div>
      
  );
};