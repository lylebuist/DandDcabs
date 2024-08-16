import type { ReactNode } from 'react';

type ICTABannerProps = {
  title: string;
  subtitle: string;
  button1: ReactNode;
  button2: ReactNode;
};

const CTABanner = (props: ICTABannerProps) => (
  <div className="flex flex-col rounded-md bg-stone-300 p-4 text-center sm:flex-row sm:items-center sm:justify-between sm:p-12 sm:text-left">
    <div className="text-2xl">
      <div className="text-gray-900">{props.title}</div>
      <div className="bg-stone-300">{props.subtitle}</div>
    </div>

    <div className="whitespace-no-wrap mt-3 sm:ml-2 sm:mt-0">
      {props.button1}
    </div>
    <div className="whitespace-no-wrap mt-3 sm:ml-2 sm:mt-0">
      {props.button2}
    </div>
  </div>
);

export { CTABanner };
