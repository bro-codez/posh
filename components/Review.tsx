/* eslint-disable prettier/prettier */
/* eslint-disable react/jsx-key */
/* eslint-disable prettier/prettier */
import Carousel from "react-multi-carousel";
import { Star, Plus, Circle } from "../svgs";
import { NewspaperIcon, StarIcon, ThumbUpIcon } from "@heroicons/react/outline";

import "react-multi-carousel/lib/styles.css";
import { Section } from "./layout/Section";

export const PeopleReview = (_props: any) => {
  const dataReview = [
    {
      image_url: "/images/client1.jpg",
      name: "Allison",
    },
    {
      image_url: "/images/client2.jpg",
      name: "Kattie",
    },
    {
      image_url: "/images/client3.jpg",
      name: "Sylvia",
    },
    {
      image_url: "/images/client4.jpg",
      name: "Proff",
    },
  ];

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 2,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 600 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 500, min: 0 },
      items: 1,
    },
  };

  return (
    <Section
      
  
      title="What they are saying"
    >
      <Carousel
        responsive={responsive}
        swipeable={true}
        draggable={true}
        arrows={false}
        showDots={false}
        infinite={true}
        containerClass="mt-4 max-w-7xl mx-auto"
        dotListClass="custom-dot-list-style"
        itemClass="rounded-lg "
        autoPlay={true}
        autoPlaySpeed={6000}
      >
        {dataReview.map((item, _key) => (
          <div className="bg-white text-black py-4 px-4 mx-auto my-8">
            <img
              src={item.image_url}
              alt=""
              className="h-60 w-60 rounded-full mx-auto object-cover"
            />
            
            <p className="leading-relaxed italic font-thin text-xl p-6">
              “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis.”
            </p>

            <h4 className="-mt-2 text-xl font-bold text-center w-1/4 mx-auto">
              {item.name}
            </h4>
          </div>
        ))}
      </Carousel>

    </Section>
  );
};
