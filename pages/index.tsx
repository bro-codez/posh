import type{ NextPage } from 'next';
import { Carousel1 } from '../components/Carousel'


import {
  Banner,
  Trending,
  Testimonials,
  Footer,
  Card,
  FeaturedTours,
} from '../components';
import Navbar from '../components/Navbar';
import { Hero2 } from '../components/Hero2';
import  Hero  from '../components/Hero';
import  Featured  from '../components/Featured';

import { PeopleReview } from '../components/Review';
import Card2 from '../components/Card/Card2';
import CTAMail from '../components/CTAMail';
import PortfolioGrid from '../components/Portfolio';

const Home: NextPage = () => {
  return(
  <>
  <PortfolioGrid />
  </>
)};

export default Home;