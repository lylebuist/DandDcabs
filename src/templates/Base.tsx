import { Meta } from '../layout/Meta';
import { AppConfig } from '../utils/AppConfig';
import { Banner } from './Banner';
import { Footer } from './Footer';
import { Hero } from './Hero';
import { Image } from './Image';
import { VerticalFeatures } from './VerticalFeatures';

const Base = () => (
  <div className="text-gray-600 antialiased bg-stone-100">
    <Meta title={AppConfig.title} description={AppConfig.description} />
    <Hero />
    <Image />
    <VerticalFeatures />
    <Banner />
    <Footer />
  </div>
);

export { Base };
