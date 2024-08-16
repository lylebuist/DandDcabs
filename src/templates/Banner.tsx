import Link from 'next/link';

import { Button } from '../button/Button';
import { CTABanner } from '../cta/CTABanner';
import { Section } from '../layout/Section';

const Banner = () => (
  <Section>
    <CTABanner
      title="Be sure to join many others and leave us a review"
      subtitle=""
      button1={
        <Link href="https://www.google.com/localservices/prolist?g2lbs=AOHF13no872xELlDkLfty4XthqIBK5XHeUGEhrulaPpNdcjy3SfcwMf6_XNwv-1NX3W2jXx1hYV9oN_ppdObSN2SmZvZ9NT_r70nOZ4bZ-tJHMAuk6a_9IM%3D&hl=en-GB&gl=uk&cs=1&ssta=1&q=kirriemuir%20taxi&oq=kirriemuir%20taxi&slp=MgBSAggCYAB6wwFDZzlyYVhKeWFXVnRkV2x5SUhSaGVHbElvYnlveDhtNmdJQUlXaGNRQVJnQUdBRWlEMnRwY25KcFpXMTFhWElnZEdGNGFaSUJESFJoZUdsZmMyVnlkbWxqWmFvQlRBb0lMMjB2TUhCbk5USVFBU29JSWdSMFlYaHBLQUF5SHhBQkloc1JhREtpUXVRak1YNnVFb0pYcGFHWnVqZWFRYlo1TnViZXA2d3lFeEFDSWc5cmFYSnlhV1Z0ZFdseUlIUmhlR2uSASsKDS9nLzExdmxkZ243azEKCy9nLzF0ZGNmeXE1Cg0vZy8xMWdnZHR4Y2Zx&src=2&spp=Cg0vZy8xMXZsZGduN2sxOqQBV2hjUUFSZ0FHQUVpRDJ0cGNuSnBaVzExYVhJZ2RHRjRhWklCREhSaGVHbGZjMlZ5ZG1salpab0JBS29CVEFvSUwyMHZNSEJuTlRJUUFTb0lJZ1IwWVhocEtBQXlIeEFCSWhzUmFES2lRdVFqTVg2dUVvSlhwYUdadWplYVFiWjVOdWJlcDZ3eUV4QUNJZzlyYVhKeWFXVnRkV2x5SUhSaGVHaz0%3D&serdesk=1&lrlstt=1723124387114&ved=2ahUKEwiphIz7z-WHAxVlSkEAHXITFsMQvS56BAgkEAE&scp=ChFnY2lkOnRheGlfc2VydmljZRI4EhIJM7xLtFlkhkgRbbxASdmY8OMiCktpcnJpZW11aXIqFA1n-cUhFWR-Mv4d6unIISXLzTf-MAAaBHRheGkiD2tpcnJpZW11aXIgdGF4aSoMVGF4aSBzZXJ2aWNl#ts=3">
          <Button>Google Reviews</Button>
        </Link>
      }
      button2={
        <Link href="https://www.facebook.com/people/DD-Cabs/61558770606403/?sk=reviews">
          <Button>Facebook Reviews</Button>
        </Link>
      }
    />
  </Section>
);

export { Banner };
