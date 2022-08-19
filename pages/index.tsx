import type{ NextPage } from 'next';
import {HeroSlide } from '../components/Carousel'


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
import Projects from '../components/Portfolio';
import { Base } from '../components/layout/Base';

const Home: NextPage = () => {
  return(
  <>
  <Base>
  <HeroSlide />
  <Featured />
  <Projects />
  <PeopleReview />
  <Promo />
  </Base>
   
  
  </>
)};

export default Home;