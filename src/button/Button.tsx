import className from 'classnames';

type IButtonProps = {
  xl?: boolean;
  children: string;
};

const Button = (props: IButtonProps) => {
  const btnClass = className(
    'inline-flex items-center justify-center rounded-md text-center font-normal text-white bg-red-800 transition-colors duration-200 hover:bg-red-900',
    {
      'text-base py-2.5 px-4': !props.xl,
      'text-xl py-3 px-6': props.xl,
    },
  );

  return <div className={btnClass}>{props.children}</div>;
};

export { Button };
