import clsx from 'clsx';

const Button = ({ className, onClick, children, disabled, isActive }) => {
  return (
    <button
      className={clsx(className, isActive && 'active')}
      type="button"
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export { Button };
