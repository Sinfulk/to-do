const { Router } = require('express');
const tasksController = require('../controllers/tasks.controller');
const checkUser = require('../middlewares/checkUser');

const tasksRouter = Router();
tasksRouter.get('/', tasksController.allTasks)
tasksRouter.post('/', tasksController.newTask);
tasksRouter.put('/edit', checkUser, tasksController.editTask);
tasksRouter.put('/:id', checkUser, tasksController.editStatusTask);
tasksRouter.delete('/:id', checkUser, tasksController.deleteTask);



module.exports = tasksRouter;
