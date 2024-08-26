import { Background } from '@/background/Background';
import { VerticalFeatureRowNoImage } from '@/feature/VerticalFeatureRowNoImage';

import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const VerticalFeatures = () => (
  <Background color="bg-stone-200">
    <Section>
      <VerticalFeatureRow
        title="About Us"
        description="We are a local, family owned taxi business based in Kirriemuir. Born and bred in Kirriemuir, we guarentee an expert knowledge of the town and the surrounding area. Book us at 07765-256881"
        image="car.jpg"
        imageAlt="Third feature alt text"
        reverse
      />
      <VerticalFeatureRow
        title="Our Team"
        description="We offer a team of experienced, fully licnenced drivers and can ensure a quality service. With over 35 years of driving experience, we are the most qualified for the job."
        image="car2.jpg"
        imageAlt="First feature alt text"
      />
      <VerticalFeatureRow
        title="Pricings"
        description="We also transport to many places in the surrounding area and beyond. We have dedicated pricings to hospitals, airports, and even transport to remote locations."
        image="locations.png"
        imageAlt="Second feature alt text"
        reverse
      />
      <VerticalFeatureRowNoImage title="Hear From Previous Customers" />
    </Section>
  </Background>
);

export { VerticalFeatures };
