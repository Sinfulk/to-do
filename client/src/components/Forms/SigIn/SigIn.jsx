import React from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { signIn } from '../../../redux/actions/userAction';
import massageIcon from '../../../image/topic.svg'
import  '../forms.scss'
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

    <form className='heroForm'onSubmit={handleSubmit(onSubmit)} >
      <h1>Your name and password</h1>
      <div className='field'>
        <img src={massageIcon} alt="иконка темы" className="icon" />
        <label htmlFor='sigInName'>Name</label>
        <input
          id='sigInName'
          placeholder="Enter Name"
          {...register('name', {
            required: 'Name is require field!'
          })}
        />
        <div className='field'>
          {errors?.name && <p>{errors?.name?.message}</p>}
        </div>
      </div>
      <div className='field'>
        <img src={massageIcon} alt="иконка темы" className="icon" />
        <label htmlFor='SigInPassword'>Pasword</label>
        <input
          id='SigInPassword'
          placeholder="Enter password"
          type="password"
          {...register('password', {
            required: 'Password is require field!'
          })}
        />
        <div className='field'>
          {errors?.password && <p>{errors?.password?.message}</p>}
        </div>
      </div>
      <button type="submit">
        sign in
      </button>
    </form>

  );
}

export default SigIn;
