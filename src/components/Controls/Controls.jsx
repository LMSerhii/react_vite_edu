import css from './Controls.module.css';
import { Button } from '../Button/Button';

export const Controls = ({
  clicks,
  setClicks,
  isPrevDisabled,
  isNextDisabled,
}) => {
  const handleNext = () => {
    setClicks(clicks + 1);
  };

  const handlePrev = () => {
    setClicks(clicks - 1);
  };
  return (
    <div className={css.controls}>
      <Button
        className={css.prev}
        onClick={handlePrev}
        disabled={isPrevDisabled}
      >
        Prev
      </Button>
      <Button
        className={css.next}
        onClick={handleNext}
        disabled={isNextDisabled}
      >
        Next
      </Button>
    </div>
  );
};
