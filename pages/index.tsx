import type{ NextPage } from 'next';
import { Carousel1, HeroSlide } from '../components/Carousel'


import {
  
  Trending,
  Testimonials,
  Footer,
  Card,
  FeaturedTours,
} from '../components';
import Navbar from '../components/Navbar';

import  Hero  from '../components/Hero';
import  Featured  from '../components/Featured';

import { PeopleReview } from '../components/Review';
import Card2 from '../components/Card/Card2';

import PortfolioGrid from '../components/Portfolio';
import Carousel from 'react-multi-carousel';
import Promo from '../components/Promo';

const Home: NextPage = () => {
  return(
  <>
  <Navbar />
  <HeroSlide />
  <Featured />
  <PortfolioGrid />
  
  
  </>
)};

export default Home;