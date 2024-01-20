import css from './Progress.module.css';

export const Progress = ({ current, total }) => {
  return (
    <div className={css.progress}>
      <p>
        {current}/{total}
      </p>
    </div>
  );
};
