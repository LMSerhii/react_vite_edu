import css from './LoginForm.module.css';
import { useId } from 'react';

export const LoginForm = ({ onSubmit }) => {
  const loginId = useId();
  const passwordId = useId();

  const handleSubmit = evt => {
    evt.preventDefault();

    const form = evt.target;
    const { login, password } = form.elements;

    onSubmit({
      login: login.value,
      password: password.value,
    });

    form.reset();
  };
  return (
    <form className={css.loginForm} onSubmit={handleSubmit}>
      <label htmlFor={loginId}>Login</label>
      <input className={css.input} type="text" name="login" id={loginId} />

      <label htmlFor={passwordId}>Password</label>
      <input
        className={css.input}
        type="password"
        name="password"
        id={passwordId}
      />

      <button className={css.btn} type="submit">
        Login
      </button>
    </form>
  );
};
