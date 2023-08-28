import React from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { taskFetch } from '../../../redux/actions/tasksAction';
import  '../forms.scss'
import massageIcon from '../../../image/message.svg'
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
    <form className='heroForm' onSubmit={handleSubmit(onSubmit)} >
        <h1>Describe the task</h1>
      <div className='field'>
        <img src={massageIcon} alt="иконка темы" className="icon" />
        <label htmlFor='userName' >User name</label>
        <input
          id='userName'
          placeholder="Enter Name"
          {...register('userName', {
            required: 'Name is require field!'
          })}
        />
        <div className='field'>
          {errors?.userName && <p>{errors?.userName?.message}</p>}
        </div>
      </div>

      <div className='field'>
         <img src={massageIcon} alt="иконка почты" className="icon" />
        <label htmlFor='taskEmail' >E-mail</label>
        <input
          id='taskEmail'
          type="email"
          placeholder="Enter E-mail"
          {...register('userEmail', {
            required: 'Email is require field!',
            pattern: {
              value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              message: 'Pleas enter valid email!',
            }
          })}
        />
        <div className='field'>
          {errors?.userEmail && <p>{errors?.userEmail?.message}</p>}
        </div>
      </div>

      <div className='field'>
        <label htmlFor='description' >Description</label>
        <textarea
          id='description'
          {...register('description', {
            required: 'description is require field!'
          })}
        />
        <div className='field'>
          {errors?.description && <p>{errors?.description?.message}</p>}
        </div>
      </div>

      <button type="submit">
        Create
      </button>
    </form>
  );
}

export default ToDoForm;
