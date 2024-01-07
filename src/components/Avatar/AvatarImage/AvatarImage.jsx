import css from './AvatarImage.module.css';

export const AvatarImage = ({ children }) => {
  return (
    <div className={css.thumb}>
      <img
        src={children.image}
        alt={children.name}
        width="100"
        loading="lazy"
      />
    </div>
  );
};
