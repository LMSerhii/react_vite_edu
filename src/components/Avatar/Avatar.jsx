import css from './Avatar.module.css';
import { AvatarTitle } from './AvatarTitle/AvatarTitle';
import { AvatarText } from './AvatarText/AvatarText';
import { AvatarImage } from './AvatarImage/AvatarImage';
import { AvatarList } from './AvatarList/AvatarList';
import { AvatarButton } from './AvatarButton/AvatarButton';

export const Avatar = props => {
  return (
    <>
      <AvatarTitle>{props.name}</AvatarTitle>
      <AvatarImage>{props}</AvatarImage>
      <AvatarText>{props.text}</AvatarText>
      {Boolean(props.skills.length) && <AvatarList>{props.skills}</AvatarList>}
      <AvatarButton></AvatarButton>
    </>
  );
};
