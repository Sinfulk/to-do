import React from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { signIn } from '../../../redux/actions/userAction';
import styles from './SignIn.module.scss';

function SigIn({ setActive }) {
  const dispatch = useDispatch();
  const
    {
      register,
      handleSubmit,
      reset,
      formState: { errors },
    } = useForm({ mode: 'onBlur' });

  const onSubmit = (data) => {
    reset();
    dispatch(signIn(data));
    setActive(false);
  };

  return (

    <form onSubmit={handleSubmit(onSubmit)} className={styles.signIn}>
      <div className={styles.input}>
        <input
          placeholder="Name"
          {...register('name', {
            required: 'Field must be filled!'
          })}
        />
        <div className={styles.masage}>
          {errors?.name && <p>{errors?.name?.message}</p>}
        </div>
      </div>
      <div className={styles.input}>
        <input
          placeholder="Password"
          type="password"
          {...register('password', {
            required: 'Field must be filled!'
          })}
        />
        <div className={styles.masage}>
          {errors?.password && <p>{errors?.password?.message}</p>}
        </div>
      </div>
      <button type="submit" className={styles.button}>
        sign in
      </button>
    </form>

  );
}

export default SigIn;
