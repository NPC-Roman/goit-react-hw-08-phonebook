import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import css from './RegisterForm.module.css';
import style from '../Form/Form.module.css';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
      <label className={css.label}>
        Username
        <input type="text" name="name" className={style.inputForm} />
      </label>
      <label className={css.label}>
        Email
        <input type="email" name="email" className={style.inputForm} />
      </label>
      <label className={css.label}>
        Password
        <input type="password" name="password" className={style.inputForm} />
      </label>
      <button type="submit" className={css.registerBtn}>
        Register
      </button>
    </form>
  );
};
