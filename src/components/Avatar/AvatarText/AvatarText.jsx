import css from './AvatarText.module.css';

export const AvatarText = ({ children }) => {
  return <p className={css.text}>{children}</p>;
};
