import Link from 'next/link';

import { Background } from '../background/Background';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const Hero = () => (
  <Background color="bg-stone-300">
    <Section yPadding="py-6">
      <NavbarTwoColumns logo={<Logo text-2xl />}>
        <li className="pr-3">
          <Link href="https://www.google.com/localservices/prolist?g2lbs=AOHF13no872xELlDkLfty4XthqIBK5XHeUGEhrulaPpNdcjy3SfcwMf6_XNwv-1NX3W2jXx1hYV9oN_ppdObSN2SmZvZ9NT_r70nOZ4bZ-tJHMAuk6a_9IM%3D&hl=en-GB&gl=uk&cs=1&ssta=1&q=kirriemuir%20taxi&oq=kirriemuir%20taxi&slp=MgBSAggCYAB6wwFDZzlyYVhKeWFXVnRkV2x5SUhSaGVHbElvYnlveDhtNmdJQUlXaGNRQVJnQUdBRWlEMnRwY25KcFpXMTFhWElnZEdGNGFaSUJESFJoZUdsZmMyVnlkbWxqWmFvQlRBb0lMMjB2TUhCbk5USVFBU29JSWdSMFlYaHBLQUF5SHhBQkloc1JhREtpUXVRak1YNnVFb0pYcGFHWnVqZWFRYlo1TnViZXA2d3lFeEFDSWc5cmFYSnlhV1Z0ZFdseUlIUmhlR2uSASsKDS9nLzExdmxkZ243azEKCy9nLzF0ZGNmeXE1Cg0vZy8xMWdnZHR4Y2Zx&src=2&spp=Cg0vZy8xMXZsZGduN2sxOqQBV2hjUUFSZ0FHQUVpRDJ0cGNuSnBaVzExYVhJZ2RHRjRhWklCREhSaGVHbGZjMlZ5ZG1salpab0JBS29CVEFvSUwyMHZNSEJuTlRJUUFTb0lJZ1IwWVhocEtBQXlIeEFCSWhzUmFES2lRdVFqTVg2dUVvSlhwYUdadWplYVFiWjVOdWJlcDZ3eUV4QUNJZzlyYVhKeWFXVnRkV2x5SUhSaGVHaz0%3D&serdesk=1&lrlstt=1723124387114&ved=2ahUKEwiphIz7z-WHAxVlSkEAHXITFsMQvS56BAgkEAE&scp=ChFnY2lkOnRheGlfc2VydmljZRI4EhIJM7xLtFlkhkgRbbxASdmY8OMiCktpcnJpZW11aXIqFA1n-cUhFWR-Mv4d6unIISXLzTf-MAAaBHRheGkiD2tpcnJpZW11aXIgdGF4aSoMVGF4aSBzZXJ2aWNl#ts=3">
            Google Reviews
          </Link>
        </li>
        <li className="">
          <Link href="https://www.facebook.com/p/DD-Cabs-61558770606403/?_rdr">
            Facebook
          </Link>
        </li>
        <li className="px-3">
          <Link href="tel:07765-256881">Call - 07765-256881</Link>
        </li>
        <li>
          <Link href="">ddcabskirrie@gmail.com</Link>
        </li>
      </NavbarTwoColumns>
    </Section>
  </Background>
);

export { Hero };
