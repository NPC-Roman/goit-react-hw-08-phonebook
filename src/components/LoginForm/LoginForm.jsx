import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import css from './LoginForm.module.css';
import style from '../Form/Form.module.css';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit} autoComplete="on">
      <label className={css.label}>
        Email
        <input type="email" name="email" className={style.inputForm} />
      </label>
      <label className={css.label}>
        Password
        <input type="password" name="password" className={style.inputForm} />
      </label>
      <button type="submit" className={css.loginBtn}>
        Log In
      </button>
    </form>
  );
};
