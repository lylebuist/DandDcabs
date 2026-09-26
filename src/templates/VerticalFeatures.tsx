import { Background } from '@/background/Background';
import { VerticalFeatureRowNoImage } from '@/feature/VerticalFeatureRowNoImage';

import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const pricingRows = [
  ['Aberdeen Airport', '£140'],
  ['Glasgow Airport', '£200'],
  ['Edinburgh Airport', '£160'],
  ['Dundee', '£50'],
  ['Arbroath Infirmary', '£50'],
  ['Stracathro', '£40'],
  ['Whitehills', '£15'],
];

const PricingTable = () => (
  <div className="w-full sm:w-[55%] sm:px-6">
    <div className="overflow-hidden bg-stone-200">
      {pricingRows.map(([location, price], index) => (
        <div
          key={location}
          className={`grid grid-cols-2 ${
            index < pricingRows.length - 1 ? 'border-b-4 border-black' : ''
          } bg-stone-200`}
        >
          <div
            className="border-r-4 border-black px-3 py-2 text-left text-2xl tracking-tight text-gray-800 sm:text-3xl"
            style={{ fontFamily: 'Impact, sans-serif' }}
          >
            {location}
          </div>
          <div
            className="px-3 py-2 text-left text-2xl font-black tracking-tight text-gray-600 sm:text-3xl"
            style={{ fontFamily: 'Impact, sans-serif' }}
          >
            {price}
          </div>
        </div>
      ))}
    </div>
  </div>
);

const PricingDescription = () => (
  <div className="w-full text-center sm:w-[45%] sm:px-6">
    <h3 className="text-3xl text-gray-900">Pricings</h3>
    <div className="mt-6 text-xl leading-9 text-gray-600">
      We also transport to many places in the surrounding area and beyond. We
      have dedicated pricings to hospitals, airports, and even transport to
      remote locations.
    </div>
  </div>
);

const VerticalFeatures = () => (
  <Background color="bg-stone-200">
    <Section>
      <VerticalFeatureRow
        title="About Us"
        description="We are a local, family owned taxi business based in Kirriemuir. Born and raised in Kirriemuir, we guarantee an expert knowledge of the town and the surrounding area. Book us at 07765-256881"
        image="car.jpg"
        imageAlt="Third feature alt text"
        reverse
      />
      <VerticalFeatureRow
        title="Our Team"
        description="We offer a team of experienced, licenced drivers and can ensure a quality service. With over 35 years of professional driving experience, we are the most qualified for the job."
        image="car2.jpg"
        imageAlt="First feature alt text"
      />
      <div className="mt-20 flex flex-wrap items-center">
        <PricingTable />
        <PricingDescription />
      </div>
      <VerticalFeatureRowNoImage title="Hear From Previous Customers" />
    </Section>
  </Background>
);

export { VerticalFeatures };
