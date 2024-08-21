import className from 'classnames';

type IButtonProps = {
  xl?: boolean;
  children: string;
};

const Button = (props: IButtonProps) => {
  const btnClass = className({
    btn: true,
    'btn-xl': props.xl,
    'btn-base': !props.xl,
    'btn-primary': true,
  });

  return (
    <div className={btnClass}>
      {props.children}

      <style jsx>
        {`
          .btn {
            @apply inline-block rounded-md text-center;
          }

          .btn-base {
            @apply text-lg py-3 px-5;
          }

          .btn-xl {
            @apply text-5xl py-3 px-5;
          }

          .btn-primary {
            @apply text-white bg-red-800;
          }

          .btn-primary:hover {
            @apply bg-red-900;
          }
        `}
      </style>
    </div>
  );
};

export { Button };
