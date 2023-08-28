const checkAuth = (req, res, next) => {
  if (!req.session.user) {
    return res.json({ error: 'Not authorized!' });
  }
  return next();
};

module.exports = checkAuth;
