/* eslint-disable prettier/prettier */
/* eslint-disable react/jsx-key */
/* eslint-disable prettier/prettier */
import Carousel from "react-multi-carousel";
import { Star, Plus, Circle } from "../svgs";
import { NewspaperIcon, StarIcon, ThumbUpIcon } from "@heroicons/react/outline";

import "react-multi-carousel/lib/styles.css";
import { Section } from "./layout/Section";

export const HeroSlide = (_props: any) => {
  const dataReview = [
    {
      image_url: "/images/gyp1.jpg",
      name: "Interior Decoration",
    },
    {
      image_url: "/images/fun1.jpg",
      name: "Gypsum",
    },
    {
      image_url: "/images/fun2.jpg",
      name: "Furniture",
    },
    {
      image_url: "/images/fit5.jpg",
      name: "Fittings",
    },
    {
      image_url: "/images/bed.jpg",
      name: "Interior Design",
    },
  ];

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
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
    <Section>
      <Carousel
        responsive={responsive}
        swipeable={true}
        draggable={true}
        arrows={false}
        showDots={false}
        infinite={true}
        containerClass=""
        dotListClass="custom-dot-list-style"
        itemClass=""
        autoPlay={true}
        autoPlaySpeed={6000}
      >
        {dataReview.map((item, _key) => (
          <div className=" ">
            <img
              src={item.image_url}
              alt=""
              className="h-screen w-screen mx-auto object-cover brightness-50"
            />
            <div className="flex items-center mx-auto py-4 justify-center"></div>

            <h4 className="absolute text-white top-80 text-6xl text-center w-full mx-auto">
              {item.name}
            </h4>
          </div>
        ))}
      </Carousel>
    </Section>
  );
};
