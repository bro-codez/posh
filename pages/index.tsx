import type{ NextPage } from 'next';
import { Carousel1 } from '../components/Carousel'


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

const Home: NextPage = () => {
  return(
  <>
  <Navbar />
  <Carousel1 />
  <PortfolioGrid />
  </>
)};

export default Home;