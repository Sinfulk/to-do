const bcrypt = require('bcrypt')
const { User, Post} = require('../../db/models');

const allTasks = async (req, res) => {
  try {
    const allTasks = await Post.findAll({
      raw: true, 
      include:{ 
        model:User, 
        required: true
      }
    })
    
    if(allTasks){
      return res.json({allTasks})
    }
      return res.status(401).json({ error: 'Noy task' })
} catch (error) {
      console.error(error);
      return res.sendStatus(500);
}
}

const newTask = async (req, res) => {
  const { userName, userEmail, description } = req.body;
  const password = "123"

  if (userName && userEmail && description) {
    try {
      const [user, created] = await User.findOrCreate({
        where: { email: userEmail },
        defaults: {
          name: userName,
          password: await bcrypt.hash(password, 10),
        },
      });
        await Post.create({ 
          description: description, 
          status: false,
          chnged: false, 
          userId: user.id });
        const allTasks = await Post.findAll({
          raw: true, 
          include:{ 
            model:User, 
            required: true
          }
        })
        return res.json({allTasks})
    } catch (error) {
      console.error(error);
      return res.sendStatus(500);
    }
  }
  return res.status(401).json({ error: 'empty input' });
};

const editTask = async (req, res) =>{
  const {id, description} = req.body
 
 try {
  const post = await Post.findByPk(id);
  
  post.description = description;
  post.chnged = true
  await post.save();
  
  return res.sendStatus(201)
 } catch (error) {
      console.error(error);
      return res.sendStatus(500);
 }
}

const editStatusTask = async (req, res) =>{
  const {id} = req.params
 try {
  const post = await Post.findByPk(id);
  
  post.status ? post.status = false : post.status = true;
  await post.save();

  return res.sendStatus(201)
 } catch (error) {
      console.error(error);
      return res.sendStatus(500);
 }
}
const deleteTask = async (req,res) =>{
  const {id} = req.params
  try {
    await Post.destroy({where: {id: +id}},);
    const allTasks = await Post.findAll({
      raw: true, 
      include:{ 
        model:User, 
        required: true
      }
    })
    return res.json({allTasks})
  } catch (error) {
      console.error(error);
      return res.sendStatus(500);
  }
}

module.exports = {
  allTasks,
  newTask,
  editTask,
  editStatusTask,
  deleteTask,
};
