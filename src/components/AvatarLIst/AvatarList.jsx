import { Avatar } from '../Avatar/Avatar';

const AvatarList = ({ data }) => {
  return (
    <ul>
      {data.map(user => {
        return (
          <li key={user.id}>
            {
              <Avatar
                name={user.name}
                text={user.text}
                image={user.image}
                skills={user.skills}
              />
            }
          </li>
        );
      })}
    </ul>
  );
};

export { AvatarList };
