import './App.css';
import data from '../data.json';
import { Avatar } from './Avatar/Avatar';

export default function App() {
  return (
    <div className="app">
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
    </div>
  );
}
