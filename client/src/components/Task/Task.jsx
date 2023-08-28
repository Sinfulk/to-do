import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { deleteTaskFetch, editedTaskFetch, taskStatusFetch } from '../../redux/actions/tasksAction';
import Check from '../Check/Check';
import  './Task.scss';

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
    <div className="taskCard">
      

      <section className="userTaskCard">
        
        {chnged&& (
          <div className="adminInfo">
            <div className="label"> Edited: </div>
            <div className="labelInfo">admin</div>
          </div>
        )}

       
        <div className="userInfoTask">
        <div className='userCard'>
          <div className="userInfo">
            <div className="label"> Name: </div>
            <div className="labelInfo">{userName}</div>
          </div>
          <div className="userInfo">
            <div className="label"> Email: </div>
            <div className="labelInfo">{userEmail}</div>
          </div>
        </div>
        <div className='taskCard'>
          <div className="label"> 
          <div>Task: </div>
          <div className="check"><Check status={status}/></div>
          </div>
          {user.id ? (
            <form onSubmit={handleSubmit(onSubmit)} className="form">
              <textarea
                id='descriptionTask'
                placeholder="Text ..."
                {...register('description', {
                  required: 'description is a require field'
                })}
              />
              <div>
                {errors?.password && <p>{errors?.password?.message}</p>}
              </div>
              <button type="submit" className="button">
                Edit
              </button>
                <button type="button" onClick={taskStatusHandle} >
                {status ? "Undo" : "Completed"}
               </button>
                <button type="button" onClick={deleteHandle}>
                 Delete
                </button>  
            </form>
            
          ) : (
            <p className="infoUser">{description}</p>
          )}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Task;
