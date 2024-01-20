import css from './LoginForm.module.css';

const handleSubmit = evt => {
  evt.preventDefault();
  const form = evt.target;
  const { login, password } = form.elements;

  console.log(login, password);

  console.log(login.value, password.value);

  form.reset();
};

export const LoginForm = () => {
  return (
    <form className={css.loginForm} onSubmit={handleSubmit}>
      <input type="text" name="login" />
      <input type="password" name="password" />
      <button type="submit">Login</button>
    </form>
  );
};
