import css from './AvatarButton.module.css';

const buttonAvtion = () => {
  alert('Add to order');
};

export const AvatarButton = () => {
  return (
    <button onClick={buttonAvtion} type="button">
      Click me!!!
    </button>
  );
};
