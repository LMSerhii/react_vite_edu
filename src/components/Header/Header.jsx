import css from './Header.module.css';
import { Progress } from '../Progress/Progress';
import { Controls } from '../Controls/Controls';

export const Header = ({
  clicks,
  setClicks,
  data,
  isNextDisabled,
  isPrevDisabled,
}) => {
  return (
    <div className={css.header}>
      <Controls
        clicks={clicks}
        setClicks={setClicks}
        isNextDisabled={isNextDisabled}
        isPrevDisabled={isPrevDisabled}
      />
      <Progress current={clicks + 1} total={data.length} />
    </div>
  );
};
