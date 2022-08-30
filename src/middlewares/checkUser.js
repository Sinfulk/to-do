const checkUser = (req, res, next) => {
  if (req.session.user) {
    return next();
  }
  return res.status(401).json({ error: 'Not authorized!' });
  
};

module.exports = checkUser;
