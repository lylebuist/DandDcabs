import Link from 'next/link';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';
import styles from '../styles/backround.module.css'

const Image = () => (
  <div>
    <Section yPadding="pt-20 pb-20">
      <h1 className="text-center whitespace-pre-line text-5xl leading-hero text-gray-900">
        {'Premium taxi service with\n'} 
      </h1>
      <div className='text-centre' style={{textAlign: 'center'}}>
        <h1 style={{display: 'inline'}} className="text-center whitespace-pre-line text-6xl leading-hero text-red-800 italic">
            {'D'}
        </h1>
        <h1 style={{display: 'inline'}} className="text-center whitespace-pre-line text-3xl leading-hero text-red-800">
          {'&'} 
        </h1>
        <h1 style={{display: 'inline'}} className="text-center whitespace-pre-line text-6xl leading-hero text-red-800 italic">
          {'D'} 
        </h1>
        <h1 style={{display: 'inline'}} className="text-center whitespace-pre-line text-4xl impact text-red-800 italic leading-hero">
          {' CABS'} 
        </h1>
      </div>
    </Section>
  </div>
);

export { Image };

