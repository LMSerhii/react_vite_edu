import css from './AvatarTitle.module.css';

export const AvatarTitle = ({ children }) => {
  return <h2 className={css.avatarTitle}>{children}</h2>;
};
