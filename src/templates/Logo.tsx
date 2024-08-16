import { AppConfig } from '../utils/AppConfig';

type ILogoProps = {
  xl?: boolean;
};

const Logo = (props: ILogoProps) => {
  const size = props.xl ? '44' : '32';
  const fontStyle = props.xl
    ? 'font-semibold text-3xl'
    : 'font-semibold text-xl';

  return (
    <div>
      <h1 style={{display: 'inline'}} className="text-center whitespace-pre-line text-6xl leading-hero text-red-800 italic">
        {'D'}
      </h1>
      <h1 style={{display: 'inline'}} className="text-center whitespace-pre-line text-3xl leading-hero text-red-800">
        {'&'} 
      </h1>
      <h1 style={{display: 'inline'}} className="text-center whitespace-pre-line text-6xl leading-hero text-red-800 italic">
        {'D'} 
      </h1>
      <h1 style={{display: 'inline'}} className="text-center whitespace-pre-line text-4xl impact text-red-800 italic">
        {' CABS'} 
      </h1>
    </div>
  );
};

export { Logo };
