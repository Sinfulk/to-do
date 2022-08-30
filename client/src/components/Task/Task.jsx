import React, { useState } from 'react';
import { BsTrash } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { deleteTaskFetch, editedTaskFetch, taskStatusFetch } from '../../redux/actions/tasksAction';
import Check from '../Check/Check';
import styles from './Task.module.scss';

function Task({
  taskId,
  userName,
  userEmail,
  description,
  status,
  allTasks,
  chnged
}) {
  const user = useSelector((store) => store.user);
  const
    {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm({
      mode: 'onBlur',
      defaultValues: {
        description
      }
    });

  const dispatch = useDispatch();

  function onSubmit(data) {
    dispatch(editedTaskFetch(allTasks, taskId, data));
  }

  function deleteHandle() {
    dispatch(deleteTaskFetch(taskId));
  }
  function taskStatusHandle() {
    dispatch(taskStatusFetch(allTasks, taskId));
  }

  return (
    <div className={styles.taskCard}>
      <div className={styles.buttons}>
        <button type="button" className={`${styles.check} ${status ? styles.background : ''}`} onClick={taskStatusHandle}>
          <Check status={status} />
        </button>
        <button type="button" className={styles.bsTrash} onClick={deleteHandle}>
          <BsTrash />
        </button>
      </div>
      <div className={styles.info}>
        <div className={styles.userInfo}>
          <div className={styles.title}> Name: </div>
          <div className={styles.infoUser}>{userName}</div>
        </div>
        <div className={styles.userInfo}>
          <div className={styles.title}> Email: </div>
          <div className={styles.infoUser}>{userEmail}</div>
        </div>
        {chnged
        && (
          <div className={styles.userInfo}>
            <div className={styles.title}> Edited: </div>
            <div className={styles.infoUser}>admin</div>
          </div>
        )}
        <div className={styles.userInfo}>
          <div className={styles.title}> Task: </div>
          {user.id ? (
            <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
              <textarea
                placeholder="Text ..."
                {...register('description', {
                  required: 'description is require field'
                })}
              />
              <div>
                {errors?.password && <p>{errors?.password?.message}</p>}
              </div>
              <button type="submit" className={styles.button}>
                Edit
              </button>
            </form>
          ) : (
            <p className={styles.infoUser}>{description}</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Task;
