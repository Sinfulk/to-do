import React from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { taskFetch } from '../../../redux/actions/tasksAction';
import styles from './ToDoForm.module.scss';

function ToDoForm({ setActive }) {
  const dispatch = useDispatch();
  const
    {
      register,
      handleSubmit,
      reset,
      formState: { errors },
    } = useForm({ mode: 'onBlur' });

  const onSubmit = (data) => {
    dispatch(taskFetch(data));
    reset();
    setActive(false);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.toDoForm}>

      <div className={styles.input}>
        <label className={styles.label}>User name</label>
        <input
          placeholder="Name"
          {...register('userName', {
            required: 'Name is require field!'
          })}
        />
        <div className={styles.masage}>
          {errors?.userName && <p>{errors?.userName?.message}</p>}
        </div>
      </div>

      <div className={styles.input}>
        <label className={styles.label}>User email</label>
        <input
          type="email"
          placeholder="user@user.com"
          {...register('userEmail', {
            required: 'Email is require field!',
            pattern: {
              value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              message: 'Pleas enter valid email!',
            }
          })}
        />
        <div className={styles.masage}>
          {errors?.userEmail && <p>{errors?.userEmail?.message}</p>}
        </div>
      </div>

      <div className={styles.input}>
        <label className={styles.label}>Description</label>
        <textarea
          placeholder="Text ..."
          {...register('description', {
            required: 'description is require field!'
          })}
        />
        <div className={styles.masage}>
          {errors?.description && <p>{errors?.description?.message}</p>}
        </div>
      </div>

      <button type="submit" className={styles.button}>
        Create
      </button>
    </form>
  );
}

export default ToDoForm;
