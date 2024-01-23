import { useId } from 'react';
import style from './LangSwitcher.module.css';
import { CoffeeSize } from '../CoffeeSize/CoffeeSize';
import { CheckBox } from '../CheckBox/CheckBox';

export const LangSwitcher = ({ lang, onSelect }) => {
  const selectId = useId();

  return (
    <div className={style.langSwitcher}>
      <label htmlFor={selectId}>Choose language</label>
      <select
        id={selectId}
        value={lang}
        onChange={evt => onSelect(evt.target.value)}
      >
        <option value="en">English</option>
        <option value="uk">Ukrainian</option>
        <option value="pl">Polish</option>
      </select>

      <CoffeeSize />

      <CheckBox />
    </div>
  );
};
