import { Section } from '../layout/Section';

const Image = () => (
  <div>
    <Section yPadding="pt-20 pb-20">
      <h1 className="whitespace-pre-line text-center text-5xl leading-hero text-gray-900">
        {'Premium taxi service with\n'}
      </h1>
      <div className="text-centre" style={{ textAlign: 'center' }}>
        <h1
          style={{ display: 'inline' }}
          className="whitespace-pre-line text-center text-6xl italic leading-hero text-red-800"
        >
          {'D'}
        </h1>
        <h1
          style={{ display: 'inline' }}
          className="whitespace-pre-line text-center text-3xl leading-hero text-red-800"
        >
          {'&'}
        </h1>
        <h1
          style={{ display: 'inline' }}
          className="whitespace-pre-line text-center text-6xl italic leading-hero text-red-800"
        >
          {'D'}
        </h1>
        <h1
          style={{ display: 'inline' }}
          className="impact whitespace-pre-line text-center text-4xl italic leading-hero text-red-800"
        >
          {' CABS'}
        </h1>
      </div>
    </Section>
  </div>
);

export { Image };
