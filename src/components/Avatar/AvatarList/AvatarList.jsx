import css from './AvatarList.module.css';

export const AvatarList = ({ children }) => {
  return (
    <ul className={css.avatarList}>
      {children.map((skill, index) => {
        return (
          <li className={css.avatarItem} key={index}>
            {skill}
          </li>
        );
      })}
    </ul>
  );
};
